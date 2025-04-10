const admin = require('firebase-admin');
const serviceAccount = require('./config/zabuni-985c6-firebase-adminsdk-okm8p-f73634e66e.json'); // Adjust the path to where your downloaded file is stored

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore(); // This is the Firestore database reference
module.exports = { db }; // Export the db object to use in other parts of your code
