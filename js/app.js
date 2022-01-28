const dailybtn = document.querySelector('.daily-btn');
const weeklybtn =  document.querySelector('.weekly-btn');
const monthlybtn =  document.querySelector('.monthly-btn');

const workTime =  document.querySelector('.work-time');
const workTimePrev = document.querySelector('.work-time-previous');
const playTime =  document.querySelector('.play-time');
const playTimePrev = document.querySelector('.play-time-previous');
const studyTime =  document.querySelector('.study-time');
const studyTimePrev = document.querySelector('.study-time-previous');
const exerciseTime =  document.querySelector('.exercise-time');
const exerciseTimePrev = document.querySelector('.exercise-time-previous');
const socialTime =  document.querySelector('.social-time');
const socialTimePrev = document.querySelector('.social-time-previous');
const selfcareTime =  document.querySelector('.self-care-time');
const selfcareTimePrev = document.querySelector('.self-care-time-previous');

dailybtn.addEventListener('click', ()=>{
    //work
    fetch("data.json")
        .then(res=>res.json())
        .then(data=>workTime.innerHTML = data[0].timeframes.daily.current + "hrs");
    fetch("data.json")
        .then(res=>res.json())
        .then(data=>workTimePrev.innerHTML = data[0].timeframes.daily.previous + "hrs");
    
    //play
    fetch("data.json")
        .then(res=>res.json())
        .then(data=>playTime.innerHTML = data[1].timeframes.daily.current + "hrs");
    fetch("data.json")
        .then(res=>res.json())
        .then(data=>playTimePrev.innerHTML = data[1].timeframes.daily.previous + "hrs");
    
    //study
    fetch("data.json")
    .then(res=>res.json())
    .then(data=>studyTime.innerHTML = data[2].timeframes.daily.current + "hrs");
    fetch("data.json")
    .then(res=>res.json())
    .then(data=>studyTimePrev.innerHTML = data[2].timeframes.daily.previous + "hrs");

    //exercise
    fetch("data.json")
    .then(res=>res.json())
    .then(data=>exerciseTime.innerHTML = data[3].timeframes.daily.current + "hrs");
    fetch("data.json")
    .then(res=>res.json())
    .then(data=>exerciseTimePrev.innerHTML = data[3].timeframes.daily.previous + "hrs");

    //social
    fetch("data.json")
    .then(res=>res.json())
    .then(data=>socialTime.innerHTML = data[4].timeframes.daily.current + "hrs");
    fetch("data.json")
    .then(res=>res.json())
    .then(data=>socialTimePrev.innerHTML = data[4].timeframes.daily.previous + "hrs");

    //selfcare
    fetch("data.json")
    .then(res=>res.json())
    .then(data=>selfcareTime.innerHTML = data[5].timeframes.daily.current + "hrs");
    fetch("data.json")
    .then(res=>res.json())
    .then(data=>selfcareTimePrev.innerHTML = data[5].timeframes.daily.previous + "hrs");

});

weeklybtn.addEventListener('click', ()=>{
    //work
    fetch("data.json")
        .then(res=>res.json())
        .then(data=>workTime.innerHTML = data[0].timeframes.weekly.current + "hrs");
    fetch("data.json")
        .then(res=>res.json())
        .then(data=>workTimePrev.innerHTML = data[0].timeframes.weekly.previous + "hrs");
    
    //play
    fetch("data.json")
        .then(res=>res.json())
        .then(data=>playTime.innerHTML = data[1].timeframes.weekly.current + "hrs");
    fetch("data.json")
        .then(res=>res.json())
        .then(data=>playTimePrev.innerHTML = data[1].timeframes.weekly.previous + "hrs");
    
    //study
    fetch("data.json")
    .then(res=>res.json())
    .then(data=>studyTime.innerHTML = data[2].timeframes.weekly.current + "hrs");
    fetch("data.json")
    .then(res=>res.json())
    .then(data=>studyTimePrev.innerHTML = data[2].timeframes.weekly.previous + "hrs");

    //exercise
    fetch("data.json")
    .then(res=>res.json())
    .then(data=>exerciseTime.innerHTML = data[3].timeframes.weekly.current + "hrs");
    fetch("data.json")
    .then(res=>res.json())
    .then(data=>exerciseTimePrev.innerHTML = data[3].timeframes.weekly.previous + "hrs");

    //social
    fetch("data.json")
    .then(res=>res.json())
    .then(data=>socialTime.innerHTML = data[4].timeframes.weekly.current + "hrs");
    fetch("data.json")
    .then(res=>res.json())
    .then(data=>socialTimePrev.innerHTML = data[4].timeframes.weekly.previous + "hrs");

    //selfcare
    fetch("data.json")
    .then(res=>res.json())
    .then(data=>selfcareTime.innerHTML = data[5].timeframes.weekly.current + "hrs");
    fetch("data.json")
    .then(res=>res.json())
    .then(data=>selfcareTimePrev.innerHTML = data[5].timeframes.weekly.previous + "hrs");

});

monthlybtn.addEventListener('click', ()=>{
    //work
    fetch("data.json")
        .then(res=>res.json())
        .then(data=>workTime.innerHTML = data[0].timeframes.monthly.current + "hrs");
    fetch("data.json")
        .then(res=>res.json())
        .then(data=>workTimePrev.innerHTML = data[0].timeframes.monthly.previous + "hrs");
    
    //play
    fetch("data.json")
        .then(res=>res.json())
        .then(data=>playTime.innerHTML = data[1].timeframes.monthly.current + "hrs");
    fetch("data.json")
        .then(res=>res.json())
        .then(data=>playTimePrev.innerHTML = data[1].timeframes.monthly.previous + "hrs");
    
    //study
    fetch("data.json")
    .then(res=>res.json())
    .then(data=>studyTime.innerHTML = data[2].timeframes.monthly.current + "hrs");
    fetch("data.json")
    .then(res=>res.json())
    .then(data=>studyTimePrev.innerHTML = data[2].timeframes.monthly.previous + "hrs");

    //exercise
    fetch("data.json")
    .then(res=>res.json())
    .then(data=>exerciseTime.innerHTML = data[3].timeframes.monthly.current + "hrs");
    fetch("data.json")
    .then(res=>res.json())
    .then(data=>exerciseTimePrev.innerHTML = data[3].timeframes.monthly.previous + "hrs");

    //social
    fetch("data.json")
    .then(res=>res.json())
    .then(data=>socialTime.innerHTML = data[4].timeframes.monthly.current + "hrs");
    fetch("data.json")
    .then(res=>res.json())
    .then(data=>socialTimePrev.innerHTML = data[4].timeframes.monthly.previous + "hrs");

    //selfcare
    fetch("data.json")
    .then(res=>res.json())
    .then(data=>selfcareTime.innerHTML = data[5].timeframes.monthly.current + "hrs");
    fetch("data.json")
    .then(res=>res.json())
    .then(data=>selfcareTimePrev.innerHTML = data[5].timeframes.monthly.previous + "hrs");
});

