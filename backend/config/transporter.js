const nodemailer = require("nodemailer");
require('dotenv').config();
console.log(process.env.EMAIL_USER)

// Create reusable transporter object using the SMTP transport and values from .env file
const transporter = nodemailer.createTransport({
    service: "yahoo",
    port:3000,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  
  module.exports = transporter;
  

// Check if required environment variables are defined
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
  console.error("Error: EMAIL_USER or EMAIL_PASSWORD not defined in the environment.");
  process.exit(1); // Exit the process with an error code
}

