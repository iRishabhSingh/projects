// Analog Clock Finctioning
setInterval(() => {
    // Getting TIME (Hours, Minutes and Second);
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    // Calculating ROTATION of Analog Niddles
    let hrotate = 30 * htime + mtime / 2;
    let mrotate = 6 * mtime;
    let srotate = 6 * stime;
    // Rotating Niddles according to the time
    hour.style.transform = `rotate(${hrotate}deg)`;
    minute.style.transform = `rotate(${mrotate}deg)`;
    second.style.transform = `rotate(${srotate}deg)`;
}, 1000);

// This function Helps Toggeling display of Analog Clock BG
function analogBackground() {
    if (analogBG.value === `on`) {
        analogClock.style.background = `url(./img/clock.png) no-repeat`;
        analogClock.style.backgroundSize = `100%`;
        centerOfAnalog.style.background = `black`;
        analogBG.value = `off`;
        hour.style.background = `#0000004d`;
        minute.style.background = `#00000080`;
        second.style.background = `#000000`;
    }
    else {
        centerOfAnalog.style.background = `white`;
        analogBG.value = `on`;
        analogClock.style = ``;
        hour.style.background = `#ffffff4d`;
        minute.style.background = `#ffffff80`;
        second.style.background = `#ffffff`;
    }
}