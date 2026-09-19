const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const path = require("path");

const serviceAccount = require(
  path.join(__dirname, "..", "serviceAccountKey.json")
);

const firebaseApp = initializeApp({
  credential: cert(serviceAccount),
  projectId: serviceAccount.project_id
});

const db = getFirestore(firebaseApp, "assignment10");

console.log("Firebase Firestore connected successfully!");

module.exports = db;