'use strict';


const progressEl = document.querySelector(`.js-progress`);

window.addEventListener(`scroll`, function () {
    onProgressScroll(progressEl);
})

const onProgressScroll = function (element) {
    let scrollTop = window.scrollY;
    let windowHeight = window.innerHeight;
    let siteHeight = document.documentElement.scrollHeight;

    let percentageProgress = Math.floor(scrollTop / (siteHeight - windowHeight) * 100);

    element.style.height = `${percentageProgress}%`;
}



// const onProgressScroll = (element) => {
//     const windowClient = document.documentElement.scrollTop;
//     const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//     const scrollPercent = (windowClient / windowHeight) * 100;

//     element.style.width = scrollPercent + `%`;
// }

// window.addEventListener(`scroll`, () => onProgressScroll(progressEl));




