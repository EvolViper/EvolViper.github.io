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

//Убираем скроллбар

document.body.style="overflow: hidden";

//Плавный скроллинг

var scrollButton = document.querySelector(".scroll-button");
var anchor = document.getElementById("about");

function smoothScroll(direction) {
    var timer = 0;
    if (direction === "down") {
       
       for (var i = 0; i < window.innerHeight / 10; i++) {
           setTimeout("window.scrollBy(0, 10)", timer * 4);
           timer++;
        } 
    }
    
    else {
            for (var i = 0; i < window.innerHeight / 10; i++) {
            setTimeout("window.scrollBy(0, -10)", timer * 4);
            timer++;
        } 
    }
    
}

/*
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
*/

//Дискретная прокрутка

var currentOffset = window.pageYOffset;

document.onkeydown = function(evt) {
    if (evt.keyCode === 40) {
        evt.preventDefault();
        smoothScroll("down");
        //window.scrollBy(0, window.innerHeight);
    }
    else if (evt.keyCode === 38) {
        evt.preventDefault();
        smoothScroll("up");
        //window.scrollBy(0, -window.innerHeight);
    }
    
    else if (evt.keyCode === 32) {
        evt.preventDefault();
        smoothScroll("down");
        //window.scrollBy(0, window.innerHeight);
    }
    
}

document.addEventListener("wheel", onWheel);
function onWheel(evt) {
    evt.preventDefault();
    document.removeEventListener("wheel", onWheel);
    if ("wheelDelta" in document) {
        //if (evt.wheelDelta < 0) window.scrollBy(0, window.innerHeight);
        //if (evt.wheelDelta > 0) window.scrollBy(0, -window.innerHeight);
        if (evt.wheelDelta < 0) smoothScroll("down");
        if (evt.wheelDelta > 0) smoothScroll("up");
    }
    
    else  {
        //if (evt.deltaY < 0) window.scrollBy(0, -window.innerHeight);
        //if (evt.deltaY > 0) window.scrollBy(0, window.innerHeight);
        if (evt.deltaY < 0) smoothScroll("up");
        if (evt.deltaY > 0) smoothScroll("down");
    }
    setTimeout(function() {
        document.addEventListener("wheel", onWheel);
    }, 700)
}

/*window.onscroll = function() {
    if (currentOffset - window.pageYOffset > 0) {
        console.log("Up!");
        window.scrollBy(0, -window.innerHeight);
    }
    else if (currentOffset - window.pageYOffset < 0) {
        console.log("Down!");
        window.scrollBy(0, window.innerHeight);
    }
    currentOffset = window.pageYOffset;
    
    if (window.pageYOffset > 0) {
        headerBg.style.opacity = 1;
    }
    if (window.pageYOffset === 0) {
        headerBg.style.opacity = 0;
    }
}*/


//Внутреннее меню

var about = document.getElementById("about");
var work = document.getElementById("work");
var contact = document.getElementById("contact");

var anchorAbout = document.querySelector(".main-nav a[href='#about']");
var anchorWork = document.querySelector(".main-nav a[href='#work']");
var anchorContact = document.querySelector(".main-nav a[href='#contact']");


anchorAbout.onclick = function(evt) {
    evt.preventDefault();
    window.scrollTo(0, about.offsetTop);
}

anchorWork.onclick = function(evt) {
    evt.preventDefault();
    window.scrollTo(0, work.offsetTop);
}

anchorContact.onclick = function(evt) {
    evt.preventDefault();
    window.scrollTo(0, contact.offsetTop);
    
}