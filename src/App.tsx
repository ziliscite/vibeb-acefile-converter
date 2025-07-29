import React from 'react';
import { Header } from './components/Header';
import { UrlInput } from './components/UrlInput';
import { ConvertButton } from './components/ConvertButton';
import { ResultDisplay } from './components/ResultDisplay';
import { Footer } from './components/Footer';
import { useConversion } from './hooks/useConversion';
import { isValidAcefileUrl } from './utils/urlValidator';

function App() {
  const {
    inputUrl,
    isLoading,
    result,
    setInputUrl,
    convertUrl,
    clearResult
  } = useConversion();

  const isInputValid = inputUrl.trim().length > 0 && isValidAcefileUrl(inputUrl.trim());

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Header />
        
        <main className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="space-y-6">
            <UrlInput
              value={inputUrl}
              onChange={setInputUrl}
              onSubmit={convertUrl}
              isLoading={isLoading}
              hasError={result?.success === false}
            />
            
            <ConvertButton
              onClick={convertUrl}
              isLoading={isLoading}
              disabled={!isInputValid}
            />
            
            {result && (
              <ResultDisplay
                result={result}
                onClear={clearResult}
              />
            )}
          </div>
          
          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-900 mb-2">How it works:</h3>
            <ol className="text-sm text-gray-600 space-y-1">
              <li>1. Paste your Acefile URL (e.g., https://acefile.co/f/123456789/filename...)</li>
              <li>2. Click "Convert to Google Drive" to process the link</li>
              <li>3. Get your direct Google Drive link and copy it to share</li>
            </ol>
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;