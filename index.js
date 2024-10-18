const { google } = require('googleapis');
const key = require('./service.json');  // Path to your service account key

// Create a JWT client using the service account key
const jwtClient = new google.auth.JWT(
  key.client_email,
  null,
  key.private_key,
  ['https://www.googleapis.com/auth/cloud-platform']
);

// Authorize the client and generate an access token
jwtClient.authorize((err, tokens) => {
  if (err) {
    console.log('Error generating access token:', err);
    return;
  }

  // Output the access token
  console.log('Access Token:', tokens.access_token);
});
