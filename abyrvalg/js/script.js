//Затемнение верхнего меню

var headerBg = document.querySelector(".header-background");
/*window.onscroll = function() {
    if (window.scrollY > 0) {
        headerBg.style.opacity = 1;
    }
    if (window.scrollY === 0) {
        headerBg.style.opacity = 0;
    }
}*/

//Скроллинг

var scrollButton = document.querySelector(".scroll-button");
var anchor = document.getElementById("about");

scrollButton.onclick = function(evt) {
    var anchorPosition = anchor.offsetTop;
    var scrollDistance = 0;
    evt.preventDefault();
    scrollDistance = anchorPosition - window.pageYOffset; 
    for (var i = scrollDistance; i > 0; i--) {
        setTimeout(function() {
            window.scrollBy(0, 1);
            console.log(window.pageYOffset);
        }, 200);
    }
    //window.scrollBy(0, scrollDistance);
}

//Дискретная прокрутка

var currentOffset = window.pageYOffset;
var about = document.getElementById("about");
var work = document.getElementById("work");
var work = document.getElementById("contact");


window.onscroll = function() {
    if (currentOffset - window.pageYOffset > 0) {
        console.log("Up!");
        window.scrollBy(0, -window.innerHeight);
    }
    else if (currentOffset - window.pageYOffset < 0) {
        console.log("Down!");
        window.scrollBy(0, window.innerHeight);
    }
    currentOffset = window.pageYOffset;
    /*
    if (window.pageYOffset > 0) {
        headerBg.style.opacity = 1;
    }
    if (window.pageYOffset === 0) {
        headerBg.style.opacity = 0;
    }*/
}