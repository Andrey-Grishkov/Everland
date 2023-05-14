import './pages/index.scss';
import { initAccordions } from './scripts/accordion.js';
const accContainer = document.querySelector('.accordion-container');
console.dir(accContainer.style)
initAccordions();
setTimeout(() => {
  const accordions = document.querySelectorAll('.accordion');
accordions.forEach((accordion) => {
  console.log(accordion.offsetLeft);
})
}, 3000);


console.log('Hello, World!');
