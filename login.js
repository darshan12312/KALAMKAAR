// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8cIe0UVXOcp5ySNzsuUuhP3vOYWNPFEU",
  authDomain: "login-final-e591d.firebaseapp.com",
  projectId: "login-final-e591d",
  storageBucket: "login-final-e591d.appspot.com",
  messagingSenderId: "106438394618",
  appId: "1:106438394618:web:91cdb464a38ab1686fbf43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const login = document.getElementById('login');
login.addEventListener("click", function (e) {
  e.preventDefault()

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;


      alert("Login Account")
      window.location.href = "index.html"
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Error Message")
      // ..
    });
})