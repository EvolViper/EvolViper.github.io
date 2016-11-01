//Убираем скроллбар

/*if(window.innerHeight < window.innerWidth) {
    document.body.style="overflow: hidden";
}
  */  


document.body.style="overflow: hidden";

//Затемнение верхнего меню

var headerBg = document.querySelector(".header-background");
window.onscroll = function() {
    if (window.scrollY > 0) {
        headerBg.style.opacity = 1;
    }
    if (window.scrollY === 0) {
        headerBg.style.opacity = 0;
    }
}

//Подчеркивание ссылок в меню

var about = document.getElementById("about");
var work = document.getElementById("work");
var contact = document.getElementById("contact");

var anchorAbout = document.querySelector(".main-nav a[href='#about']");
var anchorWork = document.querySelector(".main-nav a[href='#work']");
var anchorContact = document.querySelector(".main-nav a[href='#contact']");
var smallLogo = document.querySelector(".logo-link");

window.addEventListener("load", activeLink);
//window.onscroll = activeLink;
window.addEventListener("scroll", activeLink);


function activeLink() {
    console.log(window.pageYOffset);
    if (window.pageYOffset == 0) {
        console.log("Main");
        anchorAbout.classList.remove("active");
        anchorWork.classList.remove("active");
        anchorContact.classList.remove("active");
        smallLogo.classList.add("active");
    }
    else if (window.pageYOffset >= (about.offsetTop - 15) && window.pageYOffset <= (about.offsetTop + 15)) {
        console.log("About");
        anchorAbout.classList.add("active");
        anchorWork.classList.remove("active");
        anchorContact.classList.remove("active");
        smallLogo.classList.remove("active");
    }
    else if (window.pageYOffset >= (work.offsetTop - 15) && window.pageYOffset <= (work.offsetTop + 15)) {
        console.log("Work");
        anchorAbout.classList.remove("active");
        anchorWork.classList.add("active");
        anchorContact.classList.remove("active");
        smallLogo.classList.remove("active");
    }
    else if (window.pageYOffset >= (contact.offsetTop - 15) && window.pageYOffset <= (contact.offsetTop + 15)) {
        console.log("Contact");
        anchorAbout.classList.remove("active");
        anchorWork.classList.remove("active");
        anchorContact.classList.add("active");
        smallLogo.classList.remove("active");
    }
}

//Плавный скроллинг

var scrollButton = document.querySelector(".scroll-button");
var anchor = document.getElementById("about");

function smoothScroll(direction) {
    var timer = 0;
    if (direction === "down") {
       
       for (var i = 0; i < window.innerHeight / 10; i++) {
           setTimeout("window.scrollBy(0, 10)", timer * 6);
           timer++;
        } 
    }
    
    else {
            for (var i = 0; i < window.innerHeight / 10; i++) {
            setTimeout("window.scrollBy(0, -10)", timer * 6);
            timer++;
        } 
    }
}

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
    }, 800)
}

//Внутреннее меню

function buttonScroll(evt) {
    evt.preventDefault();
    var anchor = evt.target.getAttribute("href");
    var scrollTarget = document.getElementById(anchor.slice(1));
    var timer = 0;
    console.log(scrollTarget);
    if (scrollTarget.offsetTop > window.pageYOffset) {
        //window.scrollBy(0, scrollTarget.offsetTop - window.pageYOffset);
        for (var i = 0; i < (scrollTarget.offsetTop - window.pageYOffset) / 10; i++) {
           setTimeout("window.scrollBy(0, 10)", timer * 4);
           timer++;
        } 
    }
    else if (scrollTarget.offsetTop < window.pageYOffset) {
        //window.scrollBy(0, -(window.pageYOffset - scrollTarget.offsetTop));
        for (var i = 0; i < (window.pageYOffset - scrollTarget.offsetTop) / 10; i++) {
           setTimeout("window.scrollBy(0, -10)", timer * 4);
           timer++;
        } 
    }
    else return;
    
}

anchorAbout.addEventListener("click", buttonScroll, activeLink);
anchorWork.addEventListener("click", buttonScroll, activeLink);
anchorContact.addEventListener("click", buttonScroll, activeLink);
scrollButton.onclick = function(evt) {
    var timer = 0;
    evt.preventDefault();
    for (var i = 0; i < window.innerHeight / 10; i++) {
           setTimeout("window.scrollBy(0, 10)", timer * 6);
           timer++;
        } 
    
}

smallLogo.onclick = function(evt) {
    var timer = 0;
    evt.preventDefault();
    for (var i = 0; i < window.pageYOffset / 10; i++) {
           setTimeout("window.scrollBy(0, -10)", timer * 4);
           timer++;
        } 
    
}

//Галерея

var firstGalleryLink = document.querySelector(".work .work-small .pic-container.first a.image-link");
var secondGalleryLink = document.querySelector(".work .work-small .pic-container.second a.image-link");
var thirdGalleryLink = document.querySelector(".work .work-small .pic-container.third a.image-link");

var firstGalleryOverlay = document.querySelector(".work .work-small .pic-container.first .pic-overlay");
var secondGalleryOverlay = document.querySelector(".work .work-small .pic-container.second .pic-overlay");
var thirdGalleryOverlay = document.querySelector(".work .work-small .pic-container.third .pic-overlay");

var bigGalleryPic = document.querySelector(".work .work-main img");

firstGalleryLink.addEventListener("click", galleryFunc);
secondGalleryLink.addEventListener("click", galleryFunc);
thirdGalleryLink.addEventListener("click", galleryFunc);

function galleryFunc(evt) {
    evt.preventDefault();
    console.log(evt.target.parentElement.parentElement.classList);
    if (evt.target.parentElement.parentElement.classList.contains("first")) {
        firstGalleryOverlay.classList.add("show-pic");
        secondGalleryOverlay.classList.remove("show-pic");
        thirdGalleryOverlay.classList.remove("show-pic");
        bigGalleryPic.src="img/big-bird.jpg";
    }
    else if (evt.target.parentElement.parentElement.classList.contains("second")) {
        secondGalleryOverlay.classList.add("show-pic");
        firstGalleryOverlay.classList.remove("show-pic");
        thirdGalleryOverlay.classList.remove("show-pic");
        bigGalleryPic.src="img/bug.jpg";
    }
    else if (evt.target.parentElement.parentElement.classList.contains("third")) {
        thirdGalleryOverlay.classList.add("show-pic");
        secondGalleryOverlay.classList.remove("show-pic");
        firstGalleryOverlay.classList.remove("show-pic");
        bigGalleryPic.src="img/big-abstract-image.jpg";
    }
}