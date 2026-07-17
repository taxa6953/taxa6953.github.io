const acquaintanceDate = new Date(2026,4,14);

function updateCounter(){

const now = new Date();

const passedDays =
Math.floor(
(now-acquaintanceDate)/(1000*60*60*24)
);

document.getElementById(
"daysTogether"
).innerHTML =
passedDays + " روز گذشته";

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
(birthday-now)/(1000*60*60*24)
);

document.getElementById(
"birthdayLeft"
).innerHTML =
left + " روز باقی مانده";

}

updateCounter();

/* envelope */

const envelope =
document.getElementById(
"openEnvelope"
);

const modal =
document.getElementById(
"modal"
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
