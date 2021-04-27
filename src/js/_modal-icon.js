const modalEl = document.querySelector(`.js-modal`);
const btnClose = document.querySelector(`.js_btn-close`);
const form = document.querySelector(`.js-form`);
const formContacts = document.querySelector(`.js-form--contacts`);
const footerBtn = document.querySelector(`.js-modal-btn`);
const popupEl = document.querySelector(`.js-popup`);
const subtitleEl = document.querySelector(`.js-subtitle`);



let previousActiveElement;

footerBtn.addEventListener(`click`, openModalIconClick);

btnClose.addEventListener(`click`, function () {
    hideModalIconClick();
    form.reset();
});

window.addEventListener(`click`, function (event) {
    if (event.target === modalEl) {
        hideModalIconClick()
        form.reset();
    }
})

function openModalIconClick() {
    modalEl.classList.add(`modal--visible`);
    body.classList.add(`no-scroll`);

    previousActiveElement = document.activeElement;

    btnClose.focus();
    setTimeout(() => {
        btnClose.focus();
    }, 100);

    document.addEventListener('keydown', onPressEscKeydown);
}

function hideModalIconClick() {
    modalEl.classList.remove(`modal--visible`);
    popupEl.classList.remove('popup__visible');
    body.classList.remove('no-scroll');

    previousActiveElement.focus();

    document.removeEventListener('keydown', onPressEscKeydown);
}

function onPressEscKeydown(el) {
    if (el.code === `Escape`) {
        hideModalIconClick()
        form.reset();
    }
}

