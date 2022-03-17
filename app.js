const monthsArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const Kickoff = document.querySelector(".Kickoff");
  const timer = document.querySelector(".timer");
  const components = document.querySelectorAll(".timer-format h4");
  
let dateOfEvent = new window.Date(2023, 1, 12, 16, 30, 0);
// console.log(dateOfEvent);

const year = dateOfEvent.getFullYear();
const hours = dateOfEvent.getHours();
const minutes = dateOfEvent.getMinutes();
let month = monthsArray[dateOfEvent.getMonth()];
let date = dateOfEvent.getDate();
let day = weekdays[dateOfEvent.getDay()];

Kickoff.textContent = `Date of Kickoff: ${day} ${date}th ${month} ${year} @${hours - 11}:${minutes}pm`;

const timeEvent = dateOfEvent.getTime();

function getTimeDifference(){

    const currentTime = new window.Date().getTime();
    const diff = timeEvent - currentTime;

    //Conversion constants from milliseconds
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHr = 60 * 60 * 1000;
    const oneMin = 60 * 1000;
    const oneSec = 1000;

    //Values
    let numDays = Math.floor(diff / oneDay);
    let numHrs = Math.floor((diff % oneDay) / oneHr);
    let numMins = Math.floor((diff % oneHr) / oneMin);
    let numSecs = Math.floor((diff % oneMin) / oneSec);  

    //Summary array
    const timeSummary = [numDays, numHrs, numMins, numSecs];
    
    function format(component){
        if(component < 10){
            return component = `0${component}`;
        } else{
            return component;
        }
        
    }

    //Loop to substiute values into components array
    components.forEach(function(component, index){
        component.innerHTML = format(timeSummary[index]);
    });
    
    if(diff < 0){
        clearInterval(ticker);
        timer.innerHTML = `<h2> KICKOFF HAS OCCURRED!</h2>`;
    }
}


let ticker = setInterval(getTimeDifference, 1000);
getTimeDifference();