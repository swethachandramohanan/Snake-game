//game constants, variables
let inputDir = { x: 0, y: 0 };
const foodSound = new Audio('food.mp3');
const gameoverSound = new Audio('gameover.wav');
const moveSound = new Audio('move.mp3');
const musicSound = new Audio('bgmusic.mp3');
let speed = 2;
let snakeElement;
let score = 0;
let lastPaintTime = 0;
let snakear = [{ x: 13, y: 15 }];
food = { x: 6, y: 7 };

//game functions
function main(ctime) {
  window.requestAnimationFrame(main);
  if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
    return;
  }
  lastPaintTime = ctime;
  gameEngine();
}

function isCollide(sarr) {
  return false;
}

function gameEngine() {
  //1 updating snake array
  if (isCollide(snakear)) {
    gameoverSound.play();
    musicSound.pause();
    inputDir = { x: 0, y: 0 };
    alert("GAME OVER. PRESS ANY KEY TO RESTART");
    snakear = [{ x: 13, y: 15 }];
    musicSound.play();
    score = 0;
  }

  // if you've eaten the food, increment the score and add new food
  if (snakear[0].y === food.y && snakear[0].x === food.x) {
    snakear.unshift({ x: snakear[0].x + inputDir.x, y: snakear[0].y + inputDir.y });
    score++;
    let a = 2;
    let b = 16;
    food = {
      x: 2 + Math.round(a + (b - a) * Math.random()),
      y: 2 + Math.round(a + (b - a) * Math.random())
    };
  }

  // moving the snake
  for (let i = snakear.length - 1; i > 0; i--) {
    snakear[i] = { ...snakear[i - 1] };
  }
  snakear[0].x += inputDir.x;
  snakear[0].y += inputDir.y;

  // 2 display the snake and food
  // display the snake
  board.innerHTML = " ";
  snakear.forEach((e, index) => {
    snakeElement = document.createElement('div');
    snakeElement.style.gridRowStart = e.y;
    snakeElement.style.gridColumnStart = e.x;

    if (index === 0) {
      snakeElement.classList.add('head');
    } else {
      snakeElement.classList.add('snake');
    }
    board.appendChild(snakeElement);
  });

  // display food
  foodElement = document.createElement('div');
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add('food');
  board.appendChild(foodElement);
}


























// main logic starts here
window.requestAnimationFrame(main);

window.addEventListener('keydown', (e) => {
  inputDir = { x: 0, y: 1 };
  moveSound.play();
  switch (e.key) {
    case "ArrowUp":
      console.log("ArrowUp");
      inputDir = { x: 0, y: -1 };
      break;

    case "ArrowDown":
      console.log("ArrowDown");
      inputDir = { x: 0, y: 1 };
      break;

    case "ArrowLeft":
      console.log("ArrowLeft");
      inputDir = { x: -1, y: 0 };
      break;

    case "ArrowRight":
      console.log("ArrowRight");
      inputDir = { x: 1, y: 0 };
      break;

    default:
      break;
  }
});
