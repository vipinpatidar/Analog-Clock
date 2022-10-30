console.log('Analog is running');


setInterval( ()=>{
    const now = new Date();
// Get hours minutes seconds
  let hoursTime = now.getHours();
  let minutesTime = now.getMinutes();
  let secondsTime = now.getSeconds();

  hourRotation= (30*hoursTime) +(minutesTime/2)
  minuteRotation = (6*minutesTime)
  secondRotation = (6*secondsTime)
      
  hour.style.transform = `rotate(${hourRotation}deg)`;
  minute.style.transform = `rotate(${minuteRotation}deg)`;
  second.style.transform = `rotate(${secondRotation}deg)`;

}, 1000)