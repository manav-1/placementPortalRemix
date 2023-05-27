import nodemailer from 'nodemailer';
import type { MailOptions } from 'nodemailer/lib/json-transport';
import * as aws from '@aws-sdk/client-ses';

const user = process.env.AWSKEY;
const pass = process.env.AWSSECRET;

const ses = new aws.SES({
  apiVersion: '2010-12-01',
  region: 'ap-south-1',

  credentials: {
    accessKeyId: user!,
    secretAccessKey: pass!,
  },
});

const transporter = nodemailer.createTransport({
  SES: {
    ses,
    aws,
  },
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

export const loadTemplate = async (url: string) =>
  fetch(url).then((resp) => resp.text());
