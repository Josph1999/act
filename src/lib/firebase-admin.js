import admin from "firebase-admin";

if (!admin.apps.length) {

  const GOOGLE_CLOUD_CREDENTIALS = JSON.parse(
    Buffer.from(process.env.ADMIN_SERVICE_ACCOUNT, 'base64').toString('utf-8')
  );

  admin.initializeApp({
    credential: admin.credential.cert(GOOGLE_CLOUD_CREDENTIALS),
  });
}

const db = admin.firestore();

export { db };
