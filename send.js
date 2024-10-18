const { google } = require('googleapis');
const axios = require('axios');
const key = require('./service.json');

// Create a JWT client using the service account key
const jwtClient = new google.auth.JWT(
  key.client_email,
  null,
  key.private_key,
  ['https://www.googleapis.com/auth/cloud-platform']
);

// Authorize the client
jwtClient.authorize(async (err, tokens) => {
  if (err) {
    console.log('Error:', err);
    return;
  }

  // Access token from the authorized JWT client
  const accessToken = tokens.access_token;
  console.log('Access Token:', accessToken);

  // FCM API URL (replace with your project ID)
  const url = `https://fcm.googleapis.com/v1/projects/techgv-ae190/messages:send`;

  // Request body to send a notification
  const notificationPayload = {
    message: {
      token: "ePY9nuzCNEj4po74tEak1Bpz2bA8HXGVVasLLw44c4gmP9wH17YJ4nN5x",  // Replace with actual device token
      notification: {
        title: "Test Notification",
        body: "This is a test notification sent from Node.js"
      },
      android: {
        priority: "high"
      },
      apns: {
        headers: {
          "apns-priority": "10"
        }
      }
    }
  };

  try {
    // Send the notification using axios
    const response = await axios.post(url, notificationPayload, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    });

    // Log the response from Firebase
    console.log('FCM Response:', response.data);
  } catch (error) {
    // Handle any errors
    console.error('Error sending FCM message:', error.response ? error.response.data : error.message);
  }
});
