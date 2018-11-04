// All imports:
import clock from "clock";
import document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";

// Update the clock every minute:
clock.granularity = "minutes";

// Get a handle on the <text> element:
const timeLabel = document.getElementById("timeLabel");
const dateLabel = document.getElementById("dateLabel");
const alien = document.getElementById("alien");

// Update the <text> element every tick with the current time:
clock.ontick = (evt) => {
  let today = evt.date;
  let hours = today.getHours();
  let months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  let m = months[today.getMonth()];
  let d = util.zeroPad(today.getDate());
  
  // Format time:
  if (preferences.clockDisplay === "12h") {
    // 12h format
    hours = hours % 12 || 12;
    hours = util.zeroPad(hours);
  } else {
    // 24h format
    hours = util.zeroPad(hours);
  }
  
  // Add text from vars into label:
  let mins = util.zeroPad(today.getMinutes());
  timeLabel.text = `${hours}:${mins}`;
  dateLabel.text = `${d} ${m}`;
  
  // Test response:
  alien.onclick = function(e) {
    // console.log("Alien!");
    if (alien.href === "heatblast.png") {
        alien.href = "diamond.png";
    } else if (alien.href === "diamond.png") {
        alien.href = "fourarms.png";
    } else if (alien.href === "fourarms.png") {
        alien.href = "ghostfreak.png";
    } else if (alien.href === "ghostfreak.png") {
        alien.href = "greymatter.png";
    } else if (alien.href === "greymatter.png") {
        alien.href = "ripjaws.png";
    } else if (alien.href === "ripjaws.png") {
        alien.href = "stinkfly.png";
    } else if (alien.href === "stinkfly.png") {
        alien.href = "ultrat.png";
    } else if (alien.href === "ultrat.png") {
        alien.href = "wildmutt.png";
    } else if (alien.href === "wildmutt.png") {
        alien.href = "xlr8.png";
    } else if (alien.href === "xlr8.png") {
        alien.href = "marcianito.png";
    } else {
        alien.href = "heatblast.png";
    }
  }
}
