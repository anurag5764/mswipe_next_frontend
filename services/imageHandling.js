

export const renderImage = imagePath => {
  let imageUrl = "/images/default.svg";

  if (imagePath) {
    /** When the AWS S3 plugin is activated, images are uploaded to S3 rather than local file system. */
    if (imagePath.startsWith("http") || imagePath.startsWith("https")) {
      imageUrl = imagePath;
    } else if (process.env.NEXT_PUBLIC_IMAGE_URL) {
      /** If now S3, then images are stored under the public/uploads directory of Strapi */
      imageUrl = `${process.env.NEXT_PUBLIC_IMAGE_URL}${imagePath}`;
    } else {
      imageUrl = `http://localhost:3000${imagePath}`;
    }
  }
  return imageUrl;
};
