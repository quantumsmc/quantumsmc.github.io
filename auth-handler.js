// ==========================================================================
// ⚙️ GITHUB PAGES SERVER COMPATIBILITY LOGIC ENGINE - ALIGNED & ENCAPSULATED
// ==========================================================================

// Helper functions to safely append global production libraries
function loadFirebaseScript(url) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

// Chain asynchronous asset streams directly inside the browser environment
Promise.all([
    loadFirebaseScript("https://gstatic.com"),
    loadFirebaseScript("https://gstatic.com")
]).then(() => {
    
    // YOUR VERIFIED SECURE LIVE PRODUCTION KEY COMPILATION CONSOLE MATRIX
    const firebaseConfig = {
        apiKey: "AIzaSyCRTta-0pkDxip31yXtlwH_FJIi2Ze3hRw",
        authDomain: "://firebaseapp.com",
        projectId: "quantumsmc01",
        storageBucket: "quantumsmc01.firebasestorage.app",
        messagingSenderId: "417085121991",
        appId: "1:417085121991:web:ffb27be73984b021bb65e2",
        measurementId: "G-21DBPK6ZCH"
    };

    // Initialize global compat engine layers (🚀 Safe inside the loaded library block!)
    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    // DOM Target Assignments Matrix
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
    const loadingOverlay = document.getElementById('authLoadingOverlay');

    function startLoading() { if (loadingOverlay) loadingOverlay.classList.remove('hidden'); }
    function stopLoading() { if (loadingOverlay) loadingOverlay.classList.add('hidden'); }

    // Persistent State Change Tracking Thread Loop
    auth.onAuthStateChanged((user) => {
        stopLoading(); 
        if (user) {
            if (authGate) authGate.classList.add('hidden');
            if (userStatusBanner) userStatusBanner.classList.remove('hidden');
            if (gatedFormContent) gatedFormContent.classList.remove('hidden');
            if (activeUserEmail) activeUserEmail.innerText = user.email;
            if (registrationEmailField) registrationEmailField.value = user.email;
        } else {
            if (authGate) authGate.classList.remove('hidden');
            if (userStatusBanner) userStatusBanner.classList.add('hidden');
            if (gatedFormContent) gatedFormContent.classList.add('hidden');
            if (activeUserEmail) activeUserEmail.innerText = "";
        }
    });

    // Custom Profile Credentials Verification Submit Trigger
    if (btnSignUp) {
        btnSignUp.addEventListener('click', () => {
            const email = emailInput.value;
            const password = passwordInput.value;
            if (!email || !password) return alert("Please fill out both the email and password fields.");
            
            startLoading();
            auth.createUserWithEmailAndPassword(email, password)
                .then(() => alert("Access profile created successfully! The checkout gates are unlocked."))
                .catch((err) => {
                    stopLoading();
                    alert("Registration Error: " + err.message);
                });
        });
    }

    // Standard Sign In Form Array Core Interception
    if (btnLogin) {
        btnLogin.addEventListener('click', () => {
            const email = emailInput.value;
            const password = passwordInput.value;
            if (!email || !password) return alert("Fields cannot remain empty.");

            startLoading();
            auth.signInWithEmailAndPassword(email, password)
                .catch((err) => {
                    stopLoading();
                    alert("Authorization Rejected: " + err.message);
                });
        });
    }

    // Google Secure OAuth Popup Layer Handshake Hook
    if (btnGoogle) {
        btnGoogle.addEventListener('click', () => {
            startLoading();
            auth.signInWithPopup(googleProvider)
                .then((result) => {
                    console.log("Google Cryptographic Handshake Successful:", result.user);
                })
                .catch((err) => {
                    stopLoading();
                    alert("Handshake Cancelled or Failed: " + err.message);
                });
        });
    }

    // Active Global Session Termination Sequence Control
    if (btnLogout) {
        btnLogout.addEventListener('click', () => {
            startLoading();
            auth.signOut().catch((err) => {
                stopLoading();
                alert("Termination fault: " + err.message);
            });
        });
    }

}).catch(err => {
    console.error("Critical System Interruption loading assets:", err);
});
