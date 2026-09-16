// 1. FIXED: Corrected full CDN links to load Firebase library packages smoothly
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

// 2. FIXED: Fully restored your exact active Firebase configuration values
const firebaseConfig = {
    apiKey: "AIzaSyCRTta-0pkDxip31yXtlwH_FJIi2Ze3hRw",
    authDomain: "quantumsmc01.firebaseapp.com", // Fixed missing prefix string
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
function startLoading() { 
    if (loadingOverlay) loadingOverlay.classList.remove('hidden'); 
}
function stopLoading() { 
    if (loadingOverlay) loadingOverlay.classList.add('hidden'); 
}

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
                alert("Security Reject: Password fails required parameters (minimum 6 characters for default Firebase).");
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

// 3. FIXED: Restored completely missing broken block layout logic at end of code array
btnGoogle.addEventListener('click', () => {
    startLoading();
    signInWithPopup(auth, googleProvider)
        .then((result) => {
            console.log("Google Auth Success", result.user);
        })
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
