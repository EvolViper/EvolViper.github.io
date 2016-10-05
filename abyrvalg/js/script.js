//Затемнение верхнего меню

var headerBg = document.querySelector(".header-background");
var scrollPos = window.scrollY;
var opacity = 0;
window.onscroll = function() {
    if (window.scrollY > 0) {
        headerBg.style.opacity = 1;
    }
    if (window.scrollY === 0) {
        headerBg.style.opacity = 0;
    }
}
