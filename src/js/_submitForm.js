

const formSend = (form, successModal) => {
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {

                setTimeout(() => {
                    successModal();
                }, 100);

            }
        }
    }
    xhr.open('POST', '../resources/mail.php', true);
    xhr.send(formData);

    form.reset();
}


form.forEach((el) => {
    el.addEventListener('submit', event => {
        event.preventDefault();
        formSend(el, successSentForm);
    })
})


// formContacts.addEventListener('submit', event => {
//     event.preventDefault();
//     formSend(formContacts, successSentFormContacts);
// })

