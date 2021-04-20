
const menuEl = document.querySelector(`.js-menu`);
const btnBurgerEl = document.querySelector(`.js-burger`);


btnBurgerEl.addEventListener('click', (e) => {
    onShowHideMenuClick();
})

const onShowHideMenuClick = () => {
    const addClassActive = menuEl.classList.toggle(`open`);
    body.classList.toggle(`no-scroll`);

    if (addClassActive) {
        btnBurgerEl.setAttribute(`aria-label`, `Закрыть навигационное меню`);
    }

    if (!addClassActive) {
        btnBurgerEl.setAttribute(`aria-label`, `Открыть навигационное меню`);
    }

}


menuEl.addEventListener(`keydown`, (e) => {
    if (e.code === `Escape`) {
        onShowHideMenuClick();

    }
});
