/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("run").addEventListener("click", function () {

        // your code here
        let x = document.getElementById("year").value; // this get the data inside the input

        function Fridaythe13thsIn() {
            let count = 0;
            for (let month = 0; month < 12; month++) {
                let d = new Date(x, month, 13);
                if (d.getDay() == 5) {
                    count++;
                }
            }
            return count;
        }




        document.getElementById("year").value = Fridaythe13thsIn();

    });

})();