const { google } = require("googleapis");
const axios = require("axios");
const key = require("./service.json");

// Create a JWT client using the service account key
const jwtClient = new google.auth.JWT(key.client_email, null, key.private_key, [
  "https://www.googleapis.com/auth/cloud-platform",
]);

// Authorize the client
jwtClient.authorize(async (err, tokens) => {
  if (err) {
    console.log("Error:", err);
    return;
  }

  // Access token from the authorized JWT client
  const accessToken = tokens.access_token;
  console.log("Access Token:", accessToken);

  // FCM API URL (replace with your project ID)
  const url = `https://fcm.googleapis.com/v1/projects/techgv-ae190/messages:send`;

  // Request body to send a notification
  const notificationPayload = {
    message: {
      token:
        "fiBxZX8D_0pggn-AEkeubP:APA91bHgU6STVXllXJi5R_wmWalbKaDYb38UvTYyTbbW-Rcom6ZZghbmGgtc2B9DhKaEYj3kAGmobkQ9nF_FHWXIX0Jf6bHC838NJ58tyvHdUC9MMCKnWx0", // Replace with actual device token
      notification: {
        title: "Test Notification",
        body: "This is a test notification sent from Node.js",
      },
      data: {
        body: "Notification Body Report",
        title: "Notification Title",
        type: "ticket_live_chat",
        type_id: "72",
        priority: "high",
        user_ids: "1",
        customKey: "customValue",
        message_id: "message-2"
      },
      android: {
        priority: "high",
      },
      apns: {
        payload: {
          aps: {
            alert: {
              title: "Notification Title",
              body: "Notification Body Report",
            },
            sound: "default",
            badge: 0,
          },
        },
        headers: {
          "apns-priority": "10",
          "apns-collapse-id": "unique-notification-123",
        },
      },
    },
  };

  try {
    // Send the notification using axios
    const response = await axios.post(url, notificationPayload, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    // Log the response from Firebase
    console.log("FCM Response:", response.data);
  } catch (error) {
    // Handle any errors
    console.error(
      "Error sending FCM message:",
      error.response ? error.response.data : error.message
    );
  }
});
