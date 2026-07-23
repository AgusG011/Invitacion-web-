/* ==================================================
   AGUSTÍN & MICAELA
   WEDDING INVITATION SCRIPT
================================================== */



/* ==================================================
   ELEMENTOS
================================================== */


const envelopeContainer =
document.getElementById("envelope");


const envelope =
document.querySelector(".envelope");


const seal =
document.getElementById("seal");


const music =
document.getElementById("bg-music");


const musicToggle =
document.getElementById("musicToggle");



let musicPlaying = false;



/* ==================================================
   APERTURA DEL SOBRE
================================================== */


if(seal){


seal.addEventListener(
"click",
()=>{


// abrir sobre

envelope.classList.add("open");



// esperar animación

setTimeout(()=>{


// esconder portada

envelopeContainer.classList.add("hide");



// mostrar contenido

document.body.classList.remove(
"opening"
);


document.body.classList.add(
"revealed"
);



// iniciar música

playMusic();



if(musicToggle){

musicToggle.style.display="flex";

}


},1400);



}

);


}




/* ==================================================
   MÚSICA
================================================== */


function playMusic(){


if(!music) return;



music.volume = 0.35;



music.play()

.then(()=>{


musicPlaying=true;


updateMusicButton();


})


.catch(()=>{


console.log(
"La reproducción automática fue bloqueada"
);


});


}




function pauseMusic(){


if(!music) return;


music.pause();


musicPlaying=false;


updateMusicButton();


}



function updateMusicButton(){


if(!musicToggle)
return;


musicToggle.textContent =
musicPlaying
? "🔊"
: "🔇";


}




if(musicToggle){


musicToggle.addEventListener(
"click",
()=>{


if(musicPlaying){

pauseMusic();

}
else{

playMusic();

}


});


}






/* ==================================================
   COUNTDOWN
================================================== */



const weddingDate =
new Date(
"February 6, 2027 00:00:00"
).getTime();




const days =
document.getElementById("days");


const hours =
document.getElementById("hours");


const minutes =
document.getElementById("minutes");


const seconds =
document.getElementById("seconds");




function updateCountdown(){


const now =
new Date().getTime();



const distance =
weddingDate-now;



if(distance <=0){


if(days)
days.textContent="00";


if(hours)
hours.textContent="00";


if(minutes)
minutes.textContent="00";


if(seconds)
seconds.textContent="00";


return;


}



const d =
Math.floor(
distance /
(1000*60*60*24)
);



const h =
Math.floor(
(distance /
(1000*60*60))
%24
);



const m =
Math.floor(
(distance /
(1000*60))
%60
);



const s =
Math.floor(
(distance /
1000)
%60
);




if(days)
days.textContent=
String(d).padStart(2,"0");



if(hours)
hours.textContent=
String(h).padStart(2,"0");



if(minutes)
minutes.textContent=
String(m).padStart(2,"0");



if(seconds)
seconds.textContent=
String(s).padStart(2,"0");



}



setInterval(
updateCountdown,
1000
);


updateCountdown();







/* ==================================================
   ANIMACIONES SCROLL
================================================== */


const sections =
document.querySelectorAll(
".fade-section"
);



const observer =
new IntersectionObserver(
(entries)=>{


entries.forEach(
(entry)=>{


if(entry.isIntersecting){


entry.target.classList.add(
"is-visible"
);



observer.unobserve(
entry.target
);



}



});


},
{

threshold:.15

}

);




sections.forEach(
(section)=>{


observer.observe(
section
);


});







/* ==================================================
   EFECTO PARALLAX SUAVE HERO
================================================== */


const hero =
document.querySelector(".hero");



window.addEventListener(
"scroll",
()=>{


if(!hero)
return;



const scroll =
window.scrollY;



hero.style.transform =
`
translateY(${scroll * .08}px)
`;



}

);