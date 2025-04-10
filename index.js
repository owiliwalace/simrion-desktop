const express = require('express');
const { db } = require('./firebase'); // Import Firebase db reference
require('dotenv').config();
const app = express();
const port = process.env.PORT || 10000;

// Fetch data from the 'payments' collection
app.get('/payments', async (req, res) => {
  try {
    const paymentsSnapshot = await db.collection('payments').get();
    const paymentsData = paymentsSnapshot.docs.map(doc => doc.data());
    res.json(paymentsData);
  } catch (error) {
    console.error('Error fetching payments data:', error);
    res.status(500).send('Error fetching data from Firestore');
  }
});

// Other routes for simrion and monthly would be similar
app.get('/simrion', async (req, res) => {
  try {
    const simrionSnapshot = await db.collection('simrion').get();
    const simrionData = simrionSnapshot.docs.map(doc => doc.data());
    res.json(simrionData);
  } catch (error) {
    console.error('Error fetching simrion data:', error);
    res.status(500).send('Error fetching data from Firestore');
  }
});

app.get('/monthly', async (req, res) => {
  try {
    const monthlySnapshot = await db.collection('monthly').get();
    const monthlyData = monthlySnapshot.docs.map(doc => doc.data());
    res.json(monthlyData);
  } catch (error) {
    console.error('Error fetching monthly data:', error);
    res.status(500).send('Error fetching data from Firestore');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
