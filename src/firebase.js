import firebase from 'firebase/app';
import 'firebase/app'
import 'firebase/database'

const config = {
    apiKey: "AIzaSyCtzL4tlZUSPZHzPb_JFWa3s8SWhUIGbkQ",
    authDomain: "m-utd-1d49f.firebaseapp.com",
    databaseURL: "https://m-utd-1d49f.firebaseio.com",
    projectId: "m-utd-1d49f",
    storageBucket: "m-utd-1d49f.appspot.com",
    messagingSenderId: "452806227827"
  };

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches')
const firebasePlayers = firebaseDB.ref('players')

export {
    firebase,
    firebaseMatches,
    firebasePlayers
}