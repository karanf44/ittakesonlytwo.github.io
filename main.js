// Get DOM Elements
const modal = document.querySelector('#my-modal');
const modalBtn1 = document.querySelector('#btn1');
const modalBtn2 = document.querySelector('#btn2');
const modalBtn3 = document.querySelector('#btn3');
const closeBtn = document.querySelector('.close');
const modalBody1 = document.querySelector('.modal-body1');
const modalBody2 = document.querySelector('.modal-body2');
const modalBody3 = document.querySelector('.modal-body3');
const mBtn1 = document.querySelector('.go1');
const mBtn2 = document.querySelector('.go2');
const mBtn3 = document.querySelector('.go3');

// Events
modalBtn1.addEventListener('click', openModal1);
modalBtn2.addEventListener('click', openModal2);
modalBtn3.addEventListener('click', openModal3);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);
mBtn1.addEventListener('click', closeModal);
mBtn2.addEventListener('click', closeModal);
mBtn3.addEventListener('click', closeModal);

// Open
function openModal1() {
  modal.style.display = 'block';
  modalBody1.style.display = 'inline-block';
}
function openModal2() {
  modal.style.display = 'block';
  modalBody2.style.display = 'inline-block';
}
function openModal3() {
  modal.style.display = 'block';
  modalBody3.style.display = 'inline-block';
}

// Close
function closeModal() {
  modal.style.display = 'none';
  modalBody1.style.display = 'none';
    modalBody2.style.display = 'none';
    modalBody3.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
    modalBody1.style.display = 'none';
    modalBody2.style.display = 'none';
    modalBody3.style.display = 'none';
  }
}

// anime.timeline({loop: true})
//   .add({
//     targets: '.ml8 .circle-white',
//     scale: [0, 3],
//     opacity: [1, 0],
//     easing: "easeInOutExpo",
//     rotateZ: 360,
//     duration: 1100
//   }).add({
//     targets: '.ml8 .circle-container',
//     scale: [0, 1],
//     duration: 1100,
//     easing: "easeInOutExpo",
//     offset: '-=1000'
//   }).add({
//     targets: '.ml8 .circle-dark',
//     scale: [0, 1],
//     duration: 1100,
//     easing: "easeOutExpo",
//     offset: '-=600'
//   }).add({
//     targets: '.ml8 .letters-left',
//     scale: [0, 1],
//     duration: 1200,
//     offset: '-=550'
//   }).add({
//     targets: '.ml8 .bang',
//     scale: [0, 1],
//     rotateZ: [45, 15],
//     duration: 1200,
//     offset: '-=1000'
//   }).add({
//     targets: '.ml8',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1400
//   });

// anime({
//   targets: '.ml8 .circle-dark-dashed',
//   rotateZ: 360,
//   duration: 8000,
//   easing: "linear",
//   loop: true
// });

