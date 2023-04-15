import type { ActionFunction } from "@remix-run/server-runtime";
import { uploadFile } from "../supabase/client.server";

export const ProfileAction: ActionFunction = async ({ request }) => {
  const form = await request.formData();

  const firstName = form.get("firstName");
  const lastName = form.get("lastName");
  const stream = form.get("streamId");
  const marks10 = form.get("marks10");
  const marks12 = form.get("marks12");
  const marksGrad = form.get("marksGrad");
  const marksPost = form.get("marksPost");
  const resume = form.get("resume");
  const resumeFile = form.get("resumeFile");
  console.log(
    firstName,
    lastName,
    stream,
    marks10,
    marks12,
    marksGrad,
    marksPost,
    resume,
    resumeFile,
    "ResumeFile"
  );

  await uploadFile(resumeFile);
  return null;
};
