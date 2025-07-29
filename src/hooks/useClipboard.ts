import { useState, useCallback } from 'react';
import type { CopyState } from '../types';

/**
 * Custom hook for clipboard operations with feedback
 */
export const useClipboard = (resetDelay: number = 2000) => {
  const [copyState, setCopyState] = useState<CopyState>({
    copied: false,
    text: ''
  });

  const copyToClipboard = useCallback(async (text: string): Promise<boolean> => {
    try {
      await navigator.clipboard.writeText(text);
      setCopyState({ copied: true, text });
      
      // Reset the copied state after delay
      setTimeout(() => {
        setCopyState(prev => ({ ...prev, copied: false }));
      }, resetDelay);
      
      return true;
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
      setCopyState({ copied: false, text: '' });
      return false;
    }
  }, [resetDelay]);

  return {
    copyToClipboard,
    copied: copyState.copied,
    copiedText: copyState.text
  };
};