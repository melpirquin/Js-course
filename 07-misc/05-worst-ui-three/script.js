/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let Inter = setInterval(getRandomNumber, 500);
    let target = document.getElementById('target');
    let btns = document.querySelectorAll("button");


    function getRandomNumber(){
       document.getElementById('part-one').innerText = RandomNumber1;
    }

    Array.from(btns).forEach(function (button){
        button.addEventListener('click', function (){            //console.log(this.value);

        clearInterval(Inter);





    })

})









})();
