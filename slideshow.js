

// window.onload = changeActiveImage;
// window.addEventListener('load', main);


/** Start the animation with a set interval */
// function startSlideshowAnimation() {
//     setInterval(changeActiveImage, 2000);
// }

// /** Presents the next image by checking which image is currently presented */
// function changeActiveImage() {
//     const images = document.getElementById('slideshow-container');

//     for (let i = 0; i < images.length; i++) {
        
//         if (images[i].classList.contains('show')) {
//             images[i].classList.remove('show');

//             // Make sure that we go back to index 0 when at the end of array.
//             let nextIndex = (i + 1) % images.length;
            
//             // Alternatively use an if statement to reset the index to 0.
//             // if (nextIndex >= images.length) {
//             //     nextIndex = 0;
//             // }

//             // Modulus rocks!
//             // 0 / 4 = 0
//             // 1 / 4 = 1  
//             // 2 / 4 = 2
//             // 3 / 4 = 3
//             // 4 / 4 = 0
//             // 5 / 4 = 1
//             // 6 / 4 = 2
//             // 7 / 4 = 3
//             // 8 / 4 = 0
//             // 9 / 4 = 1

//             images[nextIndex].classList.add('show');
//             break;
//         }
        
//     }
// }

