const time = {weekday: "long", day: "numeric", month: "long", year:"numeric"};
document.getElementById("time").textContent = new Date().toLocaleDateString("en-US", options);