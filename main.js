document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, {
      threshold: 0.1
    });
  
    fadeElements.forEach(el => observer.observe(el));
  });
  let items = document.querySelectorAll('.slider .item');
  let next = document.getElementById('next');
  let prev = document.getElementById('prev');
  let projectBtn = document.getElementById('project-btn')
  const projectUrls = [
    'https://ezinwanwosu.github.io/web_Case3/home.html',
    'https://yoncesacrylics.co.uk',
    'https://ezinwanwosu.github.io/web-Case2/',
    'https://github.com/ezinwanwosu',
  ];
  let active = 3;
  function loadShow() {
    let stt = 0;
    const len = items.length;

    for (let i = 0; i < len; i++) {
        items[i].style.transition = '0.5s';
        items[i].style.transform = '';
        items[i].style.zIndex = '';
        items[i].style.filter = '';
        items[i].style.opacity = '';
    }

    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = `none`;
    items[active].style.opacity = 1;

    stt = 0;
    for (let i = 1; i <= 3; i++) {
        stt++;
        const index = (active + i) % len;
        items[index].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
        items[index].style.zIndex = -stt;
        items[index].style.filter = `blur(5px)`;
        items[index].style.opacity = stt > 2 ? 0 : 0.6;
    }
    stt = 0;
    for (let i = 1; i <= 3; i++) {
        stt++;
        const index = (active - i + len) % len; // wrap around
        items[index].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
        items[index].style.zIndex = -stt;
        items[index].style.filter = `blur(5px)`;
        items[index].style.opacity = stt > 2 ? 0 : 0.6;
    }
}

  loadShow();
  next.onclick = function () {
    active = (active + 1) % items.length;
    loadShow();
};

prev.onclick = function () {
    active = (active - 1 + items.length) % items.length;
    loadShow();
};
projectBtn.addEventListener('click', () => {
    const url = projectUrls[active];
    if (url) {
      window.open(url, '_blank'); // opens in a new tab
    }
  });
  