'use strict';
let homeBottom = document.querySelectorAll('.home__circle');
let homeTop = document.querySelectorAll('.home__content');

console.log(homeBottom);
console.log(homeTop);

homeTop[0].style.display = 'block'; 

for (let i = 0; i < homeBottom.length; i++) {
    homeBottom[i].addEventListener( 'click', function () {
        showCurrentContent(i);
    } )
}

function showCurrentContent(ind) {
    for (let b = 0; b < homeTop.length; b++){
        if (b === ind) {
            homeTop[b].style.display = 'block';
        } else {
            homeTop[b].style.display = 'none';
        }
    }
}

// let up = document.querySelectorAll('.home__content');
// let bottom = document.querySelectorAll('.home__circle');
// up.addEventListener('click', invisible);
// function invisible() {
//     bottom.classList.toggle("shadow");
// }
// console.log(up);