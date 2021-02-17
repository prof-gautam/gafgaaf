import nodemailer from 'nodemailer';

const { MAIL_SERVICE, MAIL_USER, MAIL_PASS } = process.env;

/**
 * Creates transporter object that will help us to send emails
 */
const transporter = nodemailer.createTransport({
  service: "GMAIL",
  auth: {
    user: "gautamphuyal0@gmail.com",
    pass: "Sxc_social",
  },
});

/**
 *  Sends an email to user
 *
 * @param {string} to email address where to send mail
 * @param {string} subject of the email
 * @param {string} html content of the email
 */
export const sendEmail = ({ to, subject, html }) => {
  return new Promise((resolve, reject) => {
    const options = { from: MAIL_USER, to, subject, html };

    return transporter
      .sendMail(options)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
