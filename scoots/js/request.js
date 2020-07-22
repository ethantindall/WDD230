const requestURL = 'https://roguejuan44.github.io/scoots/js/rentjson.json';


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.log(jsonObject);
    for (i = 0; i < 6; i++) {
      let row = "row" + i;
      let source = jsonObject.rentals[i];

      let col0 = document.createElement("td");
      col0.textContent = source.vehicle;
      document.getElementById(row).appendChild(col0);
      
      let col1 = document.createElement("td");
      col1.textContent = source.capacity;
      document.getElementById(row).appendChild(col1);

      let col2 = document.createElement("td");
      col2.textContent = source.reshalf;
      document.getElementById(row).appendChild(col2);
      

      /*
      let id = "row" + i;
      document.getElementById(id).innerHTML= jsonObject.rentals[i].vehicle;

      let cap = "cap" + i;
      document.getElementById(cap).innerHTML= jsonObject.rentals[i].capacity;

      */

    }
  });