'use strict';

let scroll = 0;
const defaultOffset = 200;
const header = document.querySelector(`.js-header`);
const animateArrow = document.querySelector(`.js-arrows`);
const scrollItems = document.querySelectorAll(`.js-scroll`);



const progressEl = document.querySelector(`.js-progress`);
// const article = document.querySelectorAll(`.article__content`);
const pos = document.documentElement;

// const windowClient = document.documentElement.scrollTop;
// const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
// const scrollPercent = (windowClient / windowHeight) * 100;


window.addEventListener(`scroll`, function () {
    onProgressScroll(progressEl);
    scrollheader();
    checkBoxes();
});


function scrollheader() {
    const scrollPosition = () => window.pageXOffset || document.documentElement.scrollTop;
    const containHide = () => header.classList.contains(`hide`);

    if (scrollPosition() >
        scroll && !containHide() &&
        scrollPosition() > defaultOffset) {
        header.classList.add(`hide`);

    }

    if (scrollPosition() < scroll && containHide) {
        header.classList.remove(`hide`);

    }

    scroll = scrollPosition();
}

function onProgressScroll(element) {
    let scrollTop = window.scrollY;
    let windowHeight = window.innerHeight;
    let siteHeight = document.documentElement.scrollHeight;
    let percentageProgress = Math.floor(scrollTop / (siteHeight - windowHeight) * 100);

    element.style.height = `${percentageProgress}%`;
};


pos.addEventListener(`mousemove`, e => {
    pos.style.setProperty(`--x`, e.clientX + `px`);
    pos.style.setProperty(`--y`, e.clientY + `px`);
});

function checkBoxes(box) {
    const triggerTop = window.innerHeight - 100;


    scrollItems.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerTop) {
            box.classList.add("animation-class");
        }
    });
}