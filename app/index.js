import document from "document";
import clock from "clock";
import * as messaging from "messaging";
import { calendar } from "./lunar_calendar";
import { numToImage } from "./utils";

let timePage = document.getElementById("timePage");

let lunarDateText = document.getElementById("lunarDateText"); 
let lunarYearText = document.getElementById("lunarYearText");

// The clock numbers
let hourNumber1 = document.getElementById("hour_num_1");
let hourNumber2 = document.getElementById("hour_num_2");
let minuteNumber1 = document.getElementById("minute_num_1");
let minuteNumber2 = document.getElementById("minute_num_2");

// Listen to clock tick event in one minute interval
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
    
    let date = Date.now();
    let lunarDate = calendar.solar2lunar(date.year, date.monthIndex + 1, date.day);
    lunarDateText.text = lunarDate.IMonthCn + "\n" + lunarDate.IDayCn;
};

// Change clockface color when receiving message from companion
messaging.peerSocket.onmessage = function(evt) {
    let newFillColor = evt.data.value;
    hourNumber1.style.fill = newFillColor;
    hourNumber2.style.fill = newFillColor;
    minuteNumber1.style.fill = newFillColor;
    minuteNumber2.style.fill = newFillColor;
}
