import {burgerPopupArrows} from "./constants.js";

function openBurgerAccordion(evt) {
  const burgerText = evt.closest('.accordion').querySelector('.burger-popup__text');
  burgerText.style.maxHeight = burgerText.scrollHeight + 'px';
  burgerText.style.paddingTop = 24 + 'px';
}

function closeBurgerAccordion(evt) {
  const burgerText = evt.closest('.accordion').querySelector('.burger-popup__text');
  burgerText.style.maxHeight = 0;
  burgerText.style.paddingTop = 0;
}

function checkOpenedAccodionBurger() {
  burgerPopupArrows.forEach((arrow) => {
    if (arrow.classList.contains('burger-popup__button_direction_up')) {
      closeBurgerAccordion(arrow);
      arrow.classList.remove('burger-popup__button_direction_up');
    }
  })
}

export {openBurgerAccordion, closeBurgerAccordion, checkOpenedAccodionBurger};