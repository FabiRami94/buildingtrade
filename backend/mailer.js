
require("dotenv").config();
const {EMAILSEND, EMAILRECEIVE, PASS} = process.env;


const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({ // este es quien envia el correo
    // host: "smtp.forwardemail.net",
    // port: 465,
    service: "Gmail",
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: EMAILSEND,
      pass: PASS
    //   user: 'fabioerv.1994@gmail.com',
    //   pass: 'ysni oamo hdim cgqf'
    }
  });

    // async..await is not allowed in global scope, must use a wrapper
async function main() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: EMAILSEND, 
      to: EMAILRECEIVE, 
      subject: "Correo desde la página web + NOMBRE cliente de la DB",
      text: "Mensaje desde la DB prueba dooos",
    //   html: "<b>Hello world?</b>",
    }, function(error, info){
        if(error){
            console.log(error)
        } else {
            console.log("correo electronico enviado" + info.response)
        }
    });

    // console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    //
    // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
    //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
    //       <https://github.com/forwardemail/preview-email>
    //
  }
  
  main().catch(console.error);