
const menuEl = document.querySelector(`.js-menu`);
const btnBurgerEl = document.querySelector(`.js-burger`);


btnBurgerEl.addEventListener('click', (e) => {
    onShowHideMenuClick();
})

const onShowHideMenuClick = () => {
    menuEl.classList.toggle(`open`);
    body.classList.toggle(`menu-open`);
}