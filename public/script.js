/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// TEST MET PAGE TRANSITION
// const btn = document.getElementById('btn');
// const section = document.getElementById('box');
//
// btn.onclick = function (){
//     section.classList.toggle('anim')
// }
