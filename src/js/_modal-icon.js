const modalEl = document.querySelector(`.js-modal`);
const btnCloseEl = document.querySelector(`.js_btn-close`);
const formEl = document.querySelector(`.js-form`);
const footerBtnEl = document.querySelector(`.js-modal-btn`);
let previousActiveElement;

footerBtnEl.addEventListener(`click`, openModalIconClick);

btnCloseEl.addEventListener(`click`, function () {
    hideModalIconClick();
    formEl.reset();
});

window.addEventListener(`click`, function (event) {
    if (event.target === modalEl) {
        hideModalIconClick()
        formEl.reset();
    }
})

function openModalIconClick() {
    modalEl.classList.add(`modal--visible`);

    previousActiveElement = document.activeElement;

    setTimeout(() => {
        btnCloseEl.focus();
    }, 100);

    document.addEventListener('keydown', onPressEscKeydown);
}

function hideModalIconClick() {
    modalEl.classList.remove(`modal--visible`);
    previousActiveElement.focus();

    document.removeEventListener('keydown', onPressEscKeydown);
}

function onPressEscKeydown(el) {
    if (el.code === `Escape`) {
        hideModalIconClick()
        formEl.reset();
    }
}

