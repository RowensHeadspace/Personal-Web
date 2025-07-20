const range = document.querySelector('.range');
const flame = document.querySelector('.flame');
const glow = document.querySelector('.glow');

range.addEventListener('input', (event) => {
  flame.style.setProperty(
    'transform',
    `scale(${event.target.value})
    translate(-13px, -15px)`,
  );
  
  glow.style.setProperty(
    'opacity',
    event.target.value * 0.1,
  );
});