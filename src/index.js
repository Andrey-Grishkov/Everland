import './pages/index.scss';
import {sliderCardsInfinite, projectsContainer, contentContainer, sliderInfiniteArrowLeft, sliderInfiniteArrowRight} from './utils/constants.js';
import {moveLeft, moveRight} from './components/infiniteSlyder.js';
import { initAccordions } from './scripts/accordion.js';
initAccordions();

console.log('Hello, World!');

sliderInfiniteArrowLeft.addEventListener('click', () =>{
  moveLeft();
});
sliderInfiniteArrowRight.addEventListener('click', () => {
  moveRight();
});

// Эта часть отвечает за то, чтобы слайдер постоянно определеял свою ширину через JS
setInterval(() => {
  sliderCardsInfinite.forEach((item) => {
    if (contentContainer.offsetWidth >= 768) {
      item.style.minWidth = `${projectsContainer.offsetWidth-60}px`;
    } else {
      item.style.minWidth = `${projectsContainer.offsetWidth-48}px`;
    }
  });
}, 0);