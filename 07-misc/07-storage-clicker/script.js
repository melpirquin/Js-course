/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let num = document.getElementById("target");
    let button = document.getElementById("increment"), count = 0;
    let myStorage = window.localStorage;
    if(!myStorage.clickCount)
    {
        myStorage.clickCount = Number(0);
    }
    //initialize counter
    num.innerText = myStorage.clickCount;

    button.addEventListener("click", ()=>{
        if(!myStorage.clickCount)
        {
            myStorage.clickCount = Number(0);
        }
        myStorage.clickCount++;
        num.innerText = myStorage.clickCount;

    })
    /*button.onclick = function (){
          count += 1;
          num.innerHTML = count;
          console.log(count);
      }*/













})();
