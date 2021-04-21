
const successSentForm = function () {
    popupEl.classList.add('popup__visible');

    setTimeout(() => {
        btnClose.focus();
    }, 100);
};


const formSend = (form, successModal) => {
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                successModal();
            }
        }
    }
    xhr.open('POST', '../resources/mail.php', true);
    xhr.send(formData);

    form.reset();
}





form.addEventListener('submit', event => {
    event.preventDefault();
    formSend(form, successSentForm);
})


