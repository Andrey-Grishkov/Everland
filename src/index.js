import './pages/index.scss';
import {sliderCardsInfinite, projectsContainer, contentContainer, sliderInfiniteArrowLeft, sliderInfiniteArrowRight} from './utils/constants.js';
import {moveLeft, moveRight, getLastSlide, moveLastSlide, getFirstSlide} from './components/infiniteSlyder.js';

console.log('Hello, World!');

sliderInfiniteArrowLeft.addEventListener('click', () =>{
  moveLeft();
  /* sliderCardsInfinite.forEach((item) => {
    item.style.order++;
  }); */
});
sliderInfiniteArrowRight.addEventListener('click', () => {
  moveRight();
  /* sliderCardsInfinite.forEach((item) => {
    item.style.order--;
  }); */
});

/* getFirstSlide(); */




/* for (let i = 0; i < sliderCardsInfinite.length; i++) {
  sliderCardsInfinite[i].style.order = i;
}
getLastSlide();
moveLastSlide();
moveRight(); */

// Эта часть отвечает за то, чтобы слайдер постоянно определеял свою ширину через JS
setInterval(() => {
  sliderCardsInfinite.forEach((item) => {
    /* if (item.style.order > 5) {
      item.style.order = -1;
    }
    if (item.style.order < -1) {
      item.style.order = 5;
    } */
    if (contentContainer.offsetWidth >= 768) {
      item.style.minWidth = `${projectsContainer.offsetWidth-60}px`;
    } else {
      item.style.minWidth = `${projectsContainer.offsetWidth-48}px`;
    }
  });
}, 0);