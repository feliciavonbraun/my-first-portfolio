// Burger menu on homepage
const burgerNav = document.getElementsByClassName('burgerNav')[0];
const menuIcon1 = document.getElementById('menu1');


/** @function shows and hides menu onclick */
menuIcon1.onclick = function() {
    if (burgerNav.style.height == '100%') {
        burgerNav.style.height = null;
        burgerNav.style.background = null;    
    } else {
        burgerNav.style.height = '100%';
        burgerNav.style.background = "rgb(134, 91, 121)";    
    }
}
