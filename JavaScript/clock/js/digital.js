setInterval(() => {
    // Getting TIME (Hours, Minutes and Second);
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    // Blinking of Second seprator
    if (stime % 2 == 0) hdblink.style.color = `white`;
    else if (stime % 2 != 0) hdblink.style.color = `transparent`;
    // Checking AM or PM
    if (htime > 11 && ampm.innerHTML != 'PM') ampm.innerHTML = "PM";
    else if (htime < 12 && ampm.innerHTML != 'AM') ampm.innerHTML = "AM";
    // Converting TIME format to 12-hour format (DEFAULT
    // Converting TIME format to 24-hour format on user-request
    if (hourFormat.value === 'on') {
        if (htime === 0) htime = 12;
        if (htime > 12) htime = htime - 12;
        ampm.style.display = 'inline-block';
    }
    else ampm.style.display = 'none';
    // Condition adding 0 to a single digit
    if (htime < 10) {
        this.toString();
        htime = '0' + htime;
    } if (mtime < 10) {
        this.toString();
        mtime = '0' + mtime;
    } if (stime < 10) {
        this.toString();
        stime = '0' + stime;
    }
    // UPDATING TIME ON WEB PAGE
    if (htime != hd.innerHTML) hd.innerHTML = htime;
    if (mtime != md.innerHTML) md.innerHTML = mtime;
    sd.innerHTML = stime;
    // Getting Date (Date, Day, WeekDay, Month, Year);
    dd = d.getDate();
    wd = d.getDay();
    md = d.getMonth();
    yd = d.getFullYear();
    // Checking Date's digit
    if (dd < 10) {
        this.toString();
        dd = '0' + dd;
    }
    // Calender Months
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV','DEC'];
    // // Weekly Days
    const week = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    // UPDATING DATE ON WEB PAGE
    if (week[wd] != wdate.innerHTML) wdate.innerHTML = week[wd];
    if (dd != ddate.innerHTML) ddate.innerHTML = dd;
    if (months[md] != mdate.innerHTML) mdate.innerHTML = months[md];
    if (yd != ydate.innerHTML) ydate.innerHTML = yd;
}, 1000);

function twentyfourHrFormat() {
    // let changeFormat = document.getElementById('hourFormat').value;
    if (hourFormat.value === 'on') hourFormat.value = 'off';
    else hourFormat.value = 'on';
    console.log(hourFormat.value)
}