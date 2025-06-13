const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const userRoutes = require('../routes/userRoutes');
const productRoutes = require('./routes/productRoutes.');

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB - replace with your actual connection string
mongoose.connect('mongodb+srv://sanaasayeed05:Sanaa_123@cluster0.ycoafs5.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// Use routes
app.use('/users', userRoutes);
app.use('/products', productRoutes);

app.listen(3000, () => {
  console.log('🚀 Server started on http://localhost:3000');
});


