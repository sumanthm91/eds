export default function decorate(block) {
  // Extract data from existing block HTML
  const pictureSources = [...block.querySelectorAll('picture source')];
  const imgSrc = block.querySelector('picture img').src;
  const headingText = block.querySelector('h2').textContent.trim();
  const strongText = block.querySelector('p strong').textContent.trim();
  const paragraphText = block.querySelector('p:nth-of-type(2)').textContent.trim();

  // Create new HTML structure
  block.innerHTML = `
    <div class="banner-content">
      <div class="banner-text">
        <h3>${strongText}</h3>
        <h1>${headingText}</h1>
        <p>${paragraphText}</p>
      </div>
    </div>
  `;

  // Set the background image dynamically
  block.style.backgroundImage = `url('${imgSrc}')`;
}
