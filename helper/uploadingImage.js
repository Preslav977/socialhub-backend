const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = process.env.supabaseUrl;

const supabaseKey = process.env.supabaseAPI;

const supabase = createClient(supabaseUrl, supabaseKey);

async function uploadingImage(file) {
  const { error } = await supabase.storage
    .from("socialhub-images")
    .upload(`public/${file.originalname}`, file.buffer, {
      cacheControl: "3600",
      upsert: true,
      contentType: file.mimetype,
    });

  if (error) {
    throw new Error("Failed to upload image: ", error);
  }

  const { data } = await supabase.storage
    .from("socialhub-images")
    .getPublicUrl(`public/${file.originalname}`);

  return data.publicUrl;
}

module.exports = uploadingImage;
