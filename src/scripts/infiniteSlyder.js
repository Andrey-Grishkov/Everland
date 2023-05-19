import {sliderContainer, sliderInfiniteArrowLeft, sliderInfiniteArrowRight} from "../scripts/constants.js";

let persent = 0;
let count = 0;

function disableOneButton() {
  if (count === 0) {
    sliderInfiniteArrowLeft.disabled = true;
    sliderInfiniteArrowLeft.classList.add('button_disabled');
  } else {
    sliderInfiniteArrowLeft.classList.remove('button_disabled');
  }
  if (count === 4) {
    sliderInfiniteArrowRight.disabled = true;
    sliderInfiniteArrowRight.classList.add('button_disabled');
  } else {
    sliderInfiniteArrowRight.classList.remove('button_disabled');
  }
}

function disableButton(boolean) {
  sliderInfiniteArrowLeft.disabled = boolean;
  sliderInfiniteArrowRight.disabled = boolean;
}

// Функция описывает сдвиг контейнера по процентам.
function moveSlides(ammount) {
  persent = persent + ammount;
  sliderContainer.style.translate = `${persent}%`;
}

function moveLeft() {
  count--;
  moveSlides(20);
  disableButton(true);
  setTimeout(() => {
    disableButton(false);
    disableOneButton();
  }, 500);
}

function moveRight() {
  count++
  moveSlides(-20);
  disableButton(true);
  setTimeout(() => {
    disableButton(false);
    disableOneButton();
  }, 500);
}

export {moveLeft, moveRight};