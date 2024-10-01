export default function decorate(block) {
  const leaders = [...block.children];
  block.innerHTML = leaders.map(leader => {
    const imgSrc = leader.querySelector('picture img').src;
    const imgAlt = leader.querySelector('picture img').alt;
    const name = leader.children[1].textContent;
    const title = leader.children[2].querySelector('a').textContent;
    const linkHref = leader.children[2].querySelector('a').href;

    return `
      <div class="leader-card">
        <img src="${imgSrc}" alt="${imgAlt}" />
        <div class="leader-info">
          <h3>${name}</h3>
          <p><a href="${linkHref}">${title}</a></p>
        </div>
      </div>
    `;
  }).join('');

  // Add scroll event listener to trigger animations
  window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.leader-card');
    const screenPosition = window.innerHeight / 1.3;

    cards.forEach((card, index) => {
      const cardPosition = card.getBoundingClientRect().top;

      if (cardPosition < screenPosition) {
        card.style.animationDelay = `${index * 0.1}s`; // Delay each card animation
        card.classList.add('animate__animated', 'animate__fadeInUp');
      }
    });
  });
}
