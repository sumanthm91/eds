export default function decorate(block) {
  const leaders = [...block.querySelectorAll('.leader-data > div')];
  block.innerHTML = `
    <div class="leader-profile-wrapper">
      ${leaders.map(leader => {
        const imgSrc = leader.querySelector('img').src;
        const nameTitle = leader.children[1].textContent;
        const articleLink = leader.querySelector('a').textContent;
        const articleHref = leader.querySelector('a').href;
        return `
          <div class="leader-profile">
            <div class="leader-image">
              <img src="${imgSrc}" alt="Profile Image">
            </div>
            <div class="leader-info">
              <h3>${nameTitle}</h3>
              <p><a href="${articleHref}">${articleLink}</a></p>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;

  // Add scroll event listener to trigger animations
  window.addEventListener('scroll', () => {
    const wrapper = document.querySelector('.leader-profile-wrapper');
    const leaderProfiles = wrapper.querySelectorAll('.leader-profile');
    const wrapperPosition = wrapper.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (wrapperPosition < screenPosition) {
      wrapper.classList.add('animate__animated', 'animate__fadeIn');
      leaderProfiles.forEach((profile, index) => {
        profile.style.animationDelay = `${index * 0.2}s`; // Delay each profile animation
        profile.classList.add('animate__animated', 'animate__fadeInUp');
      });
    }
  });
}
