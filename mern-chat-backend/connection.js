const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(
  `mongodb+srv://ritsch:kissxsis1313@cluster0.m8a0qvq.mongodb.net/?retryWrites=true&w=majority`,
  () => {
    console.log('connected to mongodb');
  }
);
