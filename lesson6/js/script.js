function toggleMenu() {
    document.getElementById("dropdown").classList.toggle("hide");
}

function time() {

    var days = ["Sunday", "Monday", "Tuesday", "Wedneday", "Thursday", "Friday", "Saturday"]
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var date = new Date();
    var dayofweek = days[date.getDay()];
    var monthofyear = months[date.getMonth()];    
    var fulldate = dayofweek + ", " + date.getDate() + " " + monthofyear + " " + date.getFullYear();
    document.getElementById("datetime").innerHTML = fulldate;
    
    /*------------------------------*/
    
    const banner = document.getElementById('picnic');
    if(date.getDay() == 5){
        banner.style.display = 'block';
    }
    else{
        banner.style.display = 'none';
}
}

window.addEventListener("load", time())

WebFont.load({
  google: {
    families: [
       'Fredoka One', 'Jost'
    ]
  }
});