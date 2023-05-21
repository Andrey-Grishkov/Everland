import './pages/index.scss';
import {sliderInfiniteArrowLeft, sliderInfiniteArrowRight, sliderContainer, firstSliderArrowLeft, firstSliderArrowRight, firstSliderContainer} from './scripts/constants.js';
import {moveLeft, moveRight, countSlides} from './scripts/slider.js';
import { initAccordions } from './scripts/accordion.js';
import initDonatios from './scripts/donations.js';
let countFirst = 0;
let countSecond = 0;
let persentFirst = 0;
let persentSecond = 0;

initDonatios();
initAccordions();

console.log('Hello, World!');

sliderInfiniteArrowLeft.addEventListener('click', () => {
  persentSecond = persentSecond + 100/6;
  countSecond--;
  moveLeft(sliderContainer, persentSecond, countSecond, sliderInfiniteArrowLeft, sliderInfiniteArrowRight);
});
sliderInfiniteArrowRight.addEventListener('click', () => {
  persentSecond = persentSecond - 100/6;
  countSecond++;
  moveRight(sliderContainer, persentSecond, countSecond, sliderInfiniteArrowLeft, sliderInfiniteArrowRight);
});

firstSliderArrowLeft.addEventListener('click', () => {
  persentFirst = persentFirst + 100;
  countFirst--;
  moveLeft(firstSliderContainer, persentFirst, countFirst, firstSliderArrowLeft, firstSliderArrowRight);
  countSlides(countFirst);
});

firstSliderArrowRight.addEventListener('click', () => {
  persentFirst = persentFirst - 100;
  countFirst++;
  moveRight(firstSliderContainer, persentFirst, countFirst, firstSliderArrowLeft, firstSliderArrowRight);
  countSlides(countFirst);
})