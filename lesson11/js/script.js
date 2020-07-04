//Dropdown Menu
function toggleMenu() {
    document.getElementById("dropdown").classList.toggle("hide");
}

//Shows last updated
function time() {
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var date = new Date();
    var dayofweek = days[date.getDay()];
    var monthofyear = months[date.getMonth()];    
    var fulldate = dayofweek + ", " + date.getDate() + " " + monthofyear + " " + date.getFullYear();
    document.getElementById("datetime").innerHTML = fulldate;
    
    /*------------------------------*/
    //Shows banner if it's friday
    const banner = document.getElementById('picnic');
    if(date.getDay() == 5){
        banner.style.display = 'block';
    }
    else{
        banner.style.display = 'none';
}
}

//Loads date and time
window.addEventListener("load", time())


//Loads Font
WebFont.load({
  google: {
    families: [
       'Fredoka One', 'Jost'
    ]
  }
});

//Updates slider
function adjustRating(rating) {
  document.getElementById("ratingvalue").innerHTML = rating;
}