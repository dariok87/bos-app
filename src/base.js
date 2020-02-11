import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDPseIkCem98qeikoW7qM5YTAvlgkZ_TJA",
  authDomain: "storepicker.firebaseapp.com",
  databaseURL: "https://storepicker.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
