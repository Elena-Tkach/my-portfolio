
const columns = document.querySelectorAll(`.js-column`);


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