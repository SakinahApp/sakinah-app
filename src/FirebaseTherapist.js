// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { firebase } from 'firebase/app';

// var firebase = require('firebase');
// var firebaseui = require('firebaseui');

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const therapistConfig = {
	apiKey: "AIzaSyCEJMEGxkR7cUhzdAVk7agy26NwKPWX74k",
	authDomain: "sakinah-therapists.firebaseapp.com",
	projectId: "sakinah-therapists",
	storageBucket: "sakinah-therapists.appspot.com",
	messagingSenderId: "347585169185",
	appId: "1:347585169185:web:87ea30ccad0132038ae060",
	measurementId: "G-K42LLVHTKK",
};

// Initialize Firebase
const appTherapist = initializeApp(therapistConfig,"therapist");
const analyticsTherapist = getAnalytics(appTherapist);
const authTherapist = getAuth(appTherapist);


export { appTherapist, authTherapist, analyticsTherapist };
