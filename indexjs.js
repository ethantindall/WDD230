var lastmod = document.lastModified;
const date = new Date(document.lastModified);
const disp = (date.getMonth() + 1) + "/" + (date.getDay() + 1) + "/" + date.getFullYear() + "  " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
document.getElementById("time").textContent = disp;