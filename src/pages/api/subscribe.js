import { render } from "@react-email/render";
import WelcomeTemplate from "../../emails/WelcomeTemplate";
import { sendEmail } from "lib/email";
import {
  collection,
  doc,
  setDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "src/firebase/firebase";
import { v4 as uuid } from "uuid";
import ThankYouTemplate from "src/emails/thankyoutemplate";
import cors from "src/lib/init-middleware";
const sgMail = require("@sendgrid/mail");

export default async function handler(req, res) {
  try {

    await cors(req, res);

    if (req.method !== "POST") {
      return res.status(405).json({ message: "Method Not Allowed" });
    }

    const { email } = req.query;

    const emailRef = collection(db, "subscriptions");
    const documentSnapshots = await getDocs(
      query(emailRef, where("email", "==", email))
    );
    const subscriber = documentSnapshots.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    if (subscriber.length > 0) {
      return res
        .status(409)
        .json({ message: "Email has already been subscribed" });
    }

    sgMail.setApiKey(process.env.NEXT_PUBLIC_SEND_GRID_API);

    const msg = {
      to: email,
      from: process.env.NEXT_PUBLIC_FROM,
      subject: "ACT Info",
      html: ThankYouTemplate(),
    };

    const emailSent = await sgMail.send(msg);

    if (emailSent) {
      await setDoc(doc(emailRef, uuid()), {
        email,
      });

      return res
        .status(200)
        .json({ message: "Email sent successfully to " + email });
    }
  } catch (error) {
    console.error("ERROR:", error);
    return res.status(500).json({ message: "Error while sending email!" });
  }
}
