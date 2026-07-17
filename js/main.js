/* DAYS COUNTER */

const acquaintanceDate =
new Date(2026,4,14);

function updateCounters(){

const now = new Date();

const daysTogether =
Math.floor(
(now-acquaintanceDate) /
(1000*60*60*24)
);

document.getElementById(
"daysTogether"
).innerText = daysTogether;

/* birthday */

let birthday =
new Date(
now.getFullYear(),
9,
8
);

if(now > birthday){

birthday =
new Date(
now.getFullYear()+1,
9,
8
);

}

const left =
Math.ceil(
(birthday-now) /
(1000*60*60*24)
);

document.getElementById(
"birthdayLeft"
).innerText = left;

}

updateCounters();

/* ENVELOPE */

const envelope =
document.getElementById(
"openEnvelope"
);

const modal =
document.getElementById(
"photoModal"
);

const close =
document.getElementById(
"closeModal"
);

envelope.onclick=()=>{

modal.style.display="flex";

}

close.onclick=()=>{

modal.style.display="none";

}

modal.onclick=(e)=>{

if(e.target===modal){

modal.style.display="none";

}

}

/* HEARTS */

const heartsContainer =
document.getElementById("hearts");

for(let i=0;i<35;i++){

const heart =
document.createElement("div");

heart.classList.add("heart");

heart.innerHTML="❤";

heart.style.left=
Math.random()*100+"vw";

heart.style.fontSize=
(10+Math.random()*25)+"px";

heart.style.animationDuration=
(8+Math.random()*12)+"s";

heart.style.animationDelay=
Math.random()*10+"s";

document.body.appendChild(
heart
);

}
