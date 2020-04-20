var year = new Date();
document.getElementById("currentyear").innerHTML = year.getFullYear();

var lastmod = document.lastModified;
const date = new Date(document.lastModified);
document.getElementById("timedisp").textContent = (date.getMonth() + 1) + "/" + (date.getDay() + 1) + "/" + date.getFullYear() + "  " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();