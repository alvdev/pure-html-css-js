const secondsHand = document.querySelector('.sec');
const minutesHand = document.querySelector('.min');
const hoursHand = document.querySelector('.hour');

function setDate() {
  const date = new Date();

  const seconds = date.getSeconds();
  const secondsDegrees = (seconds / 60) * 360;
  secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = date.getMinutes();
  const minutesDegrees = (minutes / 60) * 360;
  minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = date.getHours();
  const hoursDegrees = (hours / 12) * 360;
  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);
