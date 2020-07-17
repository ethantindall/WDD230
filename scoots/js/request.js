const requestURL = 'https://roguejuan44.github.io/scoots/js/rentjson.json';


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.log(jsonObject);
  });