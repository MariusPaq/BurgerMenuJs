var burgerMenu = document.getElementById("burgerMenu");
var topNav = document.getElementById("responsiveNav");
burgerMenu.addEventListener("click",function(){
    burgerMenu.classList.toggle("change");
    if (topNav.className === "topnav") {
      topNav.className += " responsive";
    } else {
      topNav.className = "topnav";
    }
})
