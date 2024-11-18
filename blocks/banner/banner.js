export default function decorate(block) {
  const imgElement = block.querySelector("img");
  const heading1 = block.querySelector("p > strong").textContent;
  const heading2 = block.querySelector("h2").textContent.trim();
  const paragraph = block.querySelector("p:not(:has(strong))").textContent;

  block.innerHTML = `
    <div class="banner-content">
      <div class="banner-text-content">
        <h3>${heading1}</h3>
        <h1>${heading2}</h1>
        <p>${paragraph}</p>
      </div>
    </div>
  `;

  // Set the background image
  const bannerElement = block.closest(".banner");
  if (imgElement && bannerElement) {
    bannerElement.style.backgroundImage = `url(${imgElement.src})`;
  }
}
