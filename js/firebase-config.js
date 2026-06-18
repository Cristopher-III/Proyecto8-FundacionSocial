/* ==========================================
   PROYECTO 8 · FIREBASE CONFIGURACIÓN
   ========================================== */

// Reemplaza estos valores con los de tu proyecto Firebase
// 1. Ve a https://console.firebase.google.com
// 2. Crea un proyecto nuevo
// 3. Ve a Project Settings > General > Your apps > Web app
// 4. Copia aquí la configuración

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_PROYECTO.firebaseapp.com",
  projectId: "TU_PROYECTO",
  storageBucket: "TU_PROYECTO.appspot.com",
  messagingSenderId: "TU_SENDER_ID",
  appId: "TU_APP_ID"
};

// Inicializar Firebase
try {
  firebase.initializeApp(firebaseConfig);
} catch (e) {
  console.warn('Firebase no configurado aún. Modo demo activo.');
}

const db = firebase.firestore ? firebase.firestore() : null;
const auth = firebase.auth ? firebase.auth() : null;
