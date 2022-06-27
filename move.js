let story = document.getElementById("story");
let titl = document.getElementById("titl");
let services = document.getElementById("services");
let boxAll = document.getElementById("boxAll");
let project = document.getElementById("project");
let images = document.getElementById("images");


function myFunction(x) {
  if (x.matches) { // If media query matches
    setTimeout(() => {
        story.style.bottom = "547px";
    }, 1000);
  } else {
    setTimeout(() => {
        story.style.bottom = "150px";
    }, 1000);
  }
};

var x = window.matchMedia("(max-width: 768px)");
myFunction(x) ;// Call listener function at run time



window.onscroll = function() {
    if(window.scrollY > services.offsetTop -200 ) {
        titl.style.right = "0";
    }
    if (window.scrollY > boxAll.offsetTop -500){
        boxAll.style.right = "0"
    }
    if(window.scrollY > project.offsetTop -200){
        project.style.right = "0"
    }
    if(window.scrollY > project.offsetTop -200){
        images.style.right = "0"
    }
};