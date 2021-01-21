/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function () {



        let year1 = document.getElementById("dob-year").value;
        let month1 = document.getElementById("dob-month").value;
        let day1 = document.getElementById("dob-year").value;

        let presentyear = new Date().getFullYear();
        let presentmonth = new Date().getMonth();
        let presentday = new Date().getDay();


        let age = presentyear - year1;

        if ( presentmonth +1 < month1 || (presentmonth +1 === month1 && presentday < day1))
            age--; // this helps the code to

        alert("You are currently " + age + " years old.");





    })

    // your code here


})();
