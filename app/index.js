import document from "document";
import clock from "clock";
import * as messaging from "messaging";
import {calendar} from "./lunar_calendar";

let hourNumber1 = document.getElementById("hour_num_1");
let hourNumber2 = document.getElementById("hour_num_2");
let minuteNumber1 = document.getElementById("minute_num_1");
let minuteNumber2 = document.getElementById("minute_num_2");

clock.granularity = 'minutes'; // seconds, minutes, hours

clock.ontick = function(evt) {
  

    let hours = evt.date.getHours();
    let minutes = evt.date.getMinutes();

    let hoursText = ("0" + hours).slice(-2);
    let minutesText = ("0" + minutes).slice(-2);

    hourNumber1.href = numToImage(hoursText[0], true);
    hourNumber2.href = numToImage(hoursText[1], true);
    
    minuteNumber1.href = numToImage(minutesText[0], false);
    minuteNumber2.href = numToImage(minutesText[1], false);

    let date = evt.date;
    let lunarDate = calendar.solar2lunar(date.year, date.monthIndex + 1, date.day);
    console.log(lunarDate.gzYear);
};

function numToImage(num, bold) {
    if (bold) {
        return "img/bold_num_" + num + ".png";
    } else {
        return "img/light_num_" + num + ".png";
    }
}

messaging.peerSocket.onmessage = function(evt) {
    hourNumber1.style.fill = evt.data.value;
    hourNumber2.style.fill = evt.data.value;
    minuteNumber1.style.fill = evt.data.value;
    minuteNumber2.style.fill = evt.data.value;
}
