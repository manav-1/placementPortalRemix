import type { UploadHandlerPart } from '@remix-run/node';
import type { PutObjectCommandInput } from '@aws-sdk/client-s3';
import { PutObjectCommand, S3 } from '@aws-sdk/client-s3';

const s3Client = new S3({
  region: process.env.S3_REGION,
  forcePathStyle: true,
  credentials: {
    accessKeyId: process.env.S3_KEY!,
    secretAccessKey: process.env.S3_SECRET!,
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

export const getObjectURL = async (folderName: string, userId: string) =>
  `https://d21irt8vy9p0p5.cloudfront.net/${folderName}/${userId}`;

const uploadStreamToS3 = async (
  {
    data,
    contentType,
  }: {
    data: AsyncIterable<Uint8Array>;
    contentType: string;
  },
  folderName: string,
  userId: string,
) => {
  const params: PutObjectCommandInput = {
    Bucket: bucketName,
    Key: `${process.env.COLLEGE_SCHEMA}/${folderName}/${userId}`,
    Body: await convertToBuffer(data),
    ContentType: contentType,
  };

  await s3Client.send(new PutObjectCommand(params));
  return 'success';
};

export const s3UploaderHandler = async (
  { data, contentType }: UploadHandlerPart,
  fileType: string,
  userId: string,
) => uploadStreamToS3({ data, contentType }, fileType, userId);
