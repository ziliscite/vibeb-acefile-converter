/**
 * Validates if the provided URL is a valid Acefile URL
 * @param url - The URL to validate
 * @returns boolean indicating if the URL is valid
 */
export const isValidAcefileUrl = (url: string): boolean => {
  if (!url || typeof url !== 'string') {
    return false;
  }

  // Remove whitespace
  const cleanUrl = url.trim();
  
  // Check if it's a valid URL format
  try {
    const urlObj = new URL(cleanUrl);
    
    // Check if it's an acefile.co domain
    if (urlObj.hostname !== 'acefile.co') {
      return false;
    }
    
    // Check if the path matches the expected pattern /f/{id}/...
    const pathPattern = /^\/f\/(\d+)\//;
    return pathPattern.test(urlObj.pathname);
  } catch {
    return false;
  }
};

/**
 * Extracts the file ID from an Acefile URL
 * @param url - The Acefile URL
 * @returns The extracted ID or null if invalid
 */
export const extractAcefileId = (url: string): string | null => {
  if (!isValidAcefileUrl(url)) {
    return null;
  }

  try {
    const urlObj = new URL(url.trim());
    const pathMatch = urlObj.pathname.match(/^\/f\/(\d+)\//);
    return pathMatch ? pathMatch[1] : null;
  } catch {
    return null;
  }
};

/**
 * Constructs a Google Drive URL from a file ID
 * @param fileId - The Google Drive file ID
 * @returns The complete Google Drive URL
 */
export const buildGoogleDriveUrl = (fileId: string): string => {
  return `https://drive.google.com/file/d/${fileId}/view`;
};