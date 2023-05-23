import './pages/index.scss';
import { burgerPopupArrows, burgerMenuIcon, burgerPopup, burgerMenu } from './scripts/constants.js';
import { Slider, InfiniteSlider } from './scripts/slider.js';
import { initAccordions } from './scripts/accordion.js';
import initAnimation from './scripts/animation.js';
import initDonations from './scripts/donations.js';
import {openBurgerAccordion, closeBurgerAccordion, checkOpenedAccodionBurger} from "./scripts/burger-menu.js";

initDonations();
initAccordions();
initAnimation();

console.log('Hello, World!');

const sliders = Array.from(document.querySelectorAll(".slider"));

sliders.forEach((el) => {
  let slider;
  const sliderParams = {
    sliderContainer: el.querySelector(".slider__container"),
    controlContainer: el.querySelector(".slider__actions"),
    labelContainer: el.querySelector(".slider__label"),
  };
  if (el.classList.contains("slider_infinite")) {
    slider = new InfiniteSlider(sliderParams);
  } else {
    slider = new Slider(sliderParams);
  }
  slider.initiate();
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

burgerMenu.addEventListener('mouseover', () => {
  burgerPopup.classList.add('burger-popup_opened');
  burgerMenuIcon.classList.add('header__menu-image_active');
});

burgerMenu.addEventListener('click', () => {
  burgerPopup.classList.toggle('burger-popup_opened');
  burgerMenuIcon.classList.toggle('header__menu-image_active');
})
