require('dotenv').config();

const bodyParser = require('body-parser');
const express = require('express');
const outlookMail = require('nodejs-nodemailer-outlook');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 5000;
const FRONTEND_FOLDER = path.join(__dirname, '..', 'ui', 'build');
const FRONTEND_INDEX = path.join(FRONTEND_FOLDER, 'index.html');

app.use(bodyParser.json());
app.use(express.static(FRONTEND_FOLDER));

app.post('/api/sendEmail', (req, res) => {
  const { email, name, message } = req.body;

  const subject = `Portfolio message from ${name}`;
  const text = `
    Name: ${name}
    Email: ${email}
    Message: ${message}
  `;

  outlookMail.sendEmail({
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    },
    to: process.env.EMAIL_USERNAME,
    from: process.env.EMAIL_USERNAME,
    subject,
    text,
    onError: (e) => {
      console.error(e);
      res.status(400).send('Error sending mail.');
    },
    onSuccess: (i) => {
      console.log(i);
      res.send('Mail sent.');
    }
  });
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, FRONTEND_INDEX));
});

app.listen(PORT, () => console.log(`App started on ${PORT}`));
