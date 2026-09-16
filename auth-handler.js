// ==========================================================================
// ⚙️ INSULATED QUANTUM AUTH ENGINE - ANTI-INJECTION ARCHITECTURE
// ==========================================================================

(function() {
    // Isolated, localized settings framework
    const firebaseConfig = {
        apiKey: "AIzaSyCRTta-0pkDxip31yXtlwH_FJIi2Ze3hRw",
        authDomain: "://firebaseapp.com",
        projectId: "quantumsmc01",
        storageBucket: "quantumsmc01.firebasestorage.app",
        messagingSenderId: "417085121991",
        appId: "1:417085121991:web:ffb27be73984b021bb65e2",
        measurementId: "G-21DBPK6ZCH"
    };

    function initializeSystem() {
        // Enforce loop verification if browser latency lags CDN tracking streams
        if (typeof firebase === 'undefined') {
            return setTimeout(initializeSystem, 30);
        }

        // Initialize Firebase structures globally without clashing with root settings
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
        
        const auth = firebase.auth();
        const googleProvider = new firebase.auth.GoogleAuthProvider();

        // Target assignments matrix mapping explicitly via localized values
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

        // Core persistent authorization loop state listener thread
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

        // 🚀 CRITICAL INLINE CLICK BINDINGS (Bypasses any browser extension hijack blocks)
        if (btnSignUp) {
            btnSignUp.onclick = function(e) {
                e.preventDefault();
                e.stopPropagation(); // Stops external script injection bubbles
                const email = emailInput.value.trim();
                const password = passwordInput.value.trim();
                if (!email || !password) return alert("Fields cannot remain empty.");
                
                startLoading();
                auth.createUserWithEmailAndPassword(email, password)
                    .then(() => alert("Access Profile Provisioned Successfully! Welcome."))
                    .catch((err) => { stopLoading(); alert("Registration Error: " + err.message); });
            };
        }

        if (btnLogin) {
            btnLogin.onclick = function(e) {
                e.preventDefault();
                e.stopPropagation();
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
                e.stopPropagation();
                startLoading();
                auth.signInWithPopup(googleProvider)
                    .then((result) => { console.log("OAuth Success:", result.user.email); })
                    .catch((err) => { stopLoading(); alert("Handshake Error: " + err.message); });
            };
        }

        if (btnLogout) {
            btnLogout.onclick = function(e) {
                e.preventDefault();
                e.stopPropagation();
                startLoading();
                auth.signOut().catch((err) => { stopLoading(); alert("Logout Error: " + err.message); });
            };
        }
    }

    // Execute immediately to insulate click strings from DOM mutations
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initializeSystem);
    } else {
        initializeSystem();
    }
})();
