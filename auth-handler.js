// ==========================================================================
// ⚙️ GITHUB PAGES SERVER COMPATIBILITY LOGIC ENGINE - EVENT BUFFERED
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
    const firebaseConfig = {
        apiKey: "AIzaSyCRTta-0pkDxip31yXtlwH_FJIi2Ze3hRw",
        authDomain: "://firebaseapp.com",
        projectId: "quantumsmc01",
        storageBucket: "quantumsmc01.firebasestorage.app",
        messagingSenderId: "417085121991",
        appId: "1:417085121991:web:ffb27be73984b021bb65e2",
        measurementId: "G-21DBPK6ZCH"
    };

    // Confirm core libraries are online before running initialization sequence
    if (typeof firebase !== 'undefined') {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
        
        const auth = firebase.auth();
        const googleProvider = new firebase.auth.GoogleAuthProvider();

        // Target assignments
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

        // Persistent Session Monitor State Thread
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

        // Event listener attachments using direct anonymous bindings
        if (btnSignUp) {
            btnSignUp.addEventListener('click', (e) => {
                e.preventDefault();
                const email = emailInput.value.trim();
                const password = passwordInput.value.trim();
                if (!email || !password) return alert("Fields cannot remain empty.");
                startLoading();
                auth.createUserWithEmailAndPassword(email, password)
                    .then(() => alert("Profile Provisioned Successfully! Checking layout fields..."))
                    .catch((err) => { stopLoading(); alert("Error: " + err.message); });
            });
        }

        if (btnLogin) {
            btnLogin.addEventListener('click', (e) => {
                e.preventDefault();
                const email = emailInput.value.trim();
                const password = passwordInput.value.trim();
                if (!email || !password) return alert("Fields cannot remain empty.");
                startLoading();
                auth.signInWithEmailAndPassword(email, password)
                    .catch((err) => { stopLoading(); alert("Login Rejected: " + err.message); });
            });
        }

        if (btnGoogle) {
            btnGoogle.addEventListener('click', (e) => {
                e.preventDefault();
                startLoading();
                auth.signInWithPopup(googleProvider)
                    .then((result) => { console.log("OAuth Connection Established:", result.user.email); })
                    .catch((err) => { stopLoading(); alert("OAuth Interrupted: " + err.message); });
            });
        }

        if (btnLogout) {
            btnLogout.addEventListener('click', (e) => {
                e.preventDefault();
                startLoading();
                auth.signOut().catch((err) => { stopLoading(); alert("Logout Interrupted: " + err.message); });
            });
        }
    } else {
        console.error("Firebase Drivers missing loop check fallback initialization fail.");
    }
});
