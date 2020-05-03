const date = new Date(document.lastModified);


let hours = date.getHours();
if (hours > 12) {hours -= 12;}
    
let seconds = date.getSeconds();
if (seconds < 10) {
    let sec = seconds.toString();
    seconds = "0" + sec;}

let minutes = date.getMinutes();
if (minutes < 10) {
    let min = minutes.toString();
    minutes = "0" + min;}
  
document.getElementById("timedisp").textContent = (date.getMonth() + 1) + "/" + (date.getDate()) 
    + "/" + date.getFullYear() + "  " + hours + ":" + minutes + ":" + seconds;

document.getElementById("currentyear").textContent = (date.getFullYear());