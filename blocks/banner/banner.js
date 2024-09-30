export default function decorate(block) {
  const pictureSources = [...block.querySelectorAll('picture source')];
  const imgSrc = block.querySelector('picture img').src;
  const imgAlt = block.querySelector('picture img').alt;
  const headingStrong = block.querySelector('p strong').textContent;
  const heading = block.querySelector('h2').textContent;
  const paragraph = block.querySelectorAll('p')[1].textContent;

  block.innerHTML = `
    <div class="banner-content">
      <h2>${headingStrong}</h2>
      <h1>${heading}</h1>
      <p>${paragraph}</p>
    </div>
  `;

  // Apply the background image using imgSrc value
  block.style.backgroundImage = `url('${imgSrc}')`;
}
