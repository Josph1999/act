import admin from "firebase-admin";

if (!admin.apps.length) {

  const creds = JSON.parse(process.env.ADMIN_SERVICE_ACCOUNT);

  console.log('CREDS:', creds)

  admin.initializeApp({
    credential: admin.credential.cert(creds),
  });
}

const db = admin.firestore();

export { db };
