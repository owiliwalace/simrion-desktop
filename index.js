const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.post('/addProperty', (req, res) => {
  const data = req.body;
  console.log('Received data:', data);

  // You can add logic to save to DB here, like Firebase or MongoDB

  res.json({ success: true, message: 'Property added successfully!' });
});

app.get('/', (req, res) => {
  res.send('API is running!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
