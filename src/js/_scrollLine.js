'use strict';

let scroll = 0;
const defaultOffset = 200;
const header = document.querySelector(`.js-header`);
const animateArrow = document.querySelector(`.js-arrows`);
const scrollItems = document.querySelectorAll(`.js-scroll`);
const progressEl = document.querySelector(`.js-progress`);
const anchors = document.querySelectorAll(`.js-anchors`);
const pos = document.documentElement;


window.addEventListener(`scroll`, function () {
    onProgressScroll(progressEl);
    scrollheader();
    checkBoxes();
});

pos.addEventListener(`mousemove`, e => {
    pos.style.setProperty(`--x`, e.clientX + `px`);
    pos.style.setProperty(`--y`, e.clientY + `px`);
});

slowScroll(anchors);

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

function checkBoxes(box) {
    const triggerTop = window.innerHeight - 100;


    scrollItems.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerTop) {
            box.classList.add("animation-class");
        }
    });
}


function slowScroll(anchors) {
    for (let anchor of anchors) {
        anchor.addEventListener(`click`, (e) => {
            e.preventDefault();
            const blockID = anchor.getAttribute(`href`)
            document.querySelector(`${blockID}`).scrollIntoView({
                behavior: `smooth`,
                block: `start`
            })
        })
    }
}