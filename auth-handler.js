// ==========================================================================
// ⚙️ GITHUB PAGES SERVER COMPATIBILITY LOGIC ENGINE - ISOLATED LAYER FIX
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

    function startEngine() {
        if (typeof firebase === 'undefined') return setTimeout(startEngine, 30);
        if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
        
        const auth = firebase.auth();
        const googleProvider = new firebase.auth.GoogleAuthProvider();

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

        if (btnSignUp) {
            btnSignUp.onclick = function(e) {
                e.preventDefault();
                startLoading();
                auth.createUserWithEmailAndPassword(emailInput.value.trim(), passwordInput.value.trim())
                    .then(() => alert("Access Profile Provisioned! Welcome."))
                    .catch((err) => { stopLoading(); alert("Error: " + err.message); });
            };
        }

        if (btnLogin) {
            btnLogin.onclick = function(e) {
                e.preventDefault();
                startLoading();
                auth.signInWithEmailAndPassword(emailInput.value.trim(), passwordInput.value.trim())
                    .catch((err) => { stopLoading(); alert("Error: " + err.message); });
            };
        }

        if (btnGoogle) {
            btnGoogle.onclick = function(e) {
                e.preventDefault();
                startLoading();
                auth.signInWithPopup(googleProvider)
                    .catch((err) => { stopLoading(); alert("Handshake Interrupted: " + err.message); });
            };
        }

        if (btnLogout) {
            btnLogout.onclick = function(e) {
                e.preventDefault();
                startLoading();
                auth.signOut().catch((err) => { stopLoading(); alert("Error: " + err.message); });
            };
        }
    }

    startEngine();
})();
