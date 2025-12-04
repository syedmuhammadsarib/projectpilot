// Utility function to get the correct image URL based on environment
export const getImageUrl = (imagePath) => {
  // In production (GitHub Pages), add the base path
  const basePath = import.meta.env.PROD ? '/projectpilot' : '';
  return `${basePath}${imagePath}`;
};