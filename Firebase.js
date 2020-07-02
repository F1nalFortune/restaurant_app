import firebase from 'react-native-firebase';

const config = {
  apiKey: "AIzaSyD7qfZUNM8_CfS9sQ2NMIXiFQo_HyvMuh8",
  authDomain: "spry-surf-282019.firebaseapp.com",
  databaseURL: "https://spry-surf-282019.firebaseio.com",
  projectId: "spry-surf-282019",
  storageBucket: "spry-surf-282019.appspot.com",
  messagingSenderId: "168591704165",
  appId: "1:168591704165:web:cf1b8cb244709f385b068c",
  measurementId: "G-948CP0Q9Q5"
};

let app = firebase.initializeApp(config);



export const db = app.database();
