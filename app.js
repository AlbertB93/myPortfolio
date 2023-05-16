window.onscroll = function () {
  myFunction();
};
let header = document.querySelector("header");
let nav = document.querySelector("nav");
let ul = document.querySelector("ul");

function myFunction() {
  if (
    document.body.scrollTop > window.innerHeight ||
    document.documentElement.scrollTop > window.innerHeight
  ) {
    header.classList.add("changePostionToRight");
    nav.classList.add("displayColumn");
    ul.classList.add("changeSize");
  } else {
    header.classList.remove("changePostionToRight");
    nav.classList.remove("displayColumn");
  }
}
