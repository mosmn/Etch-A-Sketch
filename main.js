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
    1) create a 16 x 16 grid by looping through 16 rows and 16 columns and adding a div to the sketchpad
    2) make the code in step 1 dynamic so that the user can choose the size of the grid
 END 

*/ 

// 1) create a 16 x 16 grid by looping through 16 rows and 16 columns and adding a div to the sketchpad

// let sketchpad = document.querySelector('.sketchpad');

// for (let i = 0; i < 16; i++) {
//     for (let j = 0; j < 16; j++) {
//         let box = document.createElement('div');
//         box.classList.add('box');
//         sketchpad.appendChild(box);
//     }
// }
// // the width and height of the sketchpad is 500px therefore the width and height of each box is 500/16 = 31.25px
// let box = document.querySelectorAll('.box');
// box.forEach((box) => {
//     box.style.width = '31.25px';
//     box.style.height = '31.25px';
// }
// );

// 2) make the code in step 1 dynamic so that the user can choose the size of the grid

let sketchpad = document.querySelector('.sketchpad');

function createGrid(size) {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let box = document.createElement('div');
            box.classList.add('box');
            sketchpad.appendChild(box);
        }
    }
    let box = document.querySelectorAll('.box');
    box.forEach((box) => {
        box.style.width = `${500/size}px`;
        box.style.height = `${500/size}px`;
    }
    );
}
let size = prompt('Enter the size of the grid');
createGrid(size);