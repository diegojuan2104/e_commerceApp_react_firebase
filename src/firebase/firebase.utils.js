import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyApuYb-bFbWiPEF6v5BrMjr7g5Y5819SkQ",
    authDomain: "crown-db-d90cf.firebaseapp.com",
    databaseURL: "https://crown-db-d90cf.firebaseio.com",
    projectId: "crown-db-d90cf",
    storageBucket: "crown-db-d90cf.appspot.com",
    messagingSenderId: "605659259521",
    appId: "1:605659259521:web:13fadfa6c2fdb560976380",
    measurementId: "G-P11RLF0L8M"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = (firestore.doc(`users/${userAuth.uid}`))

    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const {displayName, email} = userAuth;

      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }catch(error){
        console.log("Error creating user", error.message);
      }
    }

    return userRef;
  }


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase;




