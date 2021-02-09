/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

document.getElementById('run').addEventListener("click", ()=> {

    let Url = "http://localhost:63342/ant-lamarr-4-27/1.The-Fields/5.js-complete-course/_shared/api.json";
    fetch(Url)
        .then(result =>{
            if (result.ok){
                console.log("Ok!")
                return result.json()
            }else{
                console.log("Error")
            }
        })

        .then(data => {
            let heroes = data.heroes;
            //console.log(heroes)
            heroes.forEach((hero) =>{
                //console.log(hero)
           let template = document.getElementById('tpl-hero').content.cloneNode(true);
           let target = document.getElementById('target');

           template.querySelector("strong.name").innerText = hero.name;
           template.querySelector("em.alter-ego").innerText = hero.alterEgo;
           template.querySelector("p.powers").innerText = hero.abilities;

           target.appendChild(template)
            });




        })





})


})();
