'use strict';
let homeBottom = document.querySelectorAll('.home__circle');
let homeTop = document.querySelectorAll('.home__content');

console.log(homeBottom);
console.log(homeTop);

homeTop[0].style.display = 'flex'; 

for (let i = 0; i < homeBottom.length; i++) {
    homeBottom[i].addEventListener( 'click', function () {
        showCurrentContent(i);
    } )
}

function showCurrentContent(ind) {
    for (let b = 0; b < homeTop.length; b++){
        if (b === ind) {
            homeTop[b].style.display = 'flex';
        } else {
            homeTop[b].style.display = 'none';
        }
    }
}


const videoBtn = document.querySelector('.video__button');
const video = document.querySelector('.video__movie');

videoBtn.addEventListener('click', function () {
    video.play();
    console.log('playing');
    videoBtn.style.display = 'none'
})

let currentSlideState = 0;

const rightArrow = document.querySelector ('.testimonial__right-arrow');
const leftArrow = document.querySelector('.testimonial__left-arrow');
const sliderContainer = document.querySelector('.testimonial__people');
rightArrow.addEventListener('click', changeSliderToRight)
leftArrow.addEventListener('click', changeSliderToLeft);

function changeSliderToRight() {
    if (currentSlideState > - 400){
    currentSlideState = currentSlideState - 200;
    sliderContainer.style.marginLeft = `${currentSlideState}px`;
    }
}

function changeSliderToLeft() {
    if (currentSlideState < 400 ){
    currentSlideState = currentSlideState + 200;
    sliderContainer.style.marginLeft = `${currentSlideState}px`;
    }
}

