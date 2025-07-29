import React from 'react';
import { Link } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="text-center mb-8">
      <div className="flex items-center justify-center mb-4">
        <div className="bg-blue-100 p-3 rounded-full">
          <Link className="w-8 h-8 text-blue-600" />
        </div>
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        Acefile to Google Drive Converter
      </h1>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Convert Acefile links to direct Google Drive links instantly. 
        Simply paste your Acefile URL and get a shareable Google Drive link.
      </p>
    </header>
  );
};