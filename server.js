const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Set up static file serving with proper cache headers
app.use(express.static('.', {
  setHeaders: function (res, filePath) {
    // Disable caching for HTML files to ensure updates are visible
    if (filePath.endsWith('.html')) {
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      res.setHeader('Pragma', 'no-cache');
      res.setHeader('Expires', '0');
    }
    // Set proper MIME types for JavaScript modules
    if (filePath.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    }
  }
}));

// Handle React Router (SPA) routing - serve index.html for all non-asset requests
app.get('*', (req, res) => {
  // Check if this is a request for a static asset
  const ext = path.extname(req.path);
  if (ext && (ext === '.js' || ext === '.css' || ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif' || ext === '.ico' || ext === '.svg' || ext === '.woff' || ext === '.woff2' || ext === '.ttf' || ext === '.eot' || ext === '.webp' || ext === '.pdf' || ext === '.html')) {
    // Let static middleware handle it, or return 404 if not found
    return res.status(404).send('File not found');
  }
  
  // For routes without extensions, serve the SPA
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
  console.log(`Serving static files from: ${__dirname}`);
});