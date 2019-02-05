import * as firebase from 'firebase';

const config = {
	apiKey: "AIzaSyB9PgYelzYWlcppg40ZvldcXq_ebpEbuvI",
	authDomain: "reactjs-firebase-b0b73.firebaseapp.com",
	databaseURL: "https://reactjs-firebase-b0b73.firebaseio.com",
	projectId: "reactjs-firebase-b0b73",
	storageBucket: "reactjs-firebase-b0b73.appspot.com",
	messagingSenderId: "406657152699"
};
firebase.initializeApp(config);

export default firebase;