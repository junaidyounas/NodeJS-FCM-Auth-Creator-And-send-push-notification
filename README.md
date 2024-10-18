# 🚀 Firebase Notification Service

This project demonstrates how to configure a Firebase service account and use **Node.js** to send notifications via **Firebase Cloud Messaging (FCM)**.

---

## 📄 Create `service.json`

Create a file named **`service.json`** in the root of your project with the following configuration:

```json
{
  "type": "service_account",
  "project_id": "t190",
  "private_key_id": "f54ee32b9599680",
  "private_key": "<YOUR_PRIVATE_KEY>",
  "client_email": "firebase-adminsdkceaccount.com",
  "client_id": "107748471703",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-5pt41%e190.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}
