  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDnugP-KFlsUNWhfM9s-Vr2prxI3riHlmI",
    authDomain: "inloggen-1c30a.firebaseapp.com",
    projectId: "inloggen-1c30a",
    storageBucket: "inloggen-1c30a.appspot.com",
    messagingSenderId: "762184412510",
    appId: "1:762184412510:web:39a8b379874786ba4173cf"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    const auth = firebase.auth()

    function signOut(){

        auth.signOut();
        alert("Uitgelogd")
        window.location.href = "/loginpage.html";
    };

