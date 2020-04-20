var date = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

document.getElementById("time").innerHTML = date;