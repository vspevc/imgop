const CheckImageQuality = (imageQuality) => {
  if (imageQuality < 1 || imageQuality > 100) {
    throw new Error("Image quality must be between 1 and 100.");
  }
};

export default CheckImageQuality;
