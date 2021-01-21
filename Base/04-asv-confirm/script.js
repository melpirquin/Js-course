/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


function lopin() {

    let gender = prompt("what is your gender?", "Male");
    let age = prompt("how old are you?");
    let town = prompt("Which town are you from?");
    let isok = confirm("is this all correct?" + " " + "you are a " + gender + " " + "who is" + " " + age + " " + "old" + " " + "who lives in " + town);


    if (isok !== true){
        return (lopin());

    }

}
lopin();









