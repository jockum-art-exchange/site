import { RecaptchaVerifier } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js';

// Initialize reCAPTCHA verifier
const recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
    size: 'invisible', // or 'normal' if you want it to be visible
    callback: (response) => {
        console.log('reCAPTCHA completed successfully');
    }
}, auth);
