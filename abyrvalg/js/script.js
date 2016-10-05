//Затемнение верхнего меню

var headerBg = document.querySelector(".header-background")
window.onscroll = function() {
    headerBg.style.opacity = 1;
    if (window.scrollY === 0) {
        headerBg.style.opacity = 0;
    }
}
