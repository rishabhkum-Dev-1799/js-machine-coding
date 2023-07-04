'use strict'







const startClock = () => {
    const hour = document.querySelector('.hour').children[0];
    const minutes = document.querySelector('.minutes').children[0];
    const seconds = document.querySelector('.seconds').children[0];
    // const hour = document.querySelector('.hour');
    // const minutes = document.querySelector('.minutes');
    // const seconds = document.querySelector('.seconds');
    const date = new Date();
    const currentHour = date.getHours();
    const currentMinutes = date.getMinutes();
    const currentSeconds = date.getSeconds();
    hour.style.transform = `rotate(${30 * currentHour}deg)`
    minutes.style.transform = `rotate(${6 * currentMinutes}deg)`
    seconds.style.transform = `rotate(${6 * currentSeconds}deg)`
};

setInterval(startClock, 1000)