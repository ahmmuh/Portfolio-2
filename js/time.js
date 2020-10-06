const time = document.querySelector("#time");

const newTime = new Date();
time.innerHTML = `Idag är : ${newTime.toLocaleString()}`;
time.style.color = "yellow";
time.style.fontSize = "30px";
