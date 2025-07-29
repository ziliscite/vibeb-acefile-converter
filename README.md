# Acefile to Google Drive Link Converter

A modern web application that converts Acefile links to direct Google Drive links with a clean, user-friendly interface.

## 🚀 Features

- **Instant Conversion**: Convert Acefile URLs to Google Drive links in seconds
- **URL Validation**: Real-time validation of Acefile URL format
- **Copy to Clipboard**: One-click copying of converted links
- **Error Handling**: Comprehensive error messages and network failure handling
- **Responsive Design**: Mobile-friendly interface that works on all devices
- **Loading States**: Visual feedback during conversion process
- **Clean UI**: Modern, accessible design built with Tailwind CSS

## 🔧 How It Works

The application follows this conversion process:

1. **Input Validation**: Validates that the input URL matches the Acefile format (`https://acefile.co/f/{id}/...`)
2. **ID Extraction**: Extracts the numeric ID from the URL segment after `/f/`
3. **API Request**: Makes a GET request to `https://acefile.co/service/resource_check/{id}/`
4. **Data Processing**: Parses the JSON response and extracts the `data` field (Google Drive file ID)
5. **Link Construction**: Builds the final Google Drive URL (`https://drive.google.com/file/d/{data}/view`)

### Example Conversion

- **Input**: `https://acefile.co/f/108974269/lendrive-example-file.zip`
- **API Endpoint**: `https://acefile.co/service/resource_check/108974269/`
- **Output**: `https://drive.google.com/file/d/1iedJyHzAi997Ijz3V6xyEl10S_6z8DeZ/view`

## 🛠️ Technical Stack

- **Frontend**: React 18+ with TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **HTTP Client**: Native Fetch API
- **Deployment**: GitHub Pages with GitHub Actions

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Application header with branding
│   ├── UrlInput.tsx    # URL input field with validation
│   ├── ConvertButton.tsx # Conversion trigger button
│   ├── ResultDisplay.tsx # Results and error display
│   ├── LoadingSpinner.tsx # Loading indicator
│   └── Footer.tsx      # Application footer
├── hooks/              # Custom React hooks
│   ├── useConversion.ts # Conversion state management
│   └── useClipboard.ts # Clipboard operations
├── services/           # API services
│   └── acefileApi.ts   # Acefile API integration
├── types/              # TypeScript interfaces
│   └── index.ts        # Type definitions
├── utils/              # Utility functions
│   └── urlValidator.ts # URL validation and parsing
└── App.tsx            # Main application component
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/acefile-converter.git
cd acefile-converter
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🧪 Testing

Run the test suite:
```bash
npm test
```

## 🚀 Deployment

The application is automatically deployed to GitHub Pages using GitHub Actions when changes are pushed to the `main` branch.

### Manual Deployment Setup

1. Enable GitHub Pages in your repository settings
2. Set the source to "GitHub Actions"
3. Push to the `main` branch to trigger automatic deployment

## 🔒 Security & Privacy

- **No Data Storage**: The application doesn't store any URLs or personal data
- **Client-Side Processing**: All URL validation and processing happens in your browser
- **HTTPS Only**: All API calls are made over secure HTTPS connections
- **No Tracking**: The application doesn't use any analytics or tracking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 API Documentation

### Acefile API Endpoint

The application uses the following Acefile API endpoint:

```
GET https://acefile.co/service/resource_check/{id}/
```

**Response Format:**
```json
{
  "data": "1iedJyHzAi997Ijz3V6xyEl10S_6z8DeZ",
  "status": "success"
}
```

## 🐛 Troubleshooting

### Common Issues

1. **"Invalid Acefile URL format" error**
   - Ensure the URL starts with `https://acefile.co/f/`
   - Check that the URL contains a numeric ID after `/f/`

2. **"Network error" message**
   - Check your internet connection
   - Verify the Acefile service is accessible
   - Try again after a few moments

3. **"Invalid response from Acefile API" error**
   - The file might not exist or be accessible
   - The Acefile link might have expired
   - Try with a different Acefile URL

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Acefile.co](https://acefile.co) for providing the conversion API
- [Tailwind CSS](https://tailwindcss.com) for the styling framework
- [Lucide React](https://lucide.dev) for the beautiful icons
- [Vite](https://vitejs.dev) for the fast development experience

## 📞 Support

If you encounter any issues or have questions, please [open an issue](https://github.com/your-username/acefile-converter/issues) on GitHub.

---

Made with VibeCoding and modern web technologies (Vibe)