import type { UploadHandlerPart } from "@remix-run/node";
import type { PutObjectCommandInput } from "@aws-sdk/client-s3";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { S3 } from "@aws-sdk/client-s3";

const s3Client = new S3({
  endpoint: process.env.S3_ENDPOINT,
  region: process.env.S3_REGION,
  forcePathStyle: true,
  credentials: {
    accessKeyId: process.env.S3_KEY!,
    secretAccessKey: process.env.S3_SECRET!,
  },
});

export { s3Client };

const uploadStreamToS3 = async (
  {
    data,
    key,
    contentType,
  }: {
    data: AsyncIterable<Uint8Array>;
    key: string;
    contentType: string;
  },
  bucketName: string,
  userId: string
) => {
  const params: PutObjectCommandInput = {
    Bucket: bucketName,
    Key: `${userId}/${key}`,
    Body: await convertToBuffer(data),
    ContentType: contentType,
  };

  await s3Client.send(new PutObjectCommand(params));

  let url = await getSignedUrl(
    s3Client,
    new GetObjectCommand({
      Bucket: bucketName,
      Key: key,
    }),
    { expiresIn: 15 * 60 }
  );

  console.log(url);

  return key;
};

// The UploadHandler gives us an AsyncIterable<Uint8Array>, so we need to convert that to something the aws-sdk can use.
// Here, we are going to convert that to a buffer to be consumed by the aws-sdk.
async function convertToBuffer(a: AsyncIterable<Uint8Array>) {
  const result = [];
  for await (const chunk of a) {
    result.push(chunk);
  }
  return Buffer.concat(result);
}

export const s3UploaderHandler = async (
  { filename, data, contentType }: UploadHandlerPart,
  fileType: string,
  userId: string
) => {
  return await uploadStreamToS3(
    { data, key: filename!, contentType },
    fileType,
    userId
  );
};
