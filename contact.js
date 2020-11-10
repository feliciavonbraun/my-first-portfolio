// Burger menu2 (on contact page) WORKING
const header = document.querySelector('header');
const menuIcon2 = document.getElementById('menu2');

menuIcon2.onclick = function() {
    if (header.style.height == '40%') {
           header.style.height = null; 
           header.style.background = null;
    } else {
           header.style.height = '40%';
           header.style.background = 'rgb(134, 91, 121)';
    }
}