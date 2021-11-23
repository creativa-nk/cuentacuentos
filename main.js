let nube = document.getElementById('nube');
let nube2 = document.getElementById('nube2');
let nube3 = document.getElementById('nube3');
let sol = document.getElementById('sol');
let montaña1 = document.getElementById('montaña1');
let montaña11 = document.getElementById('montaña11');
let montaña2 = document.getElementById('montaña2');
let isla = document.getElementById('isla');
let agua = document.getElementById('agua');


window.addEventListener('scroll', function(){
    var value = window.scrollY;

    nube.style.top = value * 0.7 + 'px';
    nube2.style.top = value * 0.6 + 'px';
    nube3.style.top = value * 0.5 + 'px';
    sol.style.left = -value * 0.5 + 'px'; /* sol.style.left = value * 0.5 + 'px'; */
    montaña1.style.top = value * 0.6 + 'px';
    montaña11.style.top = value * 0.6 + 'px';
    montaña2.style.top = value * 0.7 + 'px';
    isla.style.top = value * 0.65 + 'px';
   agua.style.top = value * 0.68+ 'px';
})