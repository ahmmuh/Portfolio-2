const time = document.querySelector("#time");

const newTime = new Date();
time.innerHTML = `Idag är : ${newTime.toLocaleString()}`;
time.style.color = "yellow";
//time.style.textShadow = " 2px 3px 2px yellow";
time.style.fontSize = "30px";
