const validImageFormats = ["webp", "jpeg", "png", "avif", "gif"];
const TrustedImageFormat = (imageFormat) => {
  const trustedImageFormat =
    imageFormat[0] === "." ? imageFormat.substring(1) : imageFormat;

  if (!validImageFormats.includes(trustedImageFormat)) {
    throw new Error(`"${trustedImageFormat}" it's not a valid image format.`);
  }

  return trustedImageFormat;
};

export default TrustedImageFormat;
