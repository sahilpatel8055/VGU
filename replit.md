# Online VGU Website - Project Setup

## Overview
This is a static React-based website for Vivekananda Global University's online programs. The website has been successfully imported from GitHub and configured to run in the Replit environment.

## Project Architecture
- **Frontend**: Pre-built React application with static assets
- **Server**: Express.js server serving static files
- **Build System**: No build required - pre-compiled static assets
- **Deployment**: Configured for autoscale deployment

## Recent Changes
- **2025-09-27**: Initial project import and setup
  - Installed Node.js 20 and Express server
  - Created server.js to serve static files on port 5000
  - Configured SPA routing for React Router
  - Set up workflow for development server
  - Configured deployment settings for production

## Technical Setup
- **Host**: 0.0.0.0:5000 (required for Replit proxy)
- **Static Files**: Served from root directory
- **Cache Control**: Disabled for HTML files to ensure updates are visible
- **SPA Support**: Fallback to index.html for client-side routing

## Known Issues
- External scripts (Google Analytics, Facebook Pixel) return 404 errors - this is expected and doesn't affect core functionality
- Website loads and functions correctly despite these external script errors

## User Preferences
- Standard web development setup
- Focus on maintaining existing functionality
- Clean, professional deployment configuration

## Dependencies
- express: ^4.18.2
- serve-static: ^1.15.0
- Node.js 20

## File Structure
```
/
├── index.html          # Main HTML file
├── scripts/           # JavaScript bundles
├── styles/           # CSS files  
├── images/           # Static assets
├── documents/        # PDF documents
├── html/            # Additional HTML pages
├── server.js        # Express server
├── package.json     # Node.js dependencies
└── replit.md       # This documentation
```