const admin = require('firebase-admin');
const serviceAccount = require('./spendwise-ca308-firebase-adminsdk-pbfcj-619b28a129.json'); // Update this path

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://spendwise-ca308-default-rtdb.firebaseio.com/' // Update this URL to match your Firebase project
});

const db = admin.database();

module.exports = db;
