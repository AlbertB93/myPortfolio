window.onscroll = function () { myFunction() };
let header = document.querySelector("header")
let nav = document.querySelector("nav")
let ul = document.querySelector("ul")

function myFunction() {
    if (document.body.scrollTop > 600|| document.documentElement.scrollTop > 600) {
        header.classList.add("changePostionToRight")
        nav.classList.add("displayColumn")
        ul.classList.add("changeSize")
    } else {

        header.classList.remove("changePostionToRight")
        nav.classList.remove("displayColumn")
    }
}