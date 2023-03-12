var register = document.querySelector("#login")
var loginForm =document.getElementById("myform")
var closeForm= document.getElementById("closepop")
var colorFlipper =document.getElementById("colorFlipper")
const body =document.querySelector(".dbody")
register.addEventListener('click', poplogin)
function poplogin(ev){
    ev.preventDefault();
    loginForm.style.visibility= "visible";
}

closeForm.addEventListener('click', formClose)
function formClose(ev){
    ev.preventDefault();
    loginForm.style.visibility= "hidden"
}
colorFlipper.addEventListener('click', colorchange)
function colorchange(ev){
    ev.preventDefault();
    body.style.backgroundColor="black"
    body.style.color="orange"
}
