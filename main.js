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
    3) add a color to the boxs when the user holds down the mouse click while hovering over the boxs
    4) edit step 1 so that the size of the grid is taken from the inpute range slider
 END 

 git commit -m "added a color to the boxs when the user holds down the mouse click while hovering over the boxs"
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
// createGrid(64);

// 3) add a color to the boxs only if mouse is held down and hovering over the boxs at the same time
let box = document.querySelectorAll('.box');

box.forEach((box) => {
    box.addEventListener('mousedown', () => {
        mouseDown = true;
    });
    box.addEventListener('mouseup', () => {
        mouseDown = false;
    });
    box.addEventListener('mouseover', () => {
        if (mouseDown) {
            box.style.backgroundColor = 'black';
        }
    });
}
);

// 4) edit step 1 so that the size of the grid is taken from the inpute range slider

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

let slider = document.querySelector('#size');

slider.addEventListener('change', () => {
    let size = slider.value;
    createGrid(size);
});


