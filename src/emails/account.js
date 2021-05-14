const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail
    .send({
      to: email,
      from: "hassantahawar4u@gmail.com",
      subject: "Welcome to Task App!",
      text: `Hi ${name}, Happy to have you here`,
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

const sendCancelEmail = (email, name) => {
  sgMail
    .send({
      to: email,
      from: "hassantahawar4u@gmail.com",
      subject: "Sorry to see you leave.",
      text: `Hi ${name}, Sorry to see you leave`,
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

module.exports = {
  sendWelcomeEmail,
  sendCancelEmail,
};
