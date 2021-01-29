/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let validity = document.getElementById("validity");
    let password = document.getElementById("pass-one")
    password.addEventListener('input', function (){

        if (password.value.length >= 8 && password.value.match(/(?=.*\d){2,}/)){
            validity.innerText = "Ok";
        }
        else validity.innerText = "Not Ok";
    })
})();
