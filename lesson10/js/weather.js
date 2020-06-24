const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=d7ffb76f27d5f75f6ce4b7817252176f";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    var temp = jsObject.main.temp;
    var desc = jsObject.weather[0].main;
    var wind = jsObject.wind.speed;
    document.getElementById('current-temp').textContent = temp.toFixed(1);
    document.getElementById('desc').textContent = desc;
    document.getElementById('wind').textContent = wind;
    document.getElementById('humid').textContent = jsObject.main.humidity;
    if (temp <= 50 && wind >= 3) {
        var chill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16);
        document.getElementById("chill").textContent = chill.toFixed(1);
    }
  });

  const apiURL2 = "pro.openweathermap.org/data/2.5/forecast/hourly?id=5604473&units=imperial&appid=d7ffb76f27d5f75f6ce4b7817252176f";
  fetch(apiURL2)
    .then((response) => response.json())
    .then((jsObject) => {
      console.log(jsObject);
    });
  
  
    
  
  

