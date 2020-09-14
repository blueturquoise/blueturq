let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');

let numClosedDoors = 3;

let openDoor;
let openDoor2;
let openDoor3;

let closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";

let startButton = document.getElementById('start');

let currentlyPlaying = true;

const isBot = (door) => {
  if(door.src === botDoorPath) {
    return true;
  }
  else {
    return false;
  }
}

const isClicked = (door) => {
  if (door.src === closedDoorPath) {
    return false;
  }
  else {
    return true;
  }
}

const playDoor = (door) => {
  numClosedDoors--;
  if(numClosedDoors === 0) {
    gameOver('win');
  }
  else if (isBot(door) === true) {
      gameOver();
  }
}

const randomChoreDoorGenerator = () => {
  const choreDoor = Math.floor(Math.random() *    numClosedDoors);
  if(choreDoor === 0) {
    openDoor = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  }
  else if(choreDoor === 1) {
    openDoor2 = botDoorPath;
    openDoor = spaceDoorPath;
    openDoor3 = beachDoorPath;
  }
  else {
    openDoor3 = botDoorPath;
    openDoor = beachDoorPath;
    openDoor2 = spaceDoorPath;
  }
}
const botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
const beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
const spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";

doorImage1.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage1)) {
    door1.src= openDoor;
    playDoor(doorImage1);
  }
}
doorImage2.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage2)) {
    door2.src = openDoor2;
    playDoor(doorImage2);
  }
}
doorImage3.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage3)) {
    door3.src = openDoor3;
    playDoor(doorImage3);
  }
}

startButton.onclick = () => {
  if (!currentlyPlaying) {
  startRound();
  }
}

const startRound = () => {
  door1.src = closedDoorPath;
  door2.src = closedDoorPath;
  door3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = 'Good luck!';
  currentlyPlaying = true;
}

const gameOver = (status) => {
  if (status === 'win') {
  startButton.innerHTML = 'You win! Play again?';
  }
  else {
    startButton.innerHTML = 'Game over! Play again?';
  }
  currentlyPlaying = false;
}


randomChoreDoorGenerator();