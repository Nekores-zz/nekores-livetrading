// import Rebase from 're-base';
import firebase from 'firebase';

const configs = {
  apiKey: 'AIzaSyAuDqXq1h7ZyJngMmhvCuo8Xi8NJLGWk4Y',
  authDomain: 'livetrading-16bfb.firebaseapp.com',
  databaseURL: 'https://livetrading-16bfb.firebaseio.com',
  projectId: 'livetrading-16bfb',
  storageBucket: 'livetrading-16bfb.appspot.com',
  messagingSenderId: '383400500451',
};

const fire = firebase.initializeApp(configs);
const auth = firebase.auth();
// const base = Rebase.createClass(fire.database());
const facebookProvider = new firebase.auth.FacebookAuthProvider();
const twitterProvider = new firebase.auth.TwitterAuthProvider();
const googleProvider = new firebase.auth.GoogleAuthProvider();

const created = firebase.database.ServerValue.TIMESTAMP;

export default {
  fire,
  auth,
  facebookProvider,
  created,
  twitterProvider,
  googleProvider,
};
