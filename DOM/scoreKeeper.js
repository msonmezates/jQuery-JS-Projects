let p1Button = document.getElementById('p1');
let p2Button = document.querySelector('#p2');
let p1Score = 0, p2Score = 0;
let p1Display = document.querySelector('#p1Display');
let p2Display = document.querySelector('#p2Display');
let gameOver = false;
let winningScore = 5;

p1.addEventListener('click',()=> {
  if(!gameOver) {
    p1Score++;
    if(p1Score === winningScore) {
      gameOver = true;
    }
  }
  p1Display.textContent = p1Score;
});

p2.addEventListener('click',()=> {
  if(!gameOver) {
    p2Score++;
    if(p2Score === winningScore) {
      gameOver = true;
    }
  }
  p2Display.textContent = p2Score;
});