import { initializeApp } from "https://gstatic.com";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signInWithPopup, 
    GoogleAuthProvider, 
    signOut, 
    onAuthStateChanged 
} from "https://gstatic.com";

// ⚠️ PASTE YOUR ACTUAL CREDENTIAL VALUES FROM THE FIREBASE CONSOLE HERE
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize app processes
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Element target assignments
const emailInput = document.getElementById('authEmail');
const passwordInput = document.getElementById('authPassword');
const btnLogin = document.getElementById('btnEmailLogin');
const btnSignUp = document.getElementById('btnEmailSignUp');
const btnGoogle = document.getElementById('btnGoogleLogin');
const btnLogout = document.getElementById('btnSystemLogout');

const authGate = document.getElementById('authGate');
const gatedFormContent = document.getElementById('gatedFormContent');
const userStatusBanner = document.getElementById('userStatusBanner');
const activeUserEmail = document.getElementById('activeUserEmail');
const registrationEmailField = document.getElementById('email');

// Monitor structural changes in authentication context loops
onAuthStateChanged(auth, (user) => {
    if (user) {
        // Configure interface mapping for verified active connections
        authGate.classList.add('hidden');
        userStatusBanner.classList.remove('hidden');
        gatedFormContent.classList.remove('hidden');
        activeUserEmail.innerText = user.email;
        
        // Match payment email input form automatically
        if (registrationEmailField && user.email) {
            registrationEmailField.value = user.email;
        }
    } else {
        // Reverse visibility variables for unauthenticated requests
        authGate.classList.remove('hidden');
        userStatusBanner.classList.add('hidden');
        gatedFormContent.classList.add('hidden');
        activeUserEmail.innerText = "";
    }
});

// Create manual email login instances
btnSignUp.addEventListener('click', () => {
    const email = emailInput.value;
    const password = passwordInput.value;
    if (!email || !password) return alert("Please fill out both the email and password fields.");
    
    createUserWithEmailAndPassword(auth, email, password)
        .then(() => alert("Access identity provisioned! Your gateway forms have been unlocked."))
        .catch((err) => alert("Provisioning Interrupted: " + err.message));
});

// Authenticate standard existing emails
btnLogin.addEventListener('click', () => {
    const email = emailInput.value;
    const password = passwordInput.value;
    if (!email || !password) return alert("Fields cannot remain empty.");

    signInWithEmailAndPassword(auth, email, password)
        .catch((err) => alert("Authorization Rejected: " + err.message));
});

// Manage Google cross-origin authorization popups
btnGoogleLogin.addEventListener('click', () => {
    signInWithPopup(auth, googleProvider)
        .catch((err) => alert("Handshake Failed: " + err.message));
});

// Process explicit system termination
btnLogout.addEventListener('click', () => {
    signOut(auth).catch((err) => alert("Fault executing logout termination: " + err.message));
});

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRTTa-0pkDxip31yXtlwH_FJIi2Ze3hRw",
  authDomain: "quantumsmc01.firebaseapp.com",
  projectId: "quantumsmc01",
  storageBucket: "quantumsmc01.firebasestorage.app",
  messagingSenderId: "417085121991",
  appId: "1:417085121991:web:ffb27be73984b021bb65e2",
  measurementId: "G-21DBPK6ZCH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
import { initializeApp } from "https://gstatic.com";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signInWithPopup, 
    GoogleAuthProvider, 
    signOut, 
    onAuthStateChanged 
} from "https://gstatic.com";

// Your verified configurations from the Firebase UI console
const firebaseConfig = {
    apiKey: "AIzaSyCRTta-0pkDxip31yXtlwH_FJIi2Ze3hRw",
    authDomain: "://firebaseapp.com",
    projectId: "quantumsmc01",
    storageBucket: "quantumsmc01.firebasestorage.app",
    messagingSenderId: "417085121991",
    appId: "1:417085121991:web:ffb27be73984b021bb65e2",
    measurementId: "G-21DBPK6ZCH"
};

// Initialize app processes
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Element target assignments
const emailInput = document.getElementById('authEmail');
const passwordInput = document.getElementById('authPassword');
const btnLogin = document.getElementById('btnEmailLogin');
const btnSignUp = document.getElementById('btnEmailSignUp');
const btnGoogle = document.getElementById('btnGoogleLogin');
const btnLogout = document.getElementById('btnSystemLogout');

const authGate = document.getElementById('authGate');
const gatedFormContent = document.getElementById('gatedFormContent');
const userStatusBanner = document.getElementById('userStatusBanner');
const activeUserEmail = document.getElementById('activeUserEmail');
const registrationEmailField = document.getElementById('email');

// Spinner Target Overlay Element
const loadingOverlay = document.getElementById('authLoadingOverlay');

// Helper functions to handle UI blocking states smoothly
function startLoading() { loadingOverlay.classList.remove('hidden'); }
function stopLoading() { loadingOverlay.classList.add('hidden'); }

// State Machine Listener
onAuthStateChanged(auth, (user) => {
    stopLoading(); 
    if (user) {
        authGate.classList.add('hidden');
        userStatusBanner.classList.remove('hidden');
        gatedFormContent.classList.remove('hidden');
        activeUserEmail.innerText = user.email;
        
        if (registrationEmailField && user.email) {
            registrationEmailField.value = user.email;
        }
    } else {
        authGate.classList.remove('hidden');
        userStatusBanner.classList.add('hidden');
        gatedFormContent.classList.add('hidden');
        activeUserEmail.innerText = "";
    }
});

// Create manual email login instances
btnSignUp.addEventListener('click', () => {
    const email = emailInput.value;
    const password = passwordInput.value;
    if (!email || !password) return alert("Please fill out both the email and password fields.");
    
    startLoading();
    createUserWithEmailAndPassword(auth, email, password)
        .then(() => alert("Access identity provisioned! Your gateway forms have been unlocked."))
        .catch((err) => {
            stopLoading();
            if (err.code === 'auth/weak-password') {
                alert("Security Reject: Password fails required institutional parameters (Check case rules, length, digits).");
            } else {
                alert("Provisioning Interrupted: " + err.message);
            }
        });
});

// Authenticate standard existing emails
btnLogin.addEventListener('click', () => {
    const email = emailInput.value;
    const password = passwordInput.value;
    if (!email || !password) return alert("Fields cannot remain empty.");

    startLoading();
    signInWithEmailAndPassword(auth, email, password)
        .catch((err) => {
            stopLoading();
            alert("Authorization Rejected: Invalid email/password combinations or configuration error.");
        });
});

// Manage Google cross-origin authorization popups
btnGoogleLogin.addEventListener('click', () => {
    startLoading();
    signInWithPopup(auth, googleProvider)
        .catch((err) => {
            stopLoading();
            alert("Handshake Cancelled or Failed: " + err.message);
        });
});

// Process explicit system termination
btnLogout.addEventListener('click', () => {
    startLoading();
    signOut(auth).catch((err) => {
        stopLoading();
        alert("Fault executing logout termination: " + err.message);
    });
});
