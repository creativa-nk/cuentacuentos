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
  setTimeout(function(){ glowInTexts; }, 5000)
});



/* =================MENU=============== */
const btn = document.querySelector('.container_menu')
const background = document.querySelector('.background')


btn.addEventListener('click',() =>{
background.classList.toggle('active');
})

/*  */
