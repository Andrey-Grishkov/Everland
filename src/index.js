import './pages/index.scss';
import {sliderInfiniteArrowLeft, sliderInfiniteArrowRight} from './scripts/constants.js';
import {moveLeft, moveRight} from './scripts/infiniteSlyder.js';
import { initAccordions } from './scripts/accordion.js';
initAccordions();

console.log('Hello, World!');

sliderInfiniteArrowLeft.addEventListener('click', () =>{
  moveLeft();
});
sliderInfiniteArrowRight.addEventListener('click', () => {
  moveRight();
});