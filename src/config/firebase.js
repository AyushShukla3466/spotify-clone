
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAxgPAoxXJrGd0hwENfo2Dmeb93p8XUawQ",
    authDomain: "spotify-clone-1b9cf.firebaseapp.com",
    projectId: "spotify-clone-1b9cf",
    storageBucket: "spotify-clone-1b9cf.appspot.com",
    messagingSenderId: "1098623529913",
    appId: "1:1098623529913:web:2840742bf85e3b641ffc68",
    measurementId: "G-W1GHMNGERP"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
