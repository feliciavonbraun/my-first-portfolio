var slideIndex = 1;
showSlides(slideIndex);

/** @function controls next and previous slides */
function plusSlides(hej) {
    showSlides(slideIndex += hej);
}

/** @function shows the current slide */
function currentSlide(hej) {
    showSlides(slideIndex = hej);
}


/** @function Gets the slide from HTML and controlls which one is showing */
function showSlides(hej) {
    var i;
    var aboutSlides = document.getElementsByClassName("aboutSlides");
    var dot = document.getElementsByClassName("dot");

    // INFINIT AT THE RIGHT
    if (hej > aboutSlides.length) {
        slideIndex = 1
    }    

    // INFINIT AT THE LEFT
    if (hej < 1) {
        slideIndex = aboutSlides.length
    }

    // MAKES THE SLIDES STAY BEHIND EACHOTHER
    for (i = 0; i < aboutSlides.length; i++) {
        aboutSlides[i].style.display = "none";  
    }
    
    // DOTS
    for (i = 0; i < dot.length; i++) {
        dot[i].className = dot[i].className.replace(" active", "");
    }

    // MAKES CURRENT SLIDES VISIBLE
    aboutSlides[slideIndex-1].style.display = null;  
    dot[slideIndex-1].className += " active";
}