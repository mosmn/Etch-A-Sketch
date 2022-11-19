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
    3) change the size of the boxes when the input range changes
    4) change the color of the boxes when the user holds down the mouse click and hover over the boxes at the same time
    5) add a function to the eraser button to erase the color of the boxes
    6) add a function to the reset button to reset the color of the boxes to white and size of the grid to 32
 END 

 git commit -m " done with the input range its fully functional"
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

// 2) create a grid of boxes with the size of the input range slider value
let sketchpad = document.querySelector('.sketchpad');
let size = slider.value;

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
        box.style.width = `${600/size}px`;
        box.style.height = `${600/size}px`;
    }
    );
}
console.log(size);
console.log(createGrid(size));

// 3) change the size of the boxes when the input range changes
function changeGridSize() {
    slider.addEventListener('input', () => {
        size = slider.value;
        console.log(size);
        let box = document.querySelectorAll('.box');
        box.forEach((box) => {
            box.remove();
        });
        createGrid(size);
        changeColor();
    });
    
}
changeGridSize();

// 4) change the color of the boxes when the user holds down the mouse click and hover over the boxes at the same time
const colorPicker = document.querySelector('#color');
let mouseDown = false;

function changeColor() {
    colorPicker.addEventListener('input', () => {
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
            box.style.backgroundColor = colorPicker.value;
        }
    });
});
});
}
changeColor();

const colorPickerLabel = document.querySelector('.color-picker');

div = document.createElement('div');
div.classList.add('color-picker-label');
div.textContent = 'Pick a color to start';
colorPickerLabel.appendChild(div);

colorPicker.addEventListener('input', () => {
    div.textContent = '';
});

// 5) add a function to the eraser button to erase the color of the boxes
const eraser = document.querySelector('#eraser');

eraser.addEventListener('click', () => {
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
            box.style.backgroundColor = 'white';
        }
    });
}
);
});

// 6) add a function to the reset button to reset the color of the boxes to white
const reset = document.querySelector('#clear');

reset.addEventListener('click', () => {
    let box = document.querySelectorAll('.box');
    box.forEach((box) => {
        box.style.backgroundColor = 'white';
    });
});




