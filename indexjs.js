    var year = new Date();
    document.getElementById("currentyear").textContent = year.getFullYear();

    var lastmod = document.lastModified;
    const date = new Date(document.lastModified);
    var hours = date.getHours();
    if (hours > 12) {hours -= 12;}
    document.getElementById("timedisp").textContent = (date.getMonth() + 1) + "/" + (date.getDay() + 1) 
        + "/" + date.getFullYear() + "  " + hours + ":" + date.getMinutes() + ":" + date.getSeconds();