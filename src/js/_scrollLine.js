'use strict';


const progressEl = document.querySelector(`.js-progress`);

const onProgressScroll = (element) => {
    const windowClient = document.documentElement.scrollTop;
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (windowClient / windowHeight) * 100;

    element.style.width = scrollPercent + `%`;
}

window.addEventListener(`scroll`, () => onProgressScroll(progressEl));

console.log(`ndsvasdfadsfasdf`);


