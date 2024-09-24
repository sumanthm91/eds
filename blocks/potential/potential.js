export default function decorate(block) {
  // Extract data from the existing block HTML
  const pictureSources = [...block.querySelectorAll('picture source')];
  const imgSrc = block.querySelector('picture img').src;
  const imgAlt = block.querySelector('picture img').alt;
  const heading = block.querySelector('h2').textContent;
  const paragraph = block.querySelector('p').textContent;
  const link = block.querySelector('a');
  const linkHref = link.href;
  const linkText = link.textContent;

  // Create new HTML structure
  block.innerHTML = `
    <div class="realise-potential-wrapper">
      <div class="image-section">
        <picture>
          ${pictureSources.map(source => source.outerHTML).join('')}
          <img src="${imgSrc}" alt="${imgAlt}">
        </picture>
      </div>
      <div class="text-section">
        <h2>${heading}</h2>
        <p>${paragraph}</p>
        <button onclick="location.href='${linkHref}'">${linkText}</button>
      </div>
    </div>
  `;

  // Add scroll event listener to trigger animations
  window.addEventListener('scroll', () => {
    const wrapper = document.querySelector('.realise-potential-wrapper');
    const imageSection = wrapper.querySelector('.image-section');
    const textSection = wrapper.querySelector('.text-section');
    const wrapperPosition = wrapper.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (wrapperPosition < screenPosition) {
      wrapper.classList.add('animate__animated', 'animate__fadeIn');
      imageSection.classList.add('animate__animated', 'animate__fadeInLeft');
      textSection.classList.add('animate__animated', 'animate__fadeInRight');
    }
  });
}
