import {sliderContainer, projectsContainer, sliderCardsInfinite, sliderInfiniteLastSlide} from "../utils/constants.js";
function moveLeft() {
  sliderContainer.scrollLeft += -projectsContainer.offsetWidth;
}

function moveRight() {
  sliderContainer.scrollLeft += projectsContainer.offsetWidth;
}

function getLastSlide() {
  sliderCardsInfinite[sliderCardsInfinite.length - 1].classList.add('card__last-slide');
}

/* function getFirstSlide() {
  sliderCardsInfinite[0].classList.add('card__first-slide');
}

function showSlide() {
  sliderCardsInfinite.forEach((item) => {
    if (item.classList.contains('card__first-slide')) {
      item.style.order = 1;
    }
  })
} */

function moveLastSlide() {
  sliderCardsInfinite.forEach((item) => {
    if (item.classList.contains('card__last-slide')) {
      item.style.order = -1;
    }
  })
}

export {moveLeft, moveRight, getLastSlide, moveLastSlide};