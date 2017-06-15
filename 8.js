// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
//
// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

//my solution
function humanReadable(seconds) {
    if ( seconds !== null && (seconds <= 359999)) {
        let hours = parseInt((seconds / 60) / 60);
        let minutes = parseInt((seconds - hours * 60 * 60) / 60);
        let second = seconds - minutes * 60 - hours * 60 * 60;

        if (hours < 10) {
            hours = '0' + hours;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        if (second < 10) {
            second = '0' + second;
        }

        let result = hours + ":" + minutes + ":" + second;

        return result;
    }
    else {
        return false;
    }

}


//like - not mine solutions

//function humanReadable(seconds) {
// var pad = function(x) { return (x < 10) ? "0"+x : x; }
// return pad(parseInt(seconds / (60*60))) + ":" +
//     pad(parseInt(seconds / 60 % 60)) + ":" +
//     pad(seconds % 60)
// }

// function humanReadable(seconds) {
//     return [seconds / 3600, seconds % 3600 / 60, seconds % 60].map(function(v) {
//         v = Math.floor(v).toString();
//         return v.length == 1 ? '0' + v : v;
//     }).join(':');
// }

// function humanReadable(sec) {
//     let h = sec / 3600 | 0,
//         m = (sec - h * 3600) / 60 | 0,
//         s = sec - h * 3600 - m * 60;
//     return `${h < 10 ? '0' + h : h}:${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}`;
// }