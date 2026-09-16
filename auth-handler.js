// ==========================================================================
// ⚙️ GITHUB PAGES SERVER COMPATIBILITY LOGIC ENGINE - BULLETPROOF DIRECT
// ==========================================================================

(function() {
    const firebaseConfig = {
        apiKey: "AIzaSyCRTta-0pkDxip31yXtlwH_FJIi2Ze3hRw",
        authDomain: "://firebaseapp.com",
        projectId: "quantumsmc01",
        storageBucket: "quantumsmc01.firebasestorage.app",
        messagingSenderId: "417085121991",
        appId: "1:417085121991:web:ffb27be73984b021bb65e2",
        measurementId: "G-21DBPK6ZCH"
    };

    function startAuthEngine() {
        if (typeof firebase === 'undefined') {
            return setTimeout(startAuthEngine, 50);
        }

        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }

        const auth = firebase.auth();
        const googleProvider = new firebase.auth.GoogleAuthProvider();

        // Match elements securely
        const emailInput = document.getElementById('authEmail');
        const passwordInput = document.getElementById('authPassword');
        
        // Target assignments
        const btnLogin = document.getElementById('btnEmailLogin') || document.getElementById('btnLogin');
        const btnSignUp = document.getElementById('btnEmailSignUp') || document.getElementById('btnSignUp');
        const btnGoogle = document.getElementById('btnGoogleLogin') || document.getElementById('btnGoogle'); 
        const btnLogout = document.getElementById('btnSystemLogout') || document.getElementById('btnLogout');

        const authGate = document.getElementById('authGate');
        const gatedFormContent = document.getElementById('gatedFormContent');
        const userStatusBanner = document.getElementById('userStatusBanner');
        const activeUserEmail = document.getElementById('activeUserEmail');
        const registrationEmailField = document.getElementById('email');
        const loadingOverlay = document.getElementById('authLoadingOverlay');

        function startLoading() { if (loadingOverlay) loadingOverlay.classList.remove('hidden'); }
        function stopLoading() { if (loadingOverlay) loadingOverlay.classList.add('hidden'); }

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

        // Use direct inline override properties to stop file clashing
        if (btnSignUp) {
            btnSignUp.onclick = function(e) {
                e.preventDefault();
                const email = emailInput.value.trim();
                const password = passwordInput.value.trim();
                if (!email || !password) return alert("Please fill out both the email and password fields.");
                startLoading();
                auth.createUserWithEmailAndPassword(email, password)
                    .then(() => alert("Access profile created successfully! Checkout forms unlocked."))
                    .catch((err) => { stopLoading(); alert("Registration Error: " + err.message); });
            };
        }

        if (btnLogin) {
            btnLogin.onclick = function(e) {
                e.preventDefault();
                const email = emailInput.value.trim();
                const password = passwordInput.value.trim();
                if (!email || !password) return alert("Fields cannot remain empty.");
                startLoading();
                auth.signInWithEmailAndPassword(email, password)
                    .catch((err) => { stopLoading(); alert("Authorization Rejected: " + err.message); });
            };
        }

        if (btnGoogle) {
            btnGoogle.onclick = function(e) {
                e.preventDefault();
                startLoading();
                auth.signInWithPopup(googleProvider)
                    .then((result) => { console.log("OAuth Success:", result.user.email); })
                    .catch((err) => { stopLoading(); alert("Handshake Error: " + err.message); });
            };
        }

        if (btnLogout) {
            btnLogout.onclick = function(e) {
                e.preventDefault();
                startLoading();
                auth.signOut().catch((err) => { stopLoading(); alert("Logout Error: " + err.message); });
            };
        }
    }

    // Execute immediately to override structural layout blocks
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", startAuthEngine);
    } else {
        startAuthEngine();
    }
})();
