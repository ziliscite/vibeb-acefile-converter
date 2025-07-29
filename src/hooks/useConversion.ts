import { useState, useCallback } from 'react';
import type { ConversionState } from '../types';
import { convertAcefileToGoogleDrive } from '../services/acefileApi';

/**
 * Custom hook for managing the conversion process
 */
export const useConversion = () => {
  const [state, setState] = useState<ConversionState>({
    isLoading: false,
    result: null,
    inputUrl: ''
  });

  const setInputUrl = useCallback((url: string) => {
    setState(prev => ({ ...prev, inputUrl: url }));
  }, []);

  const convertUrl = useCallback(async () => {
    if (!state.inputUrl.trim()) {
      setState(prev => ({
        ...prev,
        result: {
          success: false,
          error: 'Please enter an Acefile URL'
        }
      }));
      return;
    }

    setState(prev => ({ ...prev, isLoading: true, result: null }));

    try {
      const result = await convertAcefileToGoogleDrive(state.inputUrl.trim());
      setState(prev => ({ ...prev, result, isLoading: false }));
    } catch (error) {
      setState(prev => ({
        ...prev,
        isLoading: false,
        result: {
          success: false,
          error: 'An unexpected error occurred. Please try again.'
        }
      }));
    }
  }, [state.inputUrl]);

  const clearResult = useCallback(() => {
    setState(prev => ({ ...prev, result: null }));
  }, []);

  return {
    ...state,
    setInputUrl,
    convertUrl,
    clearResult
  };
};