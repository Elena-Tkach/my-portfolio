'use strict';


const progressEl = document.querySelector(`.js-progress`);
const article = document.querySelectorAll(`.article__content`);


window.addEventListener(`scroll`, function () {
    onProgressScroll(progressEl);

})



// const articleParallax = function () {
//     article.forEach((item) => {
//         item.style.top = value + 5 + `px`;
//         console.log(`efasfd`)
//     })

// }

// articleParallax();

const onProgressScroll = function (element) {
    let scrollTop = window.scrollY;
    let windowHeight = window.innerHeight;
    let siteHeight = document.documentElement.scrollHeight;

    let percentageProgress = Math.floor(scrollTop / (siteHeight - windowHeight) * 100);

    element.style.height = `${percentageProgress}%`;
}



const pos = document.documentElement;
pos.addEventListener(`mousemove`, e => {
    pos.style.setProperty(`--x`, e.clientX + `px`);
    pos.style.setProperty(`--y`, e.clientY + `px`);
})



// const onProgressScroll = (element) => {
//     const windowClient = document.documentElement.scrollTop;
//     const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//     const scrollPercent = (windowClient / windowHeight) * 100;

//     element.style.width = scrollPercent + `%`;
// }

// window.addEventListener(`scroll`, () => onProgressScroll(progressEl));




