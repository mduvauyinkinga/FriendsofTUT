const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

let transporter;

// Ethereal demo transporter
  const createTransporter = () => {
    transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: process.env.ETHEREAL_USER || 'demo_user',
        pass: process.env.ETHEREAL_PASS || 'demo_pass',
      },
    });
    transporter.verify((error) => {
      if (error) console.log('SMTP warning:', error);
      else console.log('Demo SMTP ready - visit ethereal.email for creds');
    });
  };

// API endpoint
app.post('/api/submit', async (req, res) => {
  try {
    const { name, email, department, message } = req.body;

    const mailOptions = {
      from: '"Friends of TUT" <noreply@friendsoftut.co.za>',
      to: 'hello@friendsoftut.co.za', // Your email
      subject: `New Application - ${department || 'General'}`,
      html: `
        <h2>New Application Submitted</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Department:</strong> ${department}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Application sent!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

createTransporter();
app.listen(PORT, () => console.log(`Backend on http://localhost:${PORT}`));
