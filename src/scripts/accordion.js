function checkOpenedAccordion(accordion) {
  const accordionContainer = accordion.closest('.accordion-container');
  if (accordionContainer.querySelectorAll('.accordion_state_open').length !== 0) {
    const openedAccordion = accordionContainer.querySelector('.accordion_state_open');
    const openedAccordionButton = openedAccordion.querySelector('.button_type_accordion');
    toggleAccordionButtonState(openedAccordionButton);
    closeAccordion(openedAccordion);
  }
}

function openAccordion(accordion) {
  accordion.classList.remove('accordion_state_close');
  accordion.classList.add('accordion_state_open');
  const accordionText = accordion.querySelector('.accordion__text');
  accordionText.style.maxHeight = accordionText.scrollHeight + 'px';
}

function closeAccordion(accordion) {
  accordion.classList.remove('accordion_state_open');
  accordion.classList.add('accordion_state_close');
  const accordionText = accordion.querySelector('.accordion__text');
  accordionText.style.maxHeight = 0;
}

function handleAccordionClick(evt) {
  const accordion = evt.target.closest('.accordion');
  toggleAccordionButtonState(evt.target);
  if (accordion.classList.contains('accordion_state_close')) {
    checkOpenedAccordion(accordion);
    openAccordion(accordion)
  } else {
    closeAccordion(accordion);
  }
}

function toggleAccordionButtonState(button) {
  button.classList.toggle('button_pressed');
}

export function initAccordions() {
  const accordionButtons = document.querySelectorAll('.button_type_accordion');
  accordionButtons.forEach((button) => {
    button.addEventListener('click', handleAccordionClick);
  });
}
