const goButton = document.getElementById("buttonGo");
const usernameInput = document.getElementById("usernameInput");
const passwordInput = document.getElementById("passwordInput");

goButton.addEventListener("click", function (){
    if(usernameInput.value == "Abigail Griffiths") {
        if(passwordInput.value == "1232589875") {
            window.location.replace("mainGame.html")
        } else {
            alert("Password is incorrect. Try again.")
        }
    } else {
        alert("Username is incorrect. Try again")
    }
});