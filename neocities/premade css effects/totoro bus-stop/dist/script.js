var jumpBtn = document.querySelector('#jump-btn');
var totoro = document.querySelector('.bus-stop');
var cloud = document.querySelector('.cloud');
var raindrops = 50;

jumpBtn.addEventListener('click', function(e){
 totoro.classList.add('jump');
 
 for(var i = 0; i < raindrops; i++) {
  addDrop(Math.random() * 100, Math.random(), i > (raindrops - 10))
 }
 
 setTimeout(function(){
  totoro.classList.remove('jump');
 }, 3000);
 setTimeout(function(){
  clearCloud();
 }, 5000);
});

function addDrop(x, delay, slowEnd) {
 var rain = document.createElement('div');
 var newDelay = slowEnd ? delay + 0.5 : delay;
 rain.classList.add('rain');
 rain.style.left = x + '%';
 rain.style.setProperty('--delay', (newDelay + 2.25) + "s");
 cloud.appendChild(rain);
}

function clearCloud() {
 cloud.innerHTML = "";
}

jumpBtn.click();