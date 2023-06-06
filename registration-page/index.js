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
const register = () => {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    auth.createUserWithEmailAndPassword(email, password)
    .then((res) => {
        console.log(res.user)
    })
    .catch((err) => {
        alert(err.message)
        console.log(err.code)
        console.log(err.message)
    })
}
