const admin = require('firebase-admin');

const serviceAccount = {
  "type": "service_account",
  "project_id": "zabuni-985c6",
  "private_key_id": "f73634e66e9dcff9a53f8eb0f2f4d5ed619f9133",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDC38jiWIW/xlC6\n0TpVuDNxg..."
  "client_email": "firebase-adminsdk-okm8p@zabuni-985c6.iam.gserviceaccount.com",
  "client_id": "112324708076752349374",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-okm8p%40zabuni-985c6.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore(); // Firestore reference
module.exports = { db };
