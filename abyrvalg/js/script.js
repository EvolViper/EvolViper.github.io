//Затемнение верхнего меню

var headerBg = document.querySelector(".header-background");
var scrollPos = window.scrollY;
var opacity = 0;
window.onscroll = function() {
    if (window.scrollY > scrollPos) {
        opacity += 0.04;
        headerBg.style.opacity = opacity;
    }
    if (window.scrollY === 0) {
        headerBg.style.opacity = 0;
        opacity = 0;
    }
}
