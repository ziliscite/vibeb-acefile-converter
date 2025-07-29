import React from 'react';
import { isValidAcefileUrl } from '../utils/urlValidator';

interface UrlInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
  hasError: boolean;
}

export const UrlInput: React.FC<UrlInputProps> = ({
  value,
  onChange,
  onSubmit,
  isLoading,
  hasError
}) => {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  const isValid = value.length === 0 || isValidAcefileUrl(value);

  return (
    <div className="space-y-2">
      <label htmlFor="acefile-url" className="block text-sm font-medium text-gray-700">
        Acefile URL
      </label>
      <div className="relative">
        <input
          id="acefile-url"
          type="url"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="https://acefile.co/f/123456789/filename..."
          disabled={isLoading}
          className={`
            w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
            transition-colors duration-200 placeholder-gray-400
            ${!isValid ? 'border-red-300 bg-red-50' : hasError ? 'border-red-300' : 'border-gray-300'}
            ${isLoading ? 'bg-gray-50 cursor-not-allowed' : 'bg-white'}
          `}
        />
        {!isValid && value.length > 0 && (
          <div className="absolute inset-y-0 right-3 flex items-center">
            <div className="w-5 h-5 text-red-500">
              <svg viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        )}
      </div>
      {!isValid && value.length > 0 && (
        <p className="text-sm text-red-600">
          Please enter a valid Acefile URL (https://acefile.co/f/...)
        </p>
      )}
    </div>
  );
};