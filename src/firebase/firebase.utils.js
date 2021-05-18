import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBvsbtm-dplIFbrVKAqfxiU1k8CdImv41M",
  authDomain: "online-shop-63c8c.firebaseapp.com",
  projectId: "online-shop-63c8c",
  storageBucket: "online-shop-63c8c.appspot.com",
  messagingSenderId: "980865402033",
  appId: "1:980865402033:web:f115ef9a28643a9aac0e90",
  measurementId: "G-XC0WE24SBH"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error', error.message);
    }
  }

  return userRef;
  
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;