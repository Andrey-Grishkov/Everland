const projectsContainer = document.querySelector('.projects__container');
const sliderContainer = document.querySelector('.cards-container_type_projects');
const sliderInfiniteArrowLeft = document.querySelector('.projects__arrow_left');
const sliderInfiniteArrowRight = document.querySelector('.projects__arrow_right');
const visibleCardSlider = document.querySelector('.card_visible');
const firstSliderContainer = document.querySelector('.cards-container_type_description');
const firstSliderArrowLeft = document.querySelector('.description__slider-button_type_left');
const firstSliderArrowRight = document.querySelector('.description__slider-button_type_right');
const sliderCounter = document.querySelector('.description__span');
const burgerPopupArrows = document.querySelectorAll('.burger-popup__button');
const burgerMenu = document.querySelector('.header__menu');
const burgerMenuIcon = document.querySelector('.header__menu-image');
const burgerPopup = document.querySelector('.burger-popup');

export {projectsContainer, sliderContainer, sliderInfiniteArrowLeft, sliderInfiniteArrowRight, visibleCardSlider, firstSliderContainer, firstSliderArrowLeft, firstSliderArrowRight, sliderCounter, burgerPopupArrows, burgerMenu, burgerMenuIcon, burgerPopup};