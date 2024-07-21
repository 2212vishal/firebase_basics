const db = require('../firebaseAdmin');
const moment = require('moment');

const createSms = async (req, res) => {
  try {
    const data = req.body;
    if (!data || Object.keys(data).length === 0) {
      return res.status(400).send({ error: 'Invalid or empty request body' });
    }

    const newSmsRef = db.ref('sms').push();
    await newSmsRef.set(data);
    res.send({ msg: "SMS Added", id: newSmsRef.key });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const getAllSms = async (req, res) => {
  try {
    const snapshot = await db.ref('sms').once('value');
    const smsData = snapshot.val();
    res.send(smsData);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const formatAndSaveSms = async (req, res) => {
  try {
    const snapshot = await db.ref('sms').once('value');
    const smsData = snapshot.val();

    if (smsData) {
      for (const key in smsData) {
        if (smsData.hasOwnProperty(key)) {
          const sms = smsData[key];
          const formattedTimestamp = moment(sms.timestamp).format('YYYY-MM-DD HH:mm:ss');
          const formattedSms = {
            ...sms,
            formattedTimestamp,
          };
          await db.ref(`formatted_sms/${key}`).set(formattedSms);
        }
      }
    }

    res.send({ msg: "SMS data formatted and saved to 'formatted_sms' collection." });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const getTotalAmount = async (req, res) => {
  try {
    const snapshot = await db.ref('sms').once('value');
    const smsData = snapshot.val();

    let totalAmount = 0;
    if (smsData) {
      for (const key in smsData) {
        if (smsData.hasOwnProperty(key)) {
          totalAmount += smsData[key].amount || 0;
        }
      }
    }

    res.send({ totalAmount });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = {
  createSms,
  getAllSms,
  formatAndSaveSms,
  getTotalAmount,  // Export the new function
};
