// ==========================================================================
// ⚙️ QUANTUM SMC FIREBASE AUTH ENGINE - INSULATED HARD PRODUCTION COPY
// ==========================================================================

(function() {
    // Verified production configuration matrices
    const firebaseConfig = {
        apiKey: "AIzaSyCRTta-0pkDxip31yXtlwH_FJIi2Ze3hRw",
        authDomain: "quantumsmc01.firebaseapp.com",
        projectId: "quantumsmc01",
        storageBucket: "quantumsmc01.firebasestorage.app",
        messagingSenderId: "417085121991",
        appId: "1:417085121991:web:ffb27be73984b021bb65e2",
        measurementId: "G-21DBPK6ZCH"
    };

    function startEngine() {
        // Enforce loop wait sequences if latency interrupts CDN tracking streams
        if (typeof firebase === 'undefined') {
            return setTimeout(startEngine, 30);
        }

        // Initialize Firebase structures globally
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
        
        const auth = firebase.auth();
        const googleProvider = new firebase.auth.GoogleAuthProvider();

        // 🚀 BIND SYSTEM EVENT ATTRIBUTES DIRECTLY TO INTERACTION NODES
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

        // Persistent Session Authorization Tracker Thread Loop
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

        // 📋 MANUALLY CONFIGURE DIRECT EVENT PROPERTIES TO OVERRIDE INTRUSIVE CLASHES
        if (btnSignUp) {
            btnSignUp.onclick = function(e) {
                e.preventDefault();
                const email = emailInput.value.trim();
                const password = passwordInput.value.trim();
                if (!email || !password) return alert("Please fill out both the email and password fields.");
                
                startLoading();
                auth.createUserWithEmailAndPassword(email, password)
                    .then(() => alert("Access profile created successfully! Check checkout fields below."))
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
                    .then((result) => { console.log("OAuth Sync Handshake Complete:", result.user.email); })
                    .catch((err) => { stopLoading(); alert("Handshake Cancelled or Failed: " + err.message); });
            };
        }

        if (btnLogout) {
            btnLogout.onclick = function(e) {
                e.preventDefault();
                startLoading();
                auth.signOut().catch((err) => { stopLoading(); alert("Termination fault: " + err.message); });
            };
        }
    }

    // Instantly run the isolated execution thread
    startEngine();
})();
