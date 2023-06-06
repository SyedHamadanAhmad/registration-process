const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCn8dMYxbT3_flp5M2mnNbywk-MaZiLH1Q",
    authDomain: "test-project-b41ca.firebaseapp.com",
    projectId: "test-project-b41ca",
    storageBucket: "test-project-b41ca.appspot.com",
    messagingSenderId: "337084528583",
    appId: "1:337084528583:web:adbe0293fe720ccf3c8be2",
    measurementId: "G-RM36F7YWSM"
});

const auth = firebaseApp.auth();
const login_with_email = () => {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    auth.signInWithEmailAndPassword(email, password)
    .then((res) => {
        console.log(res.user)
    })
    .catch((err) => {
        alert(err.message)
        console.log(err.code)
        console.log(err.message)
    })
}


var provider = new firebase.auth.GoogleAuthProvider();

const googleAuthentication=()=>{

    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;
    
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // IdP data available in result.additionalUserInfo.profile.
          // ...
      }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
    
    }