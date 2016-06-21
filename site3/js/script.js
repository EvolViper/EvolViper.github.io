var btn = document.querySelector(".write-to-us");
var closeBtn = document.querySelector(".close");
var nameForm = document.querySelector("[name='username']");
var mailForm = document.querySelector("[name='usermail']");
var textForm = document.querySelector("[name='letter-text']");
var form = document.querySelector(".message-popup form");
var overlay = document.querySelector(".block-page");
var storage = localStorage.getItem("login");
var slideBtn1 = document.querySelector("[name='slide1']");
var slideBtn2 = document.querySelector("[name='slide2']");
var slideBtn3 = document.querySelector("[name='slide3']");
var prevBtnName = "slide1";

function initialize() {
  var mapOptions = {
    zoom: 17,
    center: new google.maps.LatLng(59.939109, 30.319899)
  }
  var map = new google.maps.Map(document.getElementById('map-id'),
                                mapOptions);
  var image = "img/marker.png";
  var myLatLng = new google.maps.LatLng(59.938633, 30.323760);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
}
google.maps.event.addDomListener(window, 'load', initialize);


btn.addEventListener("click", function(evt) {
    evt.preventDefault();
    document.querySelector(".message-popup").style.display = "block";
    document.querySelector(".block-page").style.display = "block";
    
    if (storage) {
        nameForm.value = storage;
        mailForm.focus();
    }
    else {
        nameForm.focus();
    }
});

closeBtn.addEventListener("click", function(evt){
    evt.preventDefault();
    document.querySelector(".message-popup").style.display = "none";
    document.querySelector(".block-page").style.display = "none";
    document.querySelector(".message-popup").classList.remove("animated");
});

overlay.addEventListener("click", function(evt) {
    evt.preventDefault();
    document.querySelector(".message-popup").style.display = "none";
    document.querySelector(".block-page").style.display = "none"; 
});

form.addEventListener("submit", function(evt) {
    if (!nameForm.value || !mailForm.value || !textForm.value) {
        evt.preventDefault();
        document.querySelector(".message-popup").classList.add("animated");
        setTimeout(function() {document.querySelector(".message-popup").classList.remove("animated");}, 600);
        }
       
    else {
        localStorage.setItem("login", nameForm.value);
    }
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (document.querySelector(".message-popup").style.display === "block" && document.querySelector(".block-page").style.display === "block") {
            document.querySelector(".message-popup").style.display = "none";
            document.querySelector(".block-page").style.display = "none"; 
            document.querySelector(".message-popup").classList.remove("animated");
        }
    }
});

slideBtn1.addEventListener("click", moveSlider);
slideBtn2.addEventListener("click", moveSlider);
slideBtn3.addEventListener("click", moveSlider);

function moveSlider(evt) {
    var btnName = evt.target.getAttribute("name");
    console.log(prevBtnName);
    slideBtn1.classList.remove("active-button");
    slideBtn2.classList.remove("active-button");
    slideBtn3.classList.remove("active-button");
    evt.target.classList.add("active-button");
    
    if (btnName == "slide1") {
       
        document.querySelector(".slide-one").classList.add("show-block");
        document.querySelector(".slide-one").classList.add("block-animation-backwards");
        document.querySelector(".slide-two").classList.remove("show-block");
        document.querySelector(".slide-three").classList.remove("show-block");
        prevBtnName = "slide1"
        

    }
    else if (btnName == "slide2") {
        document.querySelector(".slide-one").classList.remove("show-block");
        document.querySelector(".slide-three").classList.remove("show-block");
        document.querySelector(".slide-two").classList.add("show-block");
        if (prevBtnName == "slide1") {
            document.querySelector(".slide-two").classList.add("block-animation");
            document.querySelector(".slide-two").classList.remove("block-animation-backwards");
        } 
        else if (prevBtnName == "slide3") {
            document.querySelector(".slide-two").classList.add("block-animation-backwards");
        }
    }
    else {
        
        document.querySelector(".slide-two").classList.remove("show-block");
        document.querySelector(".slide-one").classList.remove("show-block");
        document.querySelector(".slide-three").classList.add("show-block");
        document.querySelector(".slide-three").classList.add("block-animation");
        prevBtnName = "slide3"
    }
    
}

