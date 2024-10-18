create service.json with these configurations

{
  "type": "service_account",
  "project_id": "t190",
  "private_key_id": "f54ee32b904976adf599680",
  "private_key": "",
  "client_email": "firebase-adminsdkceaccount.com",
  "client_id": "107748471703",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-5pt41%e190.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}


paste your own credentials above.

After hitting send.js you will get a authentication token and then you be able to send the notification on specific token which you define on send.js

