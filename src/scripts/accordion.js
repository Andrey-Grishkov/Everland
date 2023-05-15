function checkOpenedAccordion(accordion) {
  const accordionContainer = accordion.closest('.accordion-container');
  if (accordionContainer.querySelectorAll('.accordion_state_open').length !== 0) {
    const openedAccordion = accordionContainer.querySelector('.accordion_state_open');
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
  if (accordion.classList.contains('accordion_state_close')) {
    checkOpenedAccordion(accordion);
    openAccordion(accordion)
  } else {
    closeAccordion(accordion);
  }
}

export function initAccordions() {
  const accordionButtons = document.querySelectorAll('.accordion__button');
  accordionButtons.forEach((button) => {
    button.addEventListener('click', handleAccordionClick);
  });
}
