'use strict';

document.addEventListener('DOMContentLoaded', () => {


    const headerFixed = document.querySelector(`.js-header`);
    const scroll = 0;

    const progressEl = document.querySelector(`.js-progress`);
    const article = document.querySelectorAll(`.article__content`);
    let scrollTop = document.scrollTop;



    window.addEventListener(`scroll`, function () {
        onProgressScroll(progressEl);

        scrollClient()

    })
    scrollClient()
    function scrollClient() {
        if (scrollTop > scroll) {
            headerFixed.classList.add(`fixed`);
        } else {
            headerFixed.classList.remove(`fixed`);
        }
    }



    // const articleParallax = function () {
    //     article.forEach((item) => {
    //         item.style.top = value + 5 + `px`;
    //         console.log(`efasfd`)
    //     })

    // }

    // articleParallax();

    const onProgressScroll = function (element) {

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




})