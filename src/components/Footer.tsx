import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-12 pt-8 border-t border-gray-200">
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Github className="w-5 h-5" />
            <span>Source Code</span>
          </a>
          <a
            href="https://acefile.co"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
            <span>Acefile.co</span>
          </a>
        </div>
        <p className="text-sm text-gray-500">
          Built with React, TypeScript, and Tailwind CSS
        </p>
      </div>
    </footer>
  );
};