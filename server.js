const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');

const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from the current directory
app.use(serveStatic('.', {
  'index': ['index.html'],
  'dotfiles': 'ignore',
  'setHeaders': function (res, path) {
    // Disable caching for HTML files to ensure updates are visible
    if (path.endsWith('.html')) {
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      res.setHeader('Pragma', 'no-cache');
      res.setHeader('Expires', '0');
    }
  }
}));

// Handle React Router (SPA) routing - serve index.html for all non-asset requests
app.get('*', (req, res) => {
  // Only serve index.html for routes that don't look like static assets
  if (!req.path.includes('.')) {
    res.sendFile(path.join(__dirname, 'index.html'));
  } else {
    res.status(404).send('File not found');
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
  console.log(`Serving static files from: ${__dirname}`);
});