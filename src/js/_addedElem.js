
const columns = document.querySelectorAll(`.js-column`);
const imageEducations = document.querySelectorAll(`.js-img`);


columns.forEach((el) => {
    el.addEventListener('click', (e) => {
        onShowHideSkillsListClick(e)
    })
})


const onShowHideSkillsListClick = (e) => {
    let widthWindow = document.documentElement.clientWidth + 15;

    const self = e.currentTarget;
    const arrow = self.querySelector(`.js-arrow`);
    const columnsList = self.querySelector(`.js-column--list`);


    if (widthWindow <= 768) {
        const addClassOpen = self.classList.toggle(`open`);

        if (addClassOpen) {
            arrow.setAttribute(`aria-label`, `Свернуть список`);
            arrow.setAttribute('aria-expanded', true);
            columnsList.setAttribute('aria-hiden', false);
        }

        if (!addClassOpen) {
            arrow.setAttribute(`aria-label`, `Развернуть список`);
            arrow.setAttribute('aria-expanded', false);
            columnsList.setAttribute('aria-hiden', true);
        }
    }



}

imageEducations.forEach((el) => {
    el.addEventListener('click', (e) => {
        const imageLarge = el.classList.toggle(`image-large`);

        if (imageLarge) {
            el.setAttribute(`title`, `Кликните чтобы уменьшить`);
        }

        if (!imageLarge) {
            el.setAttribute(`title`, `Кликните чтобы увеличить`);
        }
    })
})



