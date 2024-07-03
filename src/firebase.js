import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAuVMvruBCsk-GNNiXAlW5MnBZhYpHKH6s",
    authDomain: "ac-v1-7cee4.firebaseapp.com",
    projectId: "ac-v1-7cee4",
    storageBucket: "ac-v1-7cee4.appspot.com",
    messagingSenderId: "960940696332",
    appId: "1:960940696332:web:361ae940a22e24c6579f29",
    measurementId: "G-DY5T5TQWHR"
  
  
  /*apiKey: "AIzaSyDe9izNDoI5j-p3iETY0QOVnevac-5Z5ZU",
  authDomain: "medi-19-09.firebaseapp.com",
  projectId: "medi-19-09",
  storageBucket: "medi-19-09.appspot.com",
  messagingSenderId: "93125294784",
  appId: "1:93125294784:web:b83f0c81a0e972185dcb25",
  measurementId: "G-QQJ913E18Z"*/

  /*apiKey: "AIzaSyABq8ttX_bw1CseKepsMEyCaOxP18cFc_A",
  authDomain: "medi-cart-e31e5.firebaseapp.com",
  projectId: "medi-cart-e31e5",
  storageBucket: "medi-cart-e31e5.appspot.com",
  messagingSenderId: "1098121300088",
  appId: "1:1098121300088:web:84ce658a07a91f4d8c458d",
  measurementId: "G-QBVS72YJ3B",*/

  /*apiKey: "AIzaSyDZE-ooSYB6CJb-VU44adCIN-VsZvgCJD8",
  authDomain: "omega-lul.firebaseapp.com",
  projectId: "omega-lul",
  storageBucket: "omega-lul.appspot.com",
  messagingSenderId: "482160368321",
  appId: "1:482160368321:web:c1bf940c893168f2a1d240",
  measurementId: "G-H444D6ES01", */
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider, storage };
export default db;
