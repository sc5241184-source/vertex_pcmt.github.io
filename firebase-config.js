<script type="module">
  // 🔥 YOUR FIREBASE CONFIG HERE
  import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
  import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';

  const firebaseConfig = {
    // ← PASTE YOUR CONFIG HERE ↓
    apiKey: "YOUR_API_KEY",
    authDomain: "vertex-pcmt.firebaseapp.com",
    projectId: "vertex-pcmt",
    storageBucket: "vertex-pcmt.appspot.com",
    messagingSenderId: "123456789",
    appId: "YOUR_APP_ID"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  // Make auth global
  window.auth = auth;
  window.googleProvider = googleProvider;
</script>
