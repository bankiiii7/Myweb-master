import {initializeApp} from 'firebase';

const app = initializeApp(
  {
    apiKey: "AIzaSyA1JKEx4T7lJvoPLtwGSTXvHygD31fvuVs",
    authDomain: "myhostbank.firebaseapp.com",
    databaseURL: "https://myhostbank.firebaseio.com",
    projectId: "myhostbank",
    storageBucket: "myhostbank.appspot.com",
    messagingSenderId: "102781516227"
  }
)

export const db = app.database();
export const questionsRef = db.ref('questions');
