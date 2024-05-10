let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
  }else{
    document.querySelector('#scroll-top').classList.remove('active');
  }

}

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut();

// price section 
const linkElement1 = document.querySelector('#pr1');
const linkElement2 = document.querySelector('#pr2');
const linkElement3 = document.querySelector('#pr3');
const linkElement4 = document.querySelector('#pr4');
const linkElement5 = document.querySelector('#pr5');
const linkElement6 = document.querySelector('#pr6');
const linkre = document.querySelector('#re');


let currentValue = 0;

const outputprice = document.getElementById('outputprice');

linkElement1.addEventListener('click', function(event) {
  event.preventDefault();
  currentValue = currentValue + 15;
  outputprice.textContent = currentValue + " SR";
});
linkElement2.addEventListener('click', function(event) {
  event.preventDefault();
  currentValue = currentValue + 35;
  outputprice.textContent = currentValue + " SR";
});
linkElement3.addEventListener('click', function(event) {
  event.preventDefault();
  currentValue = currentValue + 25;
  outputprice.textContent = currentValue + " SR";
});
linkElement4.addEventListener('click', function(event) {
  event.preventDefault();
  currentValue = currentValue + 5;
  outputprice.textContent = currentValue + " SR";
});
linkElement5.addEventListener('click', function(event) {
  event.preventDefault();
  currentValue = currentValue + 20;
  outputprice.textContent = currentValue + " SR";
});
linkElement6.addEventListener('click', function(event) {
  event.preventDefault();
  currentValue = currentValue + 10;
  outputprice.textContent = currentValue + " SR";
});
linkre.addEventListener('click', function(event) {
  event.preventDefault();
  currentValue = 0;
  outputprice.textContent = currentValue + " SR";
});

outputprice.textContent =  "Total price: " + currentValue + " SR";