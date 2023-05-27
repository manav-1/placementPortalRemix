import nodemailer from 'nodemailer';
import type { MailOptions } from 'nodemailer/lib/json-transport';

const host = process.env.SMTP_HOST;
const port = process.env.SMTP_PORT;
const user = process.env.SMTP_USER;
const pass = process.env.SMTP_PASS;

const transporter = nodemailer.createTransport({
  port: Number(port),
  host,
  auth: {
    user,
    pass,
  },
  secure: true,
});

export const sendmail = (data: MailOptions) =>
  new Promise((resolve, reject) => {
    transporter.sendMail(data, (err, info) => {
      if (err) {
        reject(err);
      } else {
        resolve(info);
      }
    });
  });

export default transporter;
