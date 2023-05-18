import {sliderContainer, projectsContainer, sliderInfiniteArrowLeft, sliderInfiniteArrowRight} from "../utils/constants.js";
function moveLeft() {
  sliderContainer.scrollLeft += -projectsContainer.offsetWidth;
  sliderInfiniteArrowLeft.disabled = true;
  sliderInfiniteArrowRight.disabled = true;
  setTimeout(() => {
    sliderInfiniteArrowLeft.disabled = false;
    sliderInfiniteArrowRight.disabled = false;
  }, 900);
}

function moveRight() {
  sliderContainer.scrollLeft += projectsContainer.offsetWidth;
  sliderInfiniteArrowLeft.disabled = true;
  sliderInfiniteArrowRight.disabled = true;
  setTimeout(() => {
    sliderInfiniteArrowLeft.disabled = false;
    sliderInfiniteArrowRight.disabled = false;
  }, 900);
}

export {moveLeft, moveRight};