/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

       document.getElementById('run').addEventListener('click', () => {

               fetch("http://localhost:63342/ant-lamarr-4-27/1.The-Fields/5.js-complete-course/_shared/api.json")
                   .then(response => response.json())
                   .then(data => {
                       let heroes = data.heroes;

                       let hero ={
                           id: (data.heroes).length +1,
                           name: document.getElementById("hero-name").value,
                           alterEgo: document.getElementById("hero-alter-ego").value,
                           abilities: document.getElementById("hero-powers").value.split("")
                       }
                       heroes.push(hero);
                       console.log(heroes);
                   })

                   .catch(onerror => console.error("Error, ID value is too high"))




       })


})();

