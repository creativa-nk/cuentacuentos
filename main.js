let montaña = document.getElementById('montaña');
let montaña2 = document.getElementById('montaña2');
let sol = document.getElementById('sol');
let bosque = document.getElementById('bosque');
let castillo = document.getElementById('castillo');
/* let montaña = document.getElementById('montaña'); */

window.addEventListener('scroll', function(){
    var value = window.scrollY;

    montaña.style.top = value * 0.5 + 'px';
    montaña2.style.top = value * 0.15 + 'px';
    sol.style.left = -value * 0.5 + 'px'; /* sol.style.left = value * 0.5 + 'px'; */
    bosque.style.top = -value * 0.02 + 'px';
    castillo.style.top = value * 0.20 + 'px';
})