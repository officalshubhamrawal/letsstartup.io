var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
    apiKey: "AIzaSyBb2qrZqkFHkcLqRNN2e9VX8J64KGErtY8",
    authDomain: "letsstartup-a8c2e.firebaseapp.com",
    databaseURL: "https://letsstartup-a8c2e.firebaseio.com",
    projectId: "letsstartup-a8c2e",
    storageBucket: "letsstartup-a8c2e.appspot.com",
    messagingSenderId: "563953753648",
  
  };
if(!hasInit){
    firebase.initializeApp(config);
    hasInit = true;
}


