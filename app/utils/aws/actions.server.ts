import type { ActionFunction } from "@remix-run/node";
import {
  unstable_composeUploadHandlers,
  unstable_createMemoryUploadHandler,
  unstable_parseMultipartFormData,
} from "@remix-run/node";
import { s3UploaderHandler } from "./aws.server";
import { getUserPermissions } from "../auth/auth.server";

export const UploadAction: ActionFunction = async ({ request }) => {
  const user = await getUserPermissions(request);
  const params = new URL(request.url).searchParams;
  const fileType = params.get("file-type");
  if (!fileType) throw new Error("File type is required");

  const uploadHandler = unstable_composeUploadHandlers(async (data) => {
    return await s3UploaderHandler(data, fileType, user.id);
  }, unstable_createMemoryUploadHandler());

  const formData = await unstable_parseMultipartFormData(
    request,
    uploadHandler
  );
  const fileName = formData.get("upload");

  return {
    filename: fileName,
  };
};
