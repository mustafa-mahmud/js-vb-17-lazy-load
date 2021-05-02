'use strict';

const images = document.querySelectorAll('img[data-src]');

function loadImg(entries, observer) {
  const entry = entries[0];

  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.getAttribute('data-src');
  entry.target.classList.remove('lazy');

  // console.log(entry.target);
  observer.unobserve(entry.target);
}

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '-200px',
});

images.forEach((img) => {
  imgObserver.observe(img);
});
