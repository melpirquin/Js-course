/* becode/javascript
 *
 * /09-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    document.getElementById('run').addEventListener('click', () => {
        function fetchData(){
            fetch("http://localhost:63342/ant-lamarr-4-27/1.The-Fields/5.js-complete-course/_shared/api.json")
                .then(results => results.json())
                .then(console.log);
        }
        fetchData();
       
    })





})();
//