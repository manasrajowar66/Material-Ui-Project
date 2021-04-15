const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/", (req, res) => {
  const { name, email, message,phone } = req.body;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: process.env.EMAIL, pass: process.env.PASS },
  });
  let mailOptions = {
    from: "Dev Connector",
    to: "manasrajowar66@gmail.com",
    subject: "Message Received!",
    html:`
    <p style="font-size:16px">From: ${name}</p>
    <p style="font-size:16px">Email: ${email}</p>
    <p style="font-size:16px">Phone No: ${phone}</p>
    <p style="font-size:16px">Message: ${message}</p>
    `
  };
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Message Send Successfully");
    }
  });

  mailOptions = {
    ...mailOptions,
    to:email,
    subject:'We have received your message!',
    html:'<p style="font-size:16px">Thanks for sending us a message! We’ll get back to you as soon as possible.</p>'
    
  };
  transporter.sendMail(mailOptions);
});

module.exports = router;
