import {sliderContainer, sliderInfiniteArrowLeft, sliderInfiniteArrowRight} from "../scripts/constants.js";

function disableOneButton(leftArrow, rightArrow, count) {
  if (count === 0) {
    leftArrow.disabled = true;
    leftArrow.classList.add('button_disabled');
  } else {
    leftArrow.classList.remove('button_disabled');
  }
  if (count === 5) {
    rightArrow.disabled = true;
    rightArrow.classList.add('button_disabled');
  } else {
    rightArrow.classList.remove('button_disabled');
  }
}

function disableButton(leftArrow, rightArrow, boolean) {
  leftArrow.disabled = boolean;
  rightArrow.disabled = boolean;
}

// Функция описывает сдвиг контейнера по процентам.
function moveSlides(element, persent) {
  element.style.translate = `${persent}%`;
}

function moveLeft(element, persent, count, leftArrow, rightArrow) {
  moveSlides(element, persent);
  disableButton(leftArrow, rightArrow, true);
  setTimeout(() => {
    disableButton(leftArrow, rightArrow, false);
    disableOneButton(leftArrow, rightArrow, count);
  }, 500);
}

function moveRight(element, persent, count, leftArrow, rightArrow) {
  moveSlides(element, persent);
  disableButton(leftArrow, rightArrow, true);
  setTimeout(() => {
    disableButton(leftArrow, rightArrow, false);
    disableOneButton(leftArrow, rightArrow, count);
  }, 500);
}

export {moveLeft, moveRight};