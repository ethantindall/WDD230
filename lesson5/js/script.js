function toggleMenu() {
    document.getElementById("dropdown").classList.toggle("hide");
}

window.onload = function time() {

    var days = ["Sunday", "Monday", "Tuesday", "Wedneday", "Thursday", "Friday", "Saturday"]
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var date = new Date();
    var dayofweek = days[date.getDay()];
    var monthofyear = months[date.getMonth()];    
    var fulldate = dayofweek + ", " + date.getDate() + " " + monthofyear + " " + date.getFullYear();
    document.getElementById("datetime").innerHTML = fulldate;
}
window.onload = function picnic() {
    if (dayofweek != "Friday") {
        var ok = document.getElementsByClassName("picnic");
        ok.style.display = "none";
    }
}