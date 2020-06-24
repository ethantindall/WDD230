const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=d7ffb76f27d5f75f6ce4b7817252176f";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = jsObject.main.temp;
    const desc = jsObject.weather[0].description;  // note how we reference the weather array
    document.getElementById('desc').textContent = desc;
  });

