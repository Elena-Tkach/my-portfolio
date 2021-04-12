'use strict';

const body = document.body;

@@include('_scrollLine.js');
@@include('_vanilla-tilt.min.js');
@@include('_simpleParallax.min.js');
@@include('_swiper.js');
@@include('_burger.js');
@@include('_addedElem.js');
@@include('_parallax.js');
@@include('_modal-icon.js');

//генерит год в футере 
const year = new Date().getFullYear();
document.querySelector('.year').textContent = year;




