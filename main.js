/* ===========Texto inicio========= */

let glowInTexts = document.querySelectorAll(".glowIn");
glowInTexts.forEach(glowInText => {
  let letters = glowInText.textContent.split("");
  glowInText.textContent = "";
  letters.forEach((letter, i) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.style.animationDelay = `${i * 0.05}s`;
    glowInText.append(span);
  });
});

/* =================MENU=============== */
const toggle = document.querySelector('.toggle');
const menu = document.querySelector('#menu');

function toggleMenu(){
   if(menu.classList.contains('active')){  /* si el menu contiene una clase activada(osea algo activado) */
    closeNav() // ejecutar la funcion closeNav(),  mirar mas abajo
} else{
    menu.classList.add('active');/* no esta activado, pues activalo */
    }
}

toggle.addEventListener('click', toggleMenu, false);


function closeNav(){
    menu.classList.remove('active'); /* entonces que quite este algo activado(lo cierra) */
}



/*-------Form------------ */
const form = document.querySelector('.container-form');
const btn = document.querySelector('.btn-inicio');

btn.addEventListener('click',() =>{
  form.style.opacity = 1;
  })