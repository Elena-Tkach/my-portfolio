'use strict';

const body = document.body;


@@include('_inputmask.min.js');
@@include('_vanilla-tilt.min.js');
@@include('_simpleParallax.min.js');

@@include('_scrollLine.js');
@@include('_swiper.js');
@@include('_burger.js');
@@include('_addedElem.js');
@@include('_parallax.js');
@@include('_modal-icon.js');
@@include('_submitForm.js');




//маска телефона 
const selector = document.querySelectorAll(`input[type="tel"]`);
const im = new Inputmask(`+7 (999) 999-99-99`);
im.mask(selector);

//генерит год в футере 
const year = new Date().getFullYear();
document.querySelector('.year').textContent = year;




