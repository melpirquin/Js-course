/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let num = Math.floor(Math.random() * 100 + 1); // Generate a number you will need to guess.
        console.log(num);  // show the number
    let guessNum = prompt('Guess the number between 0 and 100');

        if (guessNum == num){     //if the number is the same then...
            alert(" that's it ");
        }
        else if (guessNum > num){   //if the number is too high,then...
            alert("Lower");
        }

        else if (guessNum < num){   //if the number is too low, then...
            alert("Higher");
        }

})();
