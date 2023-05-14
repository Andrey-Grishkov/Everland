import {sliderContainer, projectsContainer} from "../utils/constants.js";
function moveLeft() {
  sliderContainer.scrollLeft += -projectsContainer.offsetWidth-60;
}

function moveRight() {
  sliderContainer.scrollLeft += projectsContainer.offsetWidth;
}

export {moveLeft, moveRight};