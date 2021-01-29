/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

   let imgElement = document.getElementsByTagName('img');

   let img1 = imgElement[0].getAttribute("src");
   let img2 = imgElement[0].getAttribute("data-hover");

    imgElement[0].addEventListener("mouseover", function (){
        imgElement[0].setAttribute("src", img2)
    })

    imgElement[0].addEventListener("mouseleave", function (){
        imgElement[0].setAttribute("src", img1)
    })


   //alternative
   /* let img1 = document.querySelector('img').getAttribute('src');
    let img2 = document.querySelector('img').getAttribute('data-hover');

    document.querySelector('img').addEventListener("mouseover", event => event.target.setAttribute('src', img1));
    document.querySelector('img').addEventListener("mouseout", event => event.target.setAttribute('src', img2));
*/

    /*
    let hoverImg = document.querySelector("img").getAttribute("data-hover")

    document.querySelector("img").addEventListener("mouseover", function (){
        document.querySelector("img").setAttribute("src", hoverImg)
    })
     */

})();
