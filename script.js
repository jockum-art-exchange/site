// Import the necessary Firebase modules
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, RecaptchaVerifier, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js';
import { getDatabase, ref, set } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js';

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZJ7ZPNiKTj3pim2G7iJeOcIWe93BbdxU",
  authDomain: "jockum-art-trade.firebaseapp.com",
  projectId: "jockum-art-trade",
  storageBucket: "jockum-art-trade.appspot.com",
  messagingSenderId: "660182457462",
  appId: "1:660182457462:web:1a5bb2e3a93a55eac39357",
  measurementId: "G-07BRPVLF47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Firebase Auth instance
const db = getDatabase(app); // Firebase Database instance

// Initialize reCAPTCHA verifier (Invisible)
const recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
  size: 'invisible', // Invisible reCAPTCHA
  callback: (response) => {
    console.log('reCAPTCHA completed successfully');
  }
}, auth);

// Register a new user
const registerUser = (email, password, profilePic, name, city, bio) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('User registered:', user);

      // Save additional user information to Firebase Database
      const userRef = ref(db, 'users/' + user.uid);
      set(userRef, {
        name: name || 'Anonymous', // Optional name, default is 'Anonymous'
        city: city || 'Not Provided',
        bio: bio || 'No bio provided',
        profilePic: profilePic || 'defaultProfilePic.jpg' // Placeholder for profile picture
      });
    })
    .catch((error) => {
      console.error('Error registering user:', error);
    });
};

// Login user
const loginUser = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('User logged in:', user);
    })
    .catch((error) => {
      console.error('Error logging in user:', error);
    });
};

// Track user authentication state
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('User is signed in:', user);
    // You can redirect to the dashboard or home page here
  } else {
    console.log('No user is signed in');
  }
});
