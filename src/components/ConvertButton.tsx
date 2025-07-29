import React from 'react';
import { LoadingSpinner } from './LoadingSpinner';

interface ConvertButtonProps {
  onClick: () => void;
  isLoading: boolean;
  disabled: boolean;
}

export const ConvertButton: React.FC<ConvertButtonProps> = ({
  onClick,
  isLoading,
  disabled
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`
        w-full py-3 px-6 rounded-lg font-medium text-white transition-all duration-200
        ${disabled || isLoading
          ? 'bg-gray-400 cursor-not-allowed'
          : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-0.5'
        }
        flex items-center justify-center space-x-2
      `}
    >
      {isLoading ? (
        <>
          <LoadingSpinner size="sm" className="text-white" />
          <span>Converting...</span>
        </>
      ) : (
        <span>Convert to Google Drive</span>
      )}
    </button>
  );
};