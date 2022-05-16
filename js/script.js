// Denna fil skall innehålla JavaScript (JS)
const nav = document.querySelector('.navLinks')
const burger = document.querySelector('.burger')

function toggleMeny() {
    nav.classList.toggle('navActive')
    burger.classList.toggle('toggle')
}

burger.addEventListener('click', toggleMeny)

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navBar").style.padding = "20px 10px";
    document.querySelector(".navLinks").style.top = "-96.5vh";
  } else {
    document.getElementById("navBar").style.padding = "40px 10px";
    document.querySelector(".navLinks").style.top = "-94.5vh";
  }
}

scrollFunction()