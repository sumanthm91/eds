export default function decorate(block) {
  const picture = block.querySelector('picture');
  const imgSrc = picture.querySelector('img').src;
  const subtitle = block.querySelector('p strong').textContent;
  const title = block.querySelector('h2').innerHTML;
  const description = block.querySelectorAll('p')[1].textContent;

  block.innerHTML = `
    <div class="banner-wrapper" style="background-image: url('${imgSrc}')">
      <div class="banner-content">
        <p class="banner-subtitle">${subtitle}</p>
        <h2 class="banner-title">${title}</h2>
        <p class="banner-description">${description}</p>
      </div>
    </div>
  `;
}
