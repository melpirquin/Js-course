/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

   // let myDate = new Date();
  //  let day = myDate.getDay();
 //  let month = myDate.getMonth();
    //let year = myDate.getFullYear();
   // let d = myDate.getDate();

   // let Hours= Date.getHours();
   // let min = Date.getMinutes();

   // if(d<12){
      //  d="0"+d;
      //  let darr = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Satuday");
      //  let marr = new Array("January","February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

       // document.getElementById("target").innerHTML =
   // }

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here

    function makeArray() {
        for (i = 0; i<makeArray.arguments.length; i++)
            this[i + 1] = makeArray.arguments[i];}

    let months = new Array("January","February","March","April","May","June","July","August","September","October","November","December");
    let dias = new Array("Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday");
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let dia = date.getDay() + 1;
    let yy = date.getYear();
    let year = (yy < 1000) ? yy + 1900 : yy;
    let hora = date.getHours() + "h"+ date.getMinutes();
    document.getElementById("target").innerHTML = "Today is " + dias[dia] + " "+ day + "  " + months[month] + "  " + year + ", " + hora ;



})();
