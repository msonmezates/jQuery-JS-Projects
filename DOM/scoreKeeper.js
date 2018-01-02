let p1Button = document.getElementById('p1');
let p2Button = document.querySelector('#p2');
let p1Score = 0, p2Score = 0;
let p1Display = document.querySelector('#p1Display');
let p2Display = document.querySelector('#p2Display');
let resetButton = document.getElementById('reset');
let numInput = document.querySelector('input[type="number"]');
let winningScoreDisplay = document.querySelector('p span');
let gameOver = false;
let winningScore = numInput.value;

p1.addEventListener('click',()=> {
  if(!gameOver) {
    p1Score++;
    if(p1Score === winningScore) {
      p1Display.classList.add('winner');
      gameOver = true;
    }
  }
  p1Display.textContent = p1Score;
});

p2.addEventListener('click',()=> {
  if(!gameOver) {
    p2Score++;
    if(p2Score === winningScore) {
      p2Display.classList.add('winner');
      gameOver = true;
    }
  }
  p2Display.textContent = p2Score;
});

resetButton.addEventListener('click',()=>{
  reset();
});

reset = () => {
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove('winner');
  p2Display.classList.remove('winner');
  gameOver = false;
}

numInput.addEventListener('change',()=> {
  winningScoreDisplay.textContent = numInput.value;
  winningScore = Number(numInput.value);
  reset();
});