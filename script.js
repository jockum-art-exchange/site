import { RecaptchaVerifier } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js';

// Initialize reCAPTCHA verifier
const recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
    size: 'invisible', // or 'normal' if you want it to be visible
    callback: (response) => {
        console.log('reCAPTCHA completed successfully');
    }
}, auth);

// Initialize Firebase with your project config
const firebaseConfig = {
  apiKey: "AIzaSyAZJ7ZPNiKTj3pim2G7iJeOcIWe93BbdxU",
  authDomain: "jockum-art-trade.firebaseapp.com",
  projectId: "jockum-art-trade",
  storageBucket: "jockum-art-trade.firebasestorage.app",
  messagingSenderId: "660182457462",
  appId: "1:660182457462:web:1a5bb2e3a93a55eac39357",
  measurementId: "G-07BRPVLF47"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth(); // Initialize Firebase Auth
const db = firebase.database(); // Initialize Firebase Database (if you use it)

