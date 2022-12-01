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
const from = process.env.EMAIL_FROM;

const transport = {
  service,
  auth: {
    user,
    pass,
  },
};

let errField;
let msgError;

const emailAwait = async (emails) => {
  try {
    const transporter = createTransport(transport);
    await transporter.sendMail(emails[0]);
    await transporter.sendMail(emails[1]);
    return;
  } catch (err) {
    console.log("The error is here!", err);
  }
};

const isNotEmpty = (value) => String(value).trim() !== "";

const isString = (value) => {
  if (!isNotEmpty(value)) {
    return false;
  }

  const letters = /^[a-zA-Z a-zA-Z]+$/;
  return letters.test(value);
};

const msgLength = (value) => {
  if (value.trim().length < 10 || value.trim().length > 250) {
    msgError = "Your message should be at least 10 characters";
    return false;
  } else if (value.trim().length > 250) {
    msgError = "Your message should be less than 250 characters";
    return false;
  } else {
    return true;
  }
};

const validEmail = (value) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(value);
};

const validPostal = (value) => {
  if (value.trim().length < 5) {
    return false;
  }

  const letters = /^[0-9]+$/;
  return letters.test(value);
};

const validMonth = (value) => {
  if (!isNotEmpty(value) || +value > 12) {
    return false;
  }

  const numbers = /^[0-9]+$/;
  return numbers.test(value);
};

const validDay = (value) => {
  if (!isNotEmpty(value) || +value > 31) {
    return false;
  }

  const numbers = /^[0-9]+$/;
  return numbers.test(value);
};

const validYear = (value) => {
  const year = new Date().getUTCFullYear();
  if (!isNotEmpty(value) || +value > year || +value < year - 120) {
    return false;
  }

  const numbers = /^[0-9]+$/;
  return numbers.test(value);
};

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      const data = req.body;
      const dataObj = JSON.parse(data);

      if (!isString(dataObj.fName)) {
        errField = "First Name";
        throw new Error("Entered name is not valid");
      } else if (!isString(dataObj.lName)) {
        errField = "Last Name";
        throw new Error("Entered name is not valid");
      } else if (!validEmail(dataObj.email)) {
        errField = "Email";
        throw new Error("Entered email is not valid");
      } else if (!isNotEmpty(dataObj.addressStreet1)) {
        errField = "Address Street";
        throw new Error("Entered address street is not valid");
      } else if (!isNotEmpty(dataObj.addressCity)) {
        errField = "Address City";
        throw new Error("Entered address city is not valid");
      } else if (!isNotEmpty(dataObj.addressState)) {
        errField = "Address State";
        throw new Error("Entered address state is not valid");
      } else if (!validPostal(dataObj.addressPostal)) {
        errField = "Address Postal";
        throw new Error("Entered address postal is not valid");
      } else if (!isNotEmpty(dataObj.provider)) {
        errField = "Provider";
        throw new Error("Entered provider is not valid");
      } else if (!msgLength(dataObj.message)) {
        errField = "Message";
        throw new Error(msgError);
      } else if (!validMonth(dataObj.dobMonth)) {
        errField = "DOB Month";
        throw new Error("Entered date of birth month is not valid");
      } else if (!validDay(dataObj.dobDay)) {
        errField = "DOB Day";
        throw new Error("Entered date of birth day is not valid");
      } else if (!validYear(dataObj.dobYear)) {
        errField = "DOB Year";
        throw new Error("Entered date of birth year is not valid");
      } else if (!isNotEmpty(dataObj.policy)) {
        errField = "Policy";
        throw new Error("Entered policy is not valid");
      }

      const adminEmail = renderToString(<EmailAdmin emailObj={dataObj} />);
      const adminOptions = {
        from,
        to: process.env.EMAIL_USER,
        subject: "Perry Morris Insurance: New Message Received",
        text: "Email text",
        html: adminEmail,
      };

      const clientEmail = renderToString(<EmailClient emailObj={dataObj} />);
      const clientOptions = {
        from,
        to: dataObj.email,
        subject: "We Have Received Your Information!",
        text: "Email text",
        html: clientEmail,
      };

      const emailOptions = [adminOptions, clientOptions];

      await emailAwait(emailOptions);
    } catch (error) {
      res.status(500).send({ message: error.message, error: errField });
      return;
    }

    res.status(200).json({});
  }
};

export default handler;
