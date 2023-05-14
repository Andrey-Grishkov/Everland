import {sliderContainer, projectsContainer} from "../utils/constants.js";
function moveLeft() {
  sliderContainer.scrollLeft += -projectsContainer.offsetWidth;
}

function moveRight() {
  sliderContainer.scrollLeft += projectsContainer.offsetWidth;
}

export {moveLeft, moveRight};