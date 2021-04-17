const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/", (req, res) => {
  const { name, email, message, phone } = req.body;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: process.env.EMAIL, pass: process.env.PASS },
  });
  let mailOptions = {
    from: "Dev Connector",
    to: "manasrajowar66@gmail.com",
    subject: "Message Received!",
    html: `
    <p style="font-size:16px">From: ${name}</p>
    <p style="font-size:16px">Email: ${email}</p>
    <p style="font-size:16px">Phone No: ${phone}</p>
    <p style="font-size:16px">Message: ${message}</p>
    `,
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
    to: email,
    subject: "We have received your message!",
    html:
      '<p style="font-size:16px">Thanks for sending us a message! We’ll get back to you as soon as possible.</p>',
  };
  transporter.sendMail(mailOptions);
});

// for estimate page
router.post("/estimate", (req, res) => {
  const { name,email, message,phone,total,service,platforms,features,customFeature,user,catagory } = req.body;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: process.env.EMAIL, pass: process.env.PASS },
  });
  let mailOptions;
  if(!catagory){
    mailOptions = {
      from: "Dev Connector",
      to: "manasrajowar66@gmail.com",
      subject: "Estimate Received!",
      html:`
      <p style="font-size:16px">From: ${name}</p>
      <p style="font-size:16px">Email: ${email}</p>
      <p style="font-size:16px">Phone No: ${phone}</p>
      <p style="font-size:16px">Message: ${message}</p>
      <p style="font-size:16px">Total: ${total}</p>
      <p style="font-size:16px">Service: ${service}</p>
      <p style="font-size:16px">Platforms: ${platforms}</p>
      <p style="font-size:16px">Features: ${features}</p>
      <p style="font-size:16px">Custom Feature: ${customFeature}</p>
      <p style="font-size:16px">Users: ${user}</p>
      `
    };
  }else{
    mailOptions = {
      from: "Dev Connector",
      to: "manasrajowar66@gmail.com",
      subject: "Estimate Received!",
      html:`
      <p style="font-size:16px">From: ${name}</p>
      <p style="font-size:16px">Email: ${email}</p>
      <p style="font-size:16px">Phone No: ${phone}</p>
      <p style="font-size:16px">Message: ${message}</p>
      <p style="font-size:16px">Total: ${total}</p>
      <p style="font-size:16px">Service: ${service}</p>
      <p style="font-size:16px">Category: ${catagory}</p>
      `
    };
  }
  
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.log("error",err);
    } else {
      res.send("Message Send Successfully");
    }
  });

  mailOptions = {
    ...mailOptions,
    to:email,
    subject:'We have received your message!',
    html:'<p style="font-size:16px">Thanks for placing your estimate request! We’ll go over the details and get back to you as soon as possible.</p>'
    
  };
  transporter.sendMail(mailOptions);
});

module.exports = router;
