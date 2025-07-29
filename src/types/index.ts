export interface AcefileApiResponse {
  data: string;
  status: 'success' | 'error';
  message?: string;
}

export interface ConversionResult {
  success: boolean;
  googleDriveUrl?: string;
  error?: string;
}

export interface ConversionState {
  isLoading: boolean;
  result: ConversionResult | null;
  inputUrl: string;
}

export interface CopyState {
  copied: boolean;
  text: string;
}