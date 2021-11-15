// import express
import express from 'express';
import fs from 'fs';
import http from 'http';
import https from 'https';

const app = express();

// routes

app.get('/', (req, res) => {
  res.send('Hello world!');
});

// serve

if (process.env.DEV) {
  const PORT = 3001;
  app.listen(PORT, () => {
    console.log(`Local Server running on port ${PORT}`);
  });
} else if (process.env.PROD) {
  const httpsServer = https.createServer({
    key: fs.readFileSync('/etc/letsencrypt/live/nodejs-https.mpaulweeks.com/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/nodejs-https.mpaulweeks.com/fullchain.pem'),
  }, app);
  httpsServer.listen(443, () => {
    console.log('HTTPS Server running on port 443');
  });

  const httpServer = http.createServer(app);
  httpServer.listen(80, () => {
    console.log('HTTP Server running on port 80');
  });
} else {
  console.log('Environment unknown, aborting');
}
