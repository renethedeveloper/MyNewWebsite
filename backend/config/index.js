const mongoose = require('mongoose');

async function connectToDatabase() {
  try {
    let connectionString = process.env.MONGO_URL;
    console.log(connectionString);

    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to DATABASE');
  } catch (error) {
    console.error('Connection to DATABASE failed:', error.message);
  }
}

// Call the function to initiate the connection
connectToDatabase();
