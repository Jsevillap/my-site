const menuToggler = document.querySelector(".menu-toggler");
const menu = document.querySelector(".main-navigation");
const animatedText = document.querySelectorAll(".is-animated");

menuToggler.addEventListener("click", () => {
  menu.classList.toggle("active");
  menuToggler.classList.toggle("active");
});

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

animatedText.forEach((text) => {
  createSplitText(text);
});
