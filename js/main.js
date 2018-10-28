
var menu = document.getElementById("menu");
console.log(menu);

// close menu when menu-item is clicked
menu.addEventListener("click", myFunction);

// open/close menu when hamburger is clicked
function myFunction() {
    menu.classList.toggle("open");
    console.log("item is clicked");
}

// cookie warning
window.addEventListener("load", function(){
    window.cookieconsent.initialise({
        "palette": {
            "popup": {
                "background": "#83afed",
                "text": "#000000"
            },
            "button": {
                "background": "#f2c94c",
                "text": "#000"
            }
        },
        "theme": "classic"
    })
});