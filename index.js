// index.js or sendEmail.js
require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.ZOHO_USER,
    pass: process.env.ZOHO_PASS
  }
});

// now you can safely use process.env.ZOHO_USER and process.env.ZOHO_PASS
