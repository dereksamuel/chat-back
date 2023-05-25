const nodemailer = require("nodemailer");

async function sendMail() {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "11dereksamuel@gmail.com",
      pass: "ejiufqdpdlzkhgmo"
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "11dereksamuel@gmail.com", // sender address
    to: "dereksamuelgr@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello Derek gr?", // plain text body
    html: "<b>Hello? <strong>Hello DEREK</strong> </b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

sendMail();
