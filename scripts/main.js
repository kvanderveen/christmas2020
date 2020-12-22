document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#lockdown-days').textContent = lockdownDays();
    document.querySelector('#todays-date').textContent = getTodaysDate();
})


function lockdownDays() {
    var today = new Date();
    var lockdown = new Date('03/13/2020');
    var days = Math.round((today - lockdown) / (1000 * 60 * 60 * 24)) + 13;
    if (days % 100 < 20 && days % 100 > 10) {
        return days + 'th';
    }
    if (days % 10 === 1) {
        return days + 'st';
    }
    if (days % 10 === 2) {
        return days + 'nd';
    }
    if (days % 10 === 3) {
        return days + 'rd';
    }
    return days + 'th';
}

function getTodaysDate() {
    var today = new Date();
    return (
        days[today.getDay()] + ' ' +
        months[today.getMonth()] + ' ' +
        today.getDate() + ', ' +
        today.getFullYear()
    );
}

var months = [
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
    "December"
]

var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
]