(function() {
    var navIcon = document.getElementById("show-nav");
    var menu = document.getElementById("menu");
    var showMenu = false;
    navIcon.onclick = function(evt) {
        evt.preventDefault();
        if (showMenu) {
            menu.style.display = "none";
            showMenu = false;
        }
        else {
            menu.style.display = "block";
            showMenu = true;
        }
    }
    document.body.onresize = function() {
        menu.style.display = "";
    }
})();