/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {

        //let n=prompt("enter the limit '21' to generate the table of number from 1 to 21:");
        let msg="";

        for(let x= 1; x<=21;x++){

            res = Math.sqrt(x);
            if (res % 1 === 0){
                msg = msg + " " + x + " square root of "+ x + " is " + res + "\n";
            }
            //msg = msg + " " + x + " * "+ x + " = " + res + "\n";
        }

        alert(msg);



    });

})();
