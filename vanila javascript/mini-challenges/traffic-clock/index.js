'use strict';

const redLight = document.querySelector('.red');
const yellowLight = document.querySelector('.yellow');
const greenLight = document.querySelector('.green');


const lights = {
    redticktime: 10,
    yellowticktime: 5,
    greenticktime: 10,
    init: () => {
        setInterval(lights.greentickFunc, 1000);
        redLight.style.opacity = 0
        yellowLight.style.opacity = 0
        greenLight.style.opacity = 0
    },
    greentickFunc: () => {
        const counter = lights.greenticktime;
        if (counter > 0) {
            greenLight.style.opacity = 1;
            lights.greenticktime--;
        }
        else {
            greenLight.style.opacity = 0;
            clear = clearInterval(greentickFunc);
            lights.yellowtickFunc();
        }
    },
    yellowtickFunc: () => {
        const counter = lights.yellowticktime;
        if (counter > 0) {
            yellowLight.style.opacity = 1;
            lights.yellowticktime--;
        }
        else {
            yellowLight.style.opacity = 0;
            clear = clearInterval(yellowtickFunc);
            lights.redtickFunc();
        }
    },
    redtickFunc: () => {
        const counter = lights.redticktime;
        if (counter > 0) {
            redLight.style.opacity = 1;
            lights.redticktime--;
        }
        else {
            redLight.style.opacity = 0;
            clear = clearInterval(redtickFunc);
            lights.redticktime = 10;
            lights.yellowticktime = 5;
            lights.greenticktime = 10;
            lights.greentickFunc();
        }
    },
};

window.onload(lights.init());