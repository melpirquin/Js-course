/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById('run').addEventListener('click', function (){

        let P1 = document.getElementById('pass-one');
        let P2 = document.getElementById('pass-two');

        if (P1.value  ===  P2.value) {
            document.getElementById('pass-one').innerHTML = '';
            document.getElementById('pass-two').innerHTML = '';
        } else {
            P1.classList.add('error');
            P2.classList.add('error');

        }






    })
})();
