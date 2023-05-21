import './pages/index.scss';
import {sliderInfiniteArrowLeft, sliderInfiniteArrowRight, sliderContainer, firstSliderArrowLeft, firstSliderArrowRight, firstSliderContainer, burgerPopupArrows, burgerMenuIcon, burgerPopup, burgerMenu} from './scripts/constants.js';
import {moveLeft, moveRight, countSlides} from './scripts/slider.js';
import { initAccordions } from './scripts/accordion.js';
import initAnimation from './scripts/animation.js';
import initDonatios from './scripts/donations.js';
import {openBurgerAccordion, closeBurgerAccordion, checkOpenedAccodionBurger} from "./scripts/burger-menu.js";
let countFirst = 0;
let countSecond = 0;
let persentFirst = 0;
let persentSecond = 0;

initDonatios();
initAccordions();
initAnimation();

console.log('Hello, World!');

sliderInfiniteArrowLeft.addEventListener('click', () => {
  persentSecond = persentSecond + 100/6;
  countSecond--;
  moveLeft(sliderContainer, persentSecond, countSecond, sliderInfiniteArrowLeft, sliderInfiniteArrowRight);
});
sliderInfiniteArrowRight.addEventListener('click', () => {
  persentSecond = persentSecond - 100/6;
  countSecond++;
  moveRight(sliderContainer, persentSecond, countSecond, sliderInfiniteArrowLeft, sliderInfiniteArrowRight);
});

firstSliderArrowLeft.addEventListener('click', () => {
  persentFirst = persentFirst + 100;
  countFirst--;
  moveLeft(firstSliderContainer, persentFirst, countFirst, firstSliderArrowLeft, firstSliderArrowRight);
  countSlides(countFirst);
});

firstSliderArrowRight.addEventListener('click', () => {
  persentFirst = persentFirst - 100;
  countFirst++;
  moveRight(firstSliderContainer, persentFirst, countFirst, firstSliderArrowLeft, firstSliderArrowRight);
  countSlides(countFirst);
});

burgerPopupArrows.forEach((arrow) => {
  arrow.addEventListener('click', (evt) => {
    checkOpenedAccodionBurger();
    evt.target.classList.toggle('burger-popup__button_direction_up');
    if (evt.target.classList.contains('burger-popup__button_direction_up')) {
      openBurgerAccordion(evt.target);
    } else {
      closeBurgerAccordion(evt.target);
    }
  });
});

burgerMenu.addEventListener('click', () => {
  burgerPopup.classList.toggle('burger-popup_opened');
  burgerMenuIcon.classList.toggle('header__menu-image_active');
})