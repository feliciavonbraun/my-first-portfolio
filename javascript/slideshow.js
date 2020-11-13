var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(hej) {
    showSlides(slideIndex += hej);
}

function currentSlide(hej) {
    showSlides(slideIndex = hej);
}

function showSlides(hej) {
    var i;
    var aboutSlides = document.getElementsByClassName("aboutSlides");
    var dot = document.getElementsByClassName("dot");

    /** INFINIT AT THE RIGHT */
    // gör att den går runt åt höger
    if (hej > aboutSlides.length) {
        slideIndex = 1
    }    

    /** INFINIT AT THE LEFT */
    // gör att den går runt åt vänster
    if (hej < 1) {
        slideIndex = aboutSlides.length
    }

    /** MAKES THE SLIDES STAY BEHIND EACHOTHER */
    // gör att bilderna ligger bakom varanda
    for (i = 0; i < aboutSlides.length; i++) {
        aboutSlides[i].style.display = "none";  
    }
    
    /** DOTS */
    // prickarna 
    for (i = 0; i < dot.length; i++) {
        dot[i].className = dot[i].className.replace(" active", "");
    }

    /** MAKES CURRENT SLIDES VISIBLE */
    // gör att bilder och prickar syns 
    aboutSlides[slideIndex-1].style.display = null;  
    dot[slideIndex-1].className += " active";
}