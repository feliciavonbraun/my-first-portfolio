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

    // gör att den går runt åt höger
    if (hej > aboutSlides.length) {
        slideIndex = 1
    }    

    // gör att den går runt åt vänster
    if (hej < 1) {
        slideIndex = aboutSlides.length
    }

    // gör att bilderna ligger bakom varanda
    for (i = 0; i < aboutSlides.length; i++) {
        aboutSlides[i].style.display = "none";  
    }
    
    // prickarna 
    for (i = 0; i < dot.length; i++) {
        dot[i].className = dot[i].className.replace(" active", "");
    }

    // gör att bilder och prickar syns 
    aboutSlides[slideIndex-1].style.display = null;  
    dot[slideIndex-1].className += " active";
}