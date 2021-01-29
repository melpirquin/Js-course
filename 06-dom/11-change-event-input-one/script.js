/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let Counter = document.getElementById('counter');
    let Input = document.getElementById('pass-one');
    Input.addEventListener('input',function (){

        if (Input.value.length > 10){
            Input.value = Input.value.slice(0, 10);
        }

        Counter.innerText=Input.value.length + " /10"
    })

})();
