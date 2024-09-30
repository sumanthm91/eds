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
}
