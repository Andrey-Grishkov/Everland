import './pages/index.scss';
import {sliderCardsInfinite, projectsContainer, contentContainer, sliderInfiniteArrowLeft, sliderInfiniteArrowRight} from './utils/constants.js';
import {moveLeft, moveRight} from './components/infiniteSlyder.js';

console.log('Hello, World!');

sliderCardsInfinite.forEach((item) => {
  if (contentContainer.offsetWidth >= 768) {
    item.style.minWidth = `${projectsContainer.offsetWidth-60}px`;
  } else {
    item.style.minWidth = `${projectsContainer.offsetWidth-48}px`;
  }
});

sliderInfiniteArrowLeft.addEventListener('click', () =>{
  moveLeft();
});
sliderInfiniteArrowRight.addEventListener('click', () => {
  moveRight();
});