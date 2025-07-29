import type { AcefileApiResponse, ConversionResult } from '../types';
import { extractAcefileId, buildGoogleDriveUrl } from '../utils/urlValidator';

/**
 * Converts an Acefile URL to a Google Drive URL
 * @param acefileUrl - The Acefile URL to convert
 * @returns Promise<ConversionResult>
 */
export const convertAcefileToGoogleDrive = async (acefileUrl: string): Promise<ConversionResult> => {
  try {
    // Extract the file ID from the Acefile URL
    const fileId = extractAcefileId(acefileUrl);
    
    if (!fileId) {
      return {
        success: false,
        error: 'Invalid Acefile URL format. Please ensure the URL follows the pattern: https://acefile.co/f/{id}/...'
      };
    }

    // Make API call to Acefile service
    const apiUrl = `/api/service/resource_check/${fileId}/`;
    
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }

    const data: AcefileApiResponse = await response.json();

    // Check if the response contains the required data
    if (!data.data || typeof data.data !== 'string') {
      return {
        success: false,
        error: 'Invalid response from Acefile API. The file might not exist or be accessible.'
      };
    }

    // Build the Google Drive URL
    const googleDriveUrl = buildGoogleDriveUrl(data.data);

    return {
      success: true,
      googleDriveUrl
    };

  } catch (error) {
    console.error('Conversion error:', error);
    
    // Handle different types of errors
    if (error instanceof TypeError && error.message.includes('fetch')) {
      return {
        success: false,
        error: 'Network error. Please check your internet connection and try again.'
      };
    }

    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unexpected error occurred during conversion.'
    };
  }
};