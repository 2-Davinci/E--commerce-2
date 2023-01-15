const hamburger = document.querySelector(".hamburger");
const navlist =document.querySelector(".nav-list")

if(hamburger){
    hamburger.addEventListener("click", function(){
        navlist.classList.toggle("open")
    })
}
const popup = document.querySelector(".popup")
const closepopup = document.querySelector(".popup-close")

if(popup){
    closepopup.addEventListener("click", () =>{
        popup.classList.add("hide-popup")
    })
}
window.addEventListener("load", () =>{
    // setTimeout( () =>{
    //     popup.classList.remove("hide-popup")
    // } , 1000)
    popup.classList.remove("hide-popup")
})