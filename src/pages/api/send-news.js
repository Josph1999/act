import {
  collection,
  getDocs,
  query,
} from "firebase/firestore";
import { db } from "src/firebase/firebase";
import NewsLetter from "src/emails/htmltemplates";
const sgMail = require("@sendgrid/mail");

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ message: "Method Not Allowed" });
    }
    const { link, id } = req.query;

    const { title_ka, description_ka, photos } = req.body;

    const emailRef = collection(db, "subscriptions");
    const documentSnapshots = await getDocs(query(emailRef));
    const subscribers = documentSnapshots.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    const data = {
      link: process.env.NEXT_PUBLIC_URL + link + `/${id}`,
      title_ka,
      description_ka,
      url: photos[0].url,
    };

    for (const subscriber of subscribers) {
      sgMail.setApiKey(process.env.NEXT_PUBLIC_SEND_GRID_API);
      const msg = {
        to: subscriber.email,
        from: process.env.NEXT_PUBLIC_FROM,
        subject: "DBEF News!",
        html: NewsLetter(data),
      };

      await sgMail.send(msg);
    }
    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    return res.status(500).send({ message: "Error while sending email!" });
  }
}
