import firebase from "firebase/app";
import "firebase/firebase-firestore";

firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSANGER_ID,
  appId: process.env.REACT_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
});

class Firebase {
  constructor() {
    const db = firebase.firestore();
    this.store = db.collection("invite");
  }

  async addContent(docId, data) {
    try {
      data = {
        ...data,
        createdAt: Date.now().toString(),
      };
      await this.store.doc(docId).set(data);
      return;
    } catch (error) {
      throw error(error);
    }
  }
}

const docStore = new Firebase();

export default docStore;
