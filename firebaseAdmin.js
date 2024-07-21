const admin = require('firebase-admin');
const serviceAccount = require(''); // Update this path

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: '' // Update this URL to match your Firebase project
});

const db = admin.database();

module.exports = db;


