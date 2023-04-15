import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_API_KEY as string
);

async function uploadFile(file: any) {
  const { data, error } = await supabase.storage
    .from("workhub-resume")
    .upload(`resume/${file.name}`, file, {
      upsert: false,
    });

  console.log("Upload file", data, error);
  if (error) {
    // Handle error
  } else {
    // Handle success
  }
}

export { supabase, uploadFile };
