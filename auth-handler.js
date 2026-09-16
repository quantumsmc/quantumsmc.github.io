// ==========================================================================
// ⚙️ STANDALONE PRODUCTION UTILITIES (NO SERVER REQUIRED)
// ==========================================================================

// Dynamically load Firebase App and Auth via traditional scripts to bypass CORS
function loadScript(url) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

// Sequence the installation of Firebase libraries over local file configurations
Promise.all([
    loadScript("https://gstatic.com"),
    loadScript("https://gstatic.com")
]).then(() => {
    // initialize using compat structures
    const firebaseConfig = {
        apiKey: "AIzaSyCRTta-0pkDxip31yXtlwH_FJIi2Ze3hRw",
        authDomain: "://firebaseapp.com",
        projectId: "quantumsmc01",
        storageBucket: "quantumsmc01.firebasestorage.app",
        messagingSenderId: "417085121991",
        appId: "1:417085121991:web:ffb27be73984b021bb65e2",
        measurementId: "G-21DBPK6ZCH"
    };

    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();
    const googleProvider = new firebase.auth.GoogleAuthProvider();

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
    const loadingOverlay = document.getElementById('authLoadingOverlay');

    function startLoading() { if (loadingOverlay) loadingOverlay.classList.remove('hidden'); }
    function stopLoading() { if (loadingOverlay) loadingOverlay.classList.add('hidden'); }

    // State Machine Monitor Loop
    auth.onAuthStateChanged((user) => {
        stopLoading(); 
        if (user) {
            authGate.classList.add('hidden');
            userStatusBanner.classList.remove('hidden');
            gatedFormContent.classList.remove('hidden');
            activeUserEmail.innerText = user.email;
            if (registrationEmailField) registrationEmailField.value = user.email;
        } else {
            authGate.classList.remove('hidden');
            userStatusBanner.classList.add('hidden');
            gatedFormContent.classList.add('hidden');
            activeUserEmail.innerText = "";
        }
    });

    // Account registration submission
    btnSignUp.addEventListener('click', () => {
        const email = emailInput.value;
        const password = passwordInput.value;
        if (!email || !password) return alert("Please fill out email and password parameters.");
        
        startLoading();
        auth.createUserWithEmailAndPassword(email, password)
            .then(() => alert("Access profile created! Infrastructure forms unlocked."))
            .catch((err) => {
                stopLoading();
                alert("Registration Error: " + err.message);
            });
    });

    // Email login authentication loop
    btnLogin.addEventListener('click', () => {
        const email = emailInput.value;
        const password = passwordInput.value;
        if (!email || !password) return alert("Credentials fields cannot remain blank.");

        startLoading();
        auth.signInWithEmailAndPassword(email, password)
            .catch((err) => {
                stopLoading();
                alert("Authorization Rejected: " + err.message);
            });
    });

    // Google OAuth integration hook
    btnGoogle.addEventListener('click', () => {
        startLoading();
        auth.signInWithPopup(googleProvider)
            .catch((err) => {
                stopLoading();
                alert("Handshake Cancelled or Failed: " + err.message);
            });
    });

    // Sign out session execution
    btnLogout.addEventListener('click', () => {
        startLoading();
        auth.signOut().catch((err) => {
            stopLoading();
            alert("Termination fault: " + err.message);
        });
    });
}).catch(err => {
    console.error("Failed to load global Firebase libraries:", err);
});

successModal.style.display = "flex";
