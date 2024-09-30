export default function decorate(block) {
  const leaderCards = [...block.children].map((item) => {
    const imgSrc = item.querySelector('img').src;
    const imgAlt = item.querySelector('img').alt;
    const nameTitle = item.children[1].textContent.trim();
    const articleLink = item.querySelector('a').href;
    const articleText = item.querySelector('a').textContent.trim();

    return `
      <div class="leader-card">
        <img src="${imgSrc}" alt="${imgAlt}">
        <div class="leader-info">
          <h3>${nameTitle}</h3>
          <p><a href="${articleLink}">${articleText}</a></p>
        </div>
      </div>
    `;
  });

  block.innerHTML = `
    <div class="leader-cards">
      ${leaderCards.join('')}
    </div>
  `;
}
