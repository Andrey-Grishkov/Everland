export default function initAnimation() {
  const animatedScrolls = Array.from(document.querySelectorAll('.animated-scroll'));
  animatedScrolls.forEach((el) => {
    el.addEventListener('click', processLinkClick);
  })
}

function processLinkClick(evt) {
  const targetBlock = document.getElementById(evt.target.dataset.targetBlock)

  if (targetBlock) {
    window.scrollBy({
      top: targetBlock.getBoundingClientRect().top,
      behavior: 'smooth'
    })
  }
}
