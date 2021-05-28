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

    function signUp(){

        var email = document.getElementById("email");
        var password = document.getElementById("password");

        const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
        promise.catch(e => alert(e.message));

        alert("signed Up");
    }

    function signIn(){

        var email = document.getElementById("email");
        var password = document.getElementById("password");

        const promise = auth.signInWithEmailAndPassword(email.value, password.value);
        promise.catch(e => alert(e.message));

        alert("Ingelogd" + email.value);

    }

    function signOut(){

        auth.signOut();
        alert("Uitgelogd")
    }

    auth.onAuthStateChanged(function(user){

        if(user){

            var email = user.email;
            alert("Actieve gebruiker " + email);
            window.location.href = "index.html";
        }
        else{

            alert("Geen actieve gebruiker");
        
        }

    });