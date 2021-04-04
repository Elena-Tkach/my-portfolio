
const images = document.querySelectorAll('.js-parallax');
console.log(images);
new simpleParallax(images, {
    scale: 1.2,
    delay: .6,

    // transition: 'cubic-bezier(.3,.34,.8,.66)'
    transition: 'linear'
});
