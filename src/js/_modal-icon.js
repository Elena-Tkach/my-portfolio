const modalEl = document.querySelector(`.js-modal`);
const btnClose = document.querySelector(`.js_btn-close`);

const form = document.querySelectorAll(`.js-form`);
const formContacts = document.querySelector(`.js-form--contacts`);
const footerBtn = document.querySelector(`.js-modal-btn`);

const popupEl = document.querySelector(`.js-popup`);
const btnClosePoup = document.querySelector(`.js_btn-closePopup`);


const currentFormReset = form.forEach(function (el) { el.reset(); });
let previousActiveElement;


//events
footerBtn.addEventListener(`click`, openModalIconClick);

btnClose.addEventListener(`click`, function () {
    hideModalIconClick();
    currentFormReset;
});

btnClosePoup.addEventListener(`click`, function () {
    hidePoupClick();
});


window.addEventListener(`click`, function (event) {
    if (event.target === modalEl) {
        hideModalIconClick();
        currentFormReset;
    }

    if (event.target === popupEl) {
        hidePoupClick();
    }
})


//fuction 

function openModalIconClick() {
    modalEl.classList.add(`modal--visible`);
    body.classList.add(`no-scroll`);

    previousActiveElement = document.activeElement;

    setTimeout(() => {
        btnClose.focus();
    }, 100);

    document.addEventListener('keydown', onPressEscKeydown);
}

function hideModalIconClick() {
    modalEl.classList.remove(`modal--visible`);

    body.classList.remove('no-scroll');

    previousActiveElement.focus();

    document.removeEventListener('keydown', onPressEscKeydown);
}




function successSentForm() {
    popupEl.classList.add('popup__visible');

    setTimeout(() => {
        btnClosePoup.focus();
    }, 100);

    document.addEventListener('keydown', onPressEscKeydown);

};


function hidePoupClick() {
    modalEl.classList.remove(`modal--visible`);
    body.classList.remove('no-scroll');
    popupEl.classList.remove('popup__visible');

    document.removeEventListener('keydown', onPressEscKeydown);

}

function onPressEscKeydown(el) {
    if (el.code === `Escape`) {
        hideModalIconClick();
        hidePoupClick();
        currentFormReset;

    }
}



