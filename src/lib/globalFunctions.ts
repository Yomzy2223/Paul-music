export const convertToLink = async (file: File, fileType = "image") => {
  const data = new FormData();
  data.append("file", file);
  data.append(
    "upload_preset",
    `${process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET}`
  );

  const endpoint = fileType === "image" ? "image/upload" : "raw/upload";

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_NAME}/${endpoint}`,
    {
      method: "post",
      body: data,
    }
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error(error);
    });
  return await res;
};
