/*
PROJECT: create a sketchpad with controls like grid size, color, eraser and a reset

 IOFC:
      Input :
      1) click(hold down)
      2) grid size


      Output:
      1) box color


      Formula: n/a


      Condition:
      1) keep adding color to boxes while user is holding down the mouse click


 Algorithm:
 
 BEGIN 
    1) show the value of the input range above the slider thumb
    2) create a grid of boxes with the size of the input range
    3) add a color to the box when the user holds down the mouse click and hovers over the boxs
 END 

 git commit -m "done styling the con
*/ 

// 1) show the value of the input range above the slider thumb
const slider = document.querySelector('#size');
const output = document.querySelector('#value');

slider.addEventListener('input', () => {
    setBubble(slider, output);
});

function setBubble(slider, output) {
    const val = slider.value;
    const min = slider.min ? slider.min : 2;
    const max = slider.max ? slider.max : 64;
    const newVal = Number(((val - min) * 100) / (max - min));
    output.innerHTML = val;

    output.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
}


// let box = document.querySelectorAll('.box');

// box.forEach((box) => {
//     box.addEventListener('mousedown', () => {
//         mouseDown = true;
//     });
//     box.addEventListener('mouseup', () => {
//         mouseDown = false;
//     });
//     box.addEventListener('mouseover', () => {
//         if (mouseDown) {
//             box.style.backgroundColor = 'black';
//         }
//     });
// }
// );

// 4) edit step 1 so that the size of the grid is taken from the inpute range slider

// let sketchpad = document.querySelector('.sketchpad');

// function createGrid(size) {
//     for (let i = 0; i < size; i++) {
//         for (let j = 0; j < size; j++) {
//             let box = document.createElement('div');
//             box.classList.add('box');
//             sketchpad.appendChild(box);
//         }
//     }
//     let box = document.querySelectorAll('.box');
//     box.forEach((box) => {
//         box.style.width = `${500/size}px`;
//         box.style.height = `${500/size}px`;
//     }
//     );
// }

// let slider = document.querySelector('#size');

// slider.addEventListener('change', () => {
//     let size = slider.value;
//     createGrid(size);
// });

// console.log(slider.value);


