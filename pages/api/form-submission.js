//* /api/form-submission
import { renderToString } from "react-dom/server";
import { createTransport } from "nodemailer";
import * as dotenv from "dotenv";
dotenv.config();

import EmailAdmin from "../../components/Email/EmailAdmin";
import EmailClient from "../../components/Email/EmailClient";

const service = process.env.EMAIL_SERVICE;
const user = process.env.EMAIL_USER;
const pass = process.env.EMAIL_PASSWORD;

const transport = {
  service,
  auth: {
    user,
    pass,
  },
};

const emailAwait = async (emails) => {
  const transporter = createTransport(transport);
  await transporter.sendMail(emails[0]);
  await transporter.sendMail(emails[1]);
  return;
};

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    const dataObj = JSON.parse(data);

    const adminEmail = renderToString(<EmailAdmin emailObj={dataObj} />);
    const adminOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "Perry Morris Insurance: New Message Received",
      text: "Email text",
      html: adminEmail,
    };

    const clientEmail = renderToString(<EmailClient emailObj={dataObj} />);
    const clientOptions = {
      from: process.env.EMAIL_USER,
      to: dataObj.email,
      subject: "We Have Received Your Information!",
      text: "Email text",
      html: clientEmail,
    };

    const emailOptions = [adminOptions, clientOptions];

    await emailAwait(emailOptions);

    res.status(200).json({});
  }
};

export default handler;
