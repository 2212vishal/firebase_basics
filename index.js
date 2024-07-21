const express = require('express');
const cors = require('cors');
const smsRoutes = require('./routes/smsRoutes');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/sms', smsRoutes);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
