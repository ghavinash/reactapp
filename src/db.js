import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD4ZbAmPvW4bxrm6jl0Rgfmllrbkm3SE3U",
    authDomain: "reactapp-bfa5d.firebaseapp.com",
    databaseURL: "https://reactapp-bfa5d-default-rtdb.firebaseio.com",
});

const base  = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;