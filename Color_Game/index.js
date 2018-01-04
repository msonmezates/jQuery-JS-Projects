let numSquares = 6; //initially there are 6 blocks
let colors = [];
let pickedColor;
let squares = document.querySelectorAll('.square');
let colorDisplay = document.getElementById('colorDisplay');
let messageDisplay = document.querySelector('#message');
let h1 = document.querySelector('h1');
let resetButton = document.getElementById('reset');
let modeButtons = document.querySelectorAll('.mode');

//run this function to set up mode button and squares listeners
init();

function init() {
  //mode buttons event listeners
  setUpModeButtons();
  //squares event listeners
  setUpSquares();
  reset();
}

function setUpModeButtons() {
  for (let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener('click',function(){
      modeButtons[0].classList.remove('selected');
      modeButtons[1].classList.remove('selected');
      this.classList.add('selected');
      this.textContent === 'Easy' ? numSquares = 3 : numSquares = 6;
      reset();
    });
  }
}

function setUpSquares() {
  for(let i=0; i<squares.length; i++) {
    //add click listeners to squares
    squares[i].addEventListener('click',()=>{
      //grab color of clicked square
      let clickedColor = squares[i].style.backgroundColor;
      if(clickedColor === pickedColor) {
        messageDisplay.textContent = 'Correct';
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
        resetButton.textContent = 'Play Again?'
      } else {
        squares[i].style.backgroundColor = '#232323';
        messageDisplay.textContent = 'Try Again!';
      }
    });
  }
}

function changeColors(color) {
  for(let square of squares) {
    square.style.backgroundColor = color;
  }
} 

function pickColor() {
  let random =  Math.floor(Math.random() * colors.length);
  return colors[random];  
}

function generateRandomColors(num) {
  //make an array
  const arr = [];
  //add num random colors to array
  for (let i = 0; i < num; i++) {
    //get random colors and push into array
    arr.push(randomColor());
  }
  //return that array
  return arr;
}

function randomColor() {
  //pick a red from 0 to 255
  let r = Math.floor(Math.random() * 256);
  //pick a green from 0 to 255
  let g = Math.floor(Math.random() * 256);
  //pick a blue from 0 to 255
  let b = Math.floor(Math.random() * 256);
  // we want to return random "rgb(r, g, b)" and 
  return "rgb(" + r + ', ' + g + ', ' + b + ")";
}


resetButton.addEventListener('click', function() {
  reset();
});

function reset() {
  messageDisplay.textContent = ''; 
  resetButton.textContent = 'New Colors'
  //generate all new colors
  colors = generateRandomColors(numSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change colorDisplay to matched picked color
  colorDisplay.textContent = pickedColor;
  //change colors of squares
  for(let i=0; i<squares.length; i++) {
    if(colors[i]) {
      squares[i].style.display = 'block';
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = 'none';
    }
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = 'steelblue';
}
