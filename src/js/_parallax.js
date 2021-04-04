
const image = document.querySelector(`.js-parallax`);

window.addEventListener(`scroll`, function () {
    const par = document.documentElement.scrollTop;

    isPartiallyVisible(image);
});




function isPartiallyVisible(el) {
    var elementBoundary = el.getBoundingClientRect();

    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;
    var height = elementBoundary.height;

    console.log(top);

    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}

