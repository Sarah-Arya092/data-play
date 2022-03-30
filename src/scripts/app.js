"use strict";

let logo = document.querySelector(".logo");


/*dark mode*/
let activeTheme = localStorage.getItem("theme");
if(activeTheme !==null){
  setTheme(activeTheme);
}
let themeDarkmode = document.querySelector(".js-theme-darkmode");
if(themeDarkmode){     themeDarkmode.addEventListener("click", toggleTheme);
}
function setTheme(theme){
  document.body.setAttribute("color-theme", theme);
  localStorage.setItem("theme",theme);
}
function toggleTheme(){
  let theme = document.body.getAttribute("color-theme");
  if(theme == "sombre"){
    setTheme("clair");
    logo.src = "../data/assets/images/lune-test.png"
  }else{
    setTheme("sombre");
    logo.src = "../data/assets/images/lune-test3.png"
  }
}



const left = gsap.timeline({
  scrollTrigger: {
    trigger: ".box1",
    start: "bottom bottom",
  }
});

const right = gsap.timeline({
  scrollTrigger: {
    trigger: ".box2",
    start: "bottom bottom",
  }
});

left.to(".box1", { x: 200, duration: 2.5})
right.to(".box2", { x: -40, duration: 2.5})
left.to(".box3", { x: 200, duration: 2.5})
right.to(".box4", { x: -40, duration: 2.5})
left.to(".box5", { x: 200, duration: 2.5})
right.to(".box6", { x: -40, duration: 2.5})