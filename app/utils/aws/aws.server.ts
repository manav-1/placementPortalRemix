import type { UploadHandlerPart } from '@remix-run/node';
import type { PutObjectCommandInput } from '@aws-sdk/client-s3';
import { PutObjectCommand, S3 } from '@aws-sdk/client-s3';

const s3Client = new S3({
  region: process.env.AWSREGION,
  forcePathStyle: true,
  credentials: {
    accessKeyId: process.env.AWSKEY!,
    secretAccessKey: process.env.AWSSECRET!,
  },
});

const bucketName = 'workhub';

export { s3Client };

// The UploadHandler gives us an AsyncIterable<Uint8Array>,
// so we need to convert that to something the aws-sdk can use.
// Here, we are going to convert that to a buffer to be consumed by the aws-sdk.
async function convertToBuffer(a: AsyncIterable<Uint8Array>) {
  const result = [];
  // eslint-disable-next-line no-restricted-syntax
  for await (const chunk of a) {
    result.push(chunk);
  }
  return Buffer.concat(result);
}

export const getObjectURL = async (key: string) =>
  `${process.env.CLOUDFRONT_URL}/${key}`;

export const uploadToS3 = async (
  {
    data,
    filename,
    contentType,
  }: {
    data: any;
    filename: string;
    contentType: string;
  },
  folderName: string,
  userId?: string,
) => {
  let Key = `${process.env.COLLEGE_SCHEMA}/${folderName}`;
  if (userId) Key += `/${userId} - ${filename}`;
  else Key += `/${filename}`;
  const params: PutObjectCommandInput = {
    Bucket: bucketName,
    Key,
    Body: data,
    ContentType: contentType,
  };

  await s3Client.send(new PutObjectCommand(params));
  return Key;
};

export const s3UploaderHandler = async (
  { data, filename, contentType }: UploadHandlerPart,
  fileType: string,
  userId: string,
) =>
  uploadToS3(
    { data: convertToBuffer(data), filename: filename!, contentType },
    fileType,
    userId,
  );
