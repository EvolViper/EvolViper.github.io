var template1 = document.querySelector(".template-1");
var template2 = document.querySelector(".template-2");
var template3 = document.querySelector(".template-3");
var template4 = document.querySelector(".template-4");
var template5 = document.querySelector(".template-5");
var template6 = document.querySelector(".template-6");
var currentPageBtn = document.querySelector(".current-page");


template1.addEventListener("mouseover", function(evt) {
    document.querySelector(".template-1 .hover-item").style.display = "block";
    document.querySelector(".template-1 header").style.backgroundColor = "#797979";
});
template1.addEventListener("mouseout", function() {
    document.querySelector(".template-1 .hover-item").style.display = "none";
    document.querySelector(".template-1 header").style.backgroundColor = "#f1f1f1";
});

template2.addEventListener("mouseover", function() {
    document.querySelector(".template-2 .hover-item").style.display = "block";
    document.querySelector(".template-2 header").style.backgroundColor = "#797979";
});
template2.addEventListener("mouseout", function() {
    document.querySelector(".template-2 .hover-item").style.display = "none";
    document.querySelector(".template-2 header").style.backgroundColor = "#f1f1f1";
});

template3.addEventListener("mouseover", function() {
    document.querySelector(".template-3 .hover-item").style.display = "block";
    document.querySelector(".template-3 header").style.backgroundColor = "#797979";
});
template3.addEventListener("mouseout", function() {
    document.querySelector(".template-3 .hover-item").style.display = "none";
    document.querySelector(".template-3 header").style.backgroundColor = "#f1f1f1";
});

template4.addEventListener("mouseover", function() {
    document.querySelector(".template-4 .hover-item").style.display = "block";
    document.querySelector(".template-4 header").style.backgroundColor = "#797979";
});
template4.addEventListener("mouseout", function() {
    document.querySelector(".template-4 .hover-item").style.display = "none";
    document.querySelector(".template-4 header").style.backgroundColor = "#f1f1f1";
});

template5.addEventListener("mouseover", function() {
    document.querySelector(".template-5 .hover-item").style.display = "block";
    document.querySelector(".template-5 header").style.backgroundColor = "#797979";
});
template5.addEventListener("mouseout", function() {
    document.querySelector(".template-5 .hover-item").style.display = "none";
    document.querySelector(".template-5 header").style.backgroundColor = "#f1f1f1";
});

template6.addEventListener("mouseover", function() {
    document.querySelector(".template-6 .hover-item").style.display = "block";
    document.querySelector(".template-6 header").style.backgroundColor = "#797979";
});
template6.addEventListener("mouseout", function() {
    document.querySelector(".template-6 .hover-item").style.display = "none";
    document.querySelector(".template-6 header").style.backgroundColor = "#f1f1f1";
});


currentPageBtn.addEventListener("click", function(evt) {
    evt.preventDefault();
});