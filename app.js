setInterval(( ) => {

let hours = document.getElementById("heures");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("secondes");
// let ampm = document.getElementById("ampm");

let hh = document.getElementById("hh");
let mm = document.getElementById("mm");
let ss = document.getElementById("ss");

let hr_points = document.querySelector(".hr_points");
let min_points = document.querySelector(".min_points");
let sec_points = document.querySelector(".sec_points");

let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();

//? Si on est en 12h
// let am = h >= 12 ? "PM" : "AM";

//? Convertir horloge 24hr and 12hr
// if(h > 12){
//     h = h -12;
// }
//? Ajouter un 0 avant les chiffres solo
h = (h < 10) ? "0" + h : h;
m = (m < 10) ? "0" + m : m;
s = (s < 10) ? "0" + s : s;

hours.innerHTML = h + "<br><span>Heures</span>";
minutes.innerHTML = m +  "<br><span>Minutes</span>";
seconds.innerHTML = s + "<br><span>Secondes</span>";

//? si on est en 12h
// ampm.innerHTML = am;

//? 24 hrs
hh.style.strokeDashoffset = 440 - (440 * h) / 24;
//? 60 minutes
mm.style.strokeDashoffset = 440 - (440 * m) / 60;
//? 60 secondes
ss.style.strokeDashoffset = 440 - (440 * s) / 60;

hr_points.style.transform = `rotate(${h * 15}deg)`;
min_points.style.transform = `rotate(${m * 6}deg)`;
sec_points.style.transform = `rotate(${s * 6}deg)`;
})
