let currentMaxHeight = 380;

function openAccordion(accordion) {
  accordion.classList.remove('accordion_state_close');
  accordion.classList.add('accordion_state_open');
  const accordionText = accordion.querySelector('.accordion__text');
  const accordionContainer = accordion.closest('.accordion-container');
  currentMaxHeight = currentMaxHeight + accordionText.scrollHeight;
  accordionContainer.style.maxHeight = `${currentMaxHeight}px`
  accordionText.style.maxHeight = accordionText.scrollHeight + 'px';
}

function closeAccordion(accordion) {
  accordion.classList.remove('accordion_state_open');
  accordion.classList.add('accordion_state_close');
  const accordionText = accordion.querySelector('.accordion__text');
  const accordionContainer = accordion.closest('.accordion-container');
  currentMaxHeight = currentMaxHeight - accordionText.scrollHeight;
  accordionContainer.style.maxHeight = `${currentMaxHeight}px`;
  accordionText.style.maxHeight = 0;
}

function handleAccordionClick(evt) {
  const accordion = evt.target.closest('.accordion');
  if (accordion.classList.contains('accordion_state_close')) {
    openAccordion(accordion)
  } else {
    closeAccordion(accordion);
  }
  console.log(`currentMaxHeight = ${currentMaxHeight}`)
}

export function initAccordions() {
  const accordionButtons = document.querySelectorAll('.accordion__button');
  accordionButtons.forEach((button) => {
    button.addEventListener('click', handleAccordionClick);
  });
}
