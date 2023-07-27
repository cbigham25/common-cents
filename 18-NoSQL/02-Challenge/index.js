const express = require('express');
const mongoose = require('mongoose');

const app = express();

const PORT = process.env.PORT || 8001;

mongoose.connect('mongodb://localhost:27017/social_network_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
