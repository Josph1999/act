import nodemailer from "nodemailer";
const smtpTransport = require("nodemailer-smtp-transport");
// Replace with your SMTP credentials

const smtpOptions = {
  host: "mail.dbef.ge",
  port: 465,
  secure: true,
  tls: {
    rejectUnauthorized: false,
  },
  auth: {
    user: "info@dbef.ge",
    pass: "V@gO@nX3dxc3",
  },
};

export const sendEmail = async (data) => {
  const transporter = nodemailer.createTransport(
    smtpTransport({
      ...smtpOptions,
    })
  );
  return await transporter.sendMail({
    from: "info@dbef.ge",
    ...data,
  });
};
