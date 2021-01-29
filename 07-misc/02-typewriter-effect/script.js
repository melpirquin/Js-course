/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    //https://stackoverflow.com/questions/43356923/how-to-make-a-text-rise-or-wave-in-either-css-or-javascript-no-animation

   let i = 0;
   let Text = document.getElementById("target").innerText;
   document.getElementById('target').innerText = ''     // the text
   let Speed = 50; // the speed...

function TypeWriterEffect(){
    if (i < Text.length) {
        document.getElementById('target').innerHTML += Text.charAt(i);
        i++;
        setTimeout(TypeWriterEffect, Speed);
    }
}

TypeWriterEffect();


})();
