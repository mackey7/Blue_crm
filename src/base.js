import * as firebase from 'firebase/app'
import 'firebase/firestore';
import "firebase/auth"

// const app = firebase.initializeApp({
//     apiKey: process.env.REACT_APP_FIREBASE_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
//     databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID
// })



// const db = app.firestore()






const app = firebase.initializeApp({
    apiKey: "AIzaSyDP3Nq7CkZ3R8jI4U4n7HUKQF-_EGVB8VE",
    authDomain: "blue-crm-7bedd.firebaseapp.com",
    databaseURL: "https://blue-crm-7bedd.firebaseio.com",
    projectId: "blue-crm-7bedd",
    storageBucket: "blue-crm-7bedd.appspot.com",
    messagingSenderId: "452333056771",
    appId: "1:452333056771:web:a25d042f2c6eaa08932f36",
    measurementId: "G-1F4WFJEWSG"
})





export default app