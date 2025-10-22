/**
 * Optimizes a Cloudinary URL by adding f_auto and q_auto parameters.
 * This tells Cloudinary to automatically select the best format and quality.
 * @param url The original Cloudinary image URL.
 * @returns The optimized URL.
 */
export const optimizeCloudinaryUrl = (url: string): string => {
  if (!url || !url.includes('res.cloudinary.com/')) {
    return url;
  }
  
  // Split the URL at the /upload/ part
  const parts = url.split('/upload/');
  
  if (parts.length !== 2) {
    // Return original URL if it's not a standard Cloudinary format
    return url;
  }

  // The second part contains transformations and the public_id
  const transformationsAndPath = parts[1];
  
  // Check if our optimization params are already there to avoid duplication
  if (transformationsAndPath.includes('f_auto') || transformationsAndPath.includes('q_auto')) {
    return url;
  }
  
  // Reconstruct the URL with the optimization parameters inserted
  return `${parts[0]}/upload/f_auto,q_auto/${transformationsAndPath}`;
};