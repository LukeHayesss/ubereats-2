// import firebase from 'firebase';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC7fL58B09_R08lwYNy-ntMsibawejj6ac",
    authDomain: "banana-8254b.firebaseapp.com",
    projectId: "banana-8254b",
    storageBucket: "banana-8254b.appspot.com",
    messagingSenderId: "79777454533",
    appId: "1:79777454533:web:375ce2d238c08987e153ac"
  };

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase


//version 2
// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyC7fL58B09_R08lwYNy-ntMsibawejj6ac",
//   authDomain: "banana-8254b.firebaseapp.com",
//   projectId: "banana-8254b",
//   storageBucket: "banana-8254b.appspot.com",
//   messagingSenderId: "79777454533",
//   appId: "1:79777454533:web:375ce2d238c08987e153ac"
// };

// const app = initializeApp(firebaseConfig);

// export default app;