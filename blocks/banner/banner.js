export default function decorate(block) {
  const pictureSources = [...block.querySelectorAll("picture source")];
  const imgSrc = block.querySelector("picture img").src;
  const imgAlt = block.querySelector("picture img").alt;
  const headingStrong = block.querySelector("p strong").textContent;
  const heading = block.querySelector("h2").textContent;
  const paragraph = block.querySelectorAll("p")[1].textContent;

  block.innerHTML = `
    <div class="banner-content">
      <h2>${headingStrong}</h2>
      <h1>${heading}</h1>
      <p>${paragraph}</p>
    </div>
  `;

  // Apply the background image using imgSrc value
  block.style.backgroundImage = `url('${imgSrc}')`;

  // Add scroll event listener to trigger animations
  window.addEventListener('scroll', () => {
    const banner = document.querySelector('.banner');
    const bannerContent = banner.querySelectorAll('h2, h1, p');
    const bannerPosition = banner.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (bannerPosition < screenPosition) {
      banner.classList.add('animate__animated', 'animate__fadeIn');
      bannerContent.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.1}s`;
        element.classList.add('animate__animated', 'animate__fadeInUp');
      });
    }
  });
}
