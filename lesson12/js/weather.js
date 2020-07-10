var x = document.getElementById("pagetitle").textContent;
var apiURL = "";
if (x == "Preston") {
  apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=d7ffb76f27d5f75f6ce4b7817252176f";
} else if (x == "Fish Haven") {
  apiURL ="https://api.openweathermap.org/data/2.5/weather?zip=83287,us&units=imperial&appid=d7ffb76f27d5f75f6ce4b7817252176f";
}else if (x == "Soda Springs") {
  apiURL ="https://api.openweathermap.org/data/2.5/weather?zip=83276,us&units=imperial&appid=d7ffb76f27d5f75f6ce4b7817252176f";
}


fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
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
  

var apiURL2 = "";
if (x == "Preston") {
  apiURL2 ="https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=d7ffb76f27d5f75f6ce4b7817252176f";
} else if (x == "Fish Haven") {
  apiURL2 ="https://api.openweathermap.org/data/2.5/forecast?zip=83287,us&units=imperial&appid=d7ffb76f27d5f75f6ce4b7817252176f";
}else if (x == "Soda Springs") {
  apiURL2 ="https://api.openweathermap.org/data/2.5/forecast?zip=83276,us&units=imperial&appid=d7ffb76f27d5f75f6ce4b7817252176f";
}

fetch(apiURL2)
  .then((response) => response.json())
  .then((forecast) => {
    for (const item in forecast.list) {
      if (forecast.list[item].dt_txt.includes("18:00")) {
        var date = new Date(forecast.list[item].dt_txt);
        var day = date.toString();
        day = day.slice(0,3)

        let card = document.createElement('section');
        let dd = document.createElement('p');
        dd.textContent = day;
        card.appendChild(dd);

        let img = document.createElement('img')
        const imagesrc = 'https://openweathermap.org/img/w/' + forecast.list[item].weather[0].icon + '.png';
        img.setAttribute('src', imagesrc);
        img.setAttribute('alt', forecast.list[item].weather[0].main);
        card.appendChild(img);

        let tt = document.createElement('span');
        tt.textContent = forecast.list[item].main.temp.toFixed(1) + " °F";
        card.appendChild(tt);

        document.querySelector('div.forecast').appendChild(card);        
      }

    }
  });



let url="https://byui-cit230.github.io/weather/data/towndata.json"

fetch(url)
.then((Response) => Response.json())
.then((jsObject) => {
  console.log(jsObject);
  const events = document.querySelector('.townevent');
  let towns = jsObject['towns'];
  towns.forEach(town => {
    if (town.name == x){
      let h2 = document.createElement('h2');
      let ul = document.createElement('ul');
      h2.textContent = 'Events in ' + town.name;
      events.appendChild(h2);
      town.events.forEach(event => {
        let li = document.createElement('li');
        li.textContent = event;
        ul.appendChild(li);
      });
      events.appendChild(ul);
    }
  });
});
