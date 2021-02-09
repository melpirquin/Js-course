/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

document.getElementById('run').addEventListener('click', ()=> {

    function fetchData(){
        fetch("http://localhost:63342/ant-lamarr-4-27/1.The-Fields/5.js-complete-course/_shared/api.json")
            .then(results => results.json())
            .then(data => {
                let heroes = data.heroes;

                let searchId = parseInt(document.getElementById("hero-id").value);
                let result = heroes.find(hero => hero.id === searchId);
                console.log(result)

                let template = document.getElementById('tpl-hero').content.cloneNode(true);
                template.querySelector("strong.name").innerText = result.name;
                template.querySelector("em.alter-ego").innerText = result.alterEgo;
                template.querySelector("p.powers").innerText = result.abilities;

                let target = document.getElementById("target");
                target.appendChild(template);



            })

    }
    fetchData();

})

})();
