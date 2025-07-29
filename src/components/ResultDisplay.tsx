import React from 'react';
import type { ConversionResult } from '../types';
import { useClipboard } from '../hooks/useClipboard';

interface ResultDisplayProps {
  result: ConversionResult;
  onClear: () => void;
}

export const ResultDisplay: React.FC<ResultDisplayProps> = ({ result, onClear }) => {
  const { copyToClipboard, copied } = useClipboard();

  const handleCopy = async () => {
    if (result.googleDriveUrl) {
      await copyToClipboard(result.googleDriveUrl);
    }
  };

  if (!result.success) {
    return (
      <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <div className="w-5 h-5 text-red-500">
              <svg viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-medium text-red-800">Conversion Failed</h3>
            <p className="mt-1 text-sm text-red-700">{result.error}</p>
          </div>
          <button
            onClick={onClear}
            className="flex-shrink-0 text-red-400 hover:text-red-600 transition-colors"
          >
            <div className="w-5 h-5">
              <svg viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          <div className="w-5 h-5 text-green-500">
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-medium text-green-800">Conversion Successful!</h3>
          <div className="mt-2 p-3 bg-white border border-green-200 rounded-md">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-900 font-mono break-all">
                {result.googleDriveUrl}
              </p>
              <button
                onClick={handleCopy}
                className={`
                  ml-3 flex-shrink-0 px-3 py-1 text-xs font-medium rounded-md transition-all duration-200
                  ${copied 
                    ? 'bg-green-100 text-green-800 border border-green-300' 
                    : 'bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200'
                  }
                `}
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>
        </div>
        <button
          onClick={onClear}
          className="flex-shrink-0 text-green-400 hover:text-green-600 transition-colors"
        >
          <div className="w-5 h-5">
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};