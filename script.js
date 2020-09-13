let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
const botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
const beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
const spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
doorImage1.onclick = () => {
  door1.src= botDoorPath;
}
doorImage2.onclick = () => {
  door2.src = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg"
}
doorImage3.onclick = () => {
  door3.src = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg"
}