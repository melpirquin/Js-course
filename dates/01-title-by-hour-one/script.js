/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.getElementById("target").innerHTML = "Hello"
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

 let myDate = new Date();
 let hrs = myDate.getHours();

 let material;

 if  (hrs < 18 )
     material = 'hello';
 else if (hrs > 18)
     material = 'Good Evening';

 document.getElementById('target').innerHTML = '<b>' + material + '</b>'



})();
