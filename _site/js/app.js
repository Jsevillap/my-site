const menuToggler = document.querySelector(".menu-toggler");
const root = document.querySelector(":root");
const menu = document.querySelector(".main-navigation");
const animatedText = document.querySelectorAll(".is-animated");
const header = document.querySelector("header");
const navBar = document.querySelector("nav");
const preLoader = document.querySelector(".pre-loader");
const year = new Date();
const yearDisplay = document.querySelector("#copy-year");
let scrollValue = document.documentElement.scrollTop;

//Remove Pre Loader
window.onload = (e) => {
  preLoader.classList.toggle("hidden");

  let height = `${window.innerHeight - 256}px`;
  root.style.setProperty("--min-height", height);
};

//Hide navbar on scroll
window.onscroll = (e) => {
  if (document.documentElement.scrollTop > scrollValue) {
    /* collapse menu on mobile when hidding it */
    menu.classList.remove("active");
    menuToggler.classList.remove("active");
    /* /collapse menu on mobile when hidding it */
    header.classList.add("hidden");
    scrollValue = document.documentElement.scrollTop;
  } else {
    header.classList.remove("hidden");
    scrollValue = document.documentElement.scrollTop;
  }
};

//Show navbar when focused to help with tab navigation
navBar.addEventListener("focus", (e) => {
  if (header.classList.contains("hidden")) {
    header.classList.remove("hidden");
  }
});

//Toggle Menu on mobile
menuToggler.addEventListener("click", () => {
  menu.classList.toggle("active");
  menuToggler.classList.toggle("active");
});

//Split text for main text animation
const createSplitText = (element) => {
  let splitText = element.innerHTML.split("");
  element.innerText = "";
  let delay = 0;

  splitText.forEach((el) => {
    let span = document.createElement("span");

    if (el === " ") {
      span.innerHTML = "&nbsp";
    } else {
      span.classList.add("letter");
      span.classList.add("enter");
      span.innerText = el;
      span.style.animationDelay = delay + "s";
      delay += 0.1;
    }

    span.addEventListener("animationend", () => {
      span.classList.remove("enter");
      span.style.animationDelay = 0 + "s";
    });
    //console.dir(span)
    element.appendChild(span);
  });
};

//Animate all the text
animatedText.forEach((text) => {
  createSplitText(text);
});

yearDisplay.innerHTML = year.getFullYear();
