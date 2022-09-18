const about=document.querySelector(".sect-1");
const project=document.querySelector(".sect-2");
const blogs=document.querySelector(".sect-3");
const contact=document.querySelector(".sect-4");

function backgroundChanger(){
    if(window.scrollY > window.innerHeight/2){
        about.classList.add("bg-color");}
    else{
        about.classList.remove("bg-color");
    }
    if(window.scrollY > window.innerHeight*1.5  ){
        project.classList.add("bg-color-2");}
    else{
        project.classList.remove("bg-color-2");
    }
    if(window.scrollY > window.innerHeight*2.5  ){
        blogs.classList.add("bg-color-1");}
    else{
        blogs.classList.remove("bg-color-1");
    }
    
    if(window.scrollY > window.innerHeight*3.5  ){
        contact.classList.add("bg-color-3");}
    else{
        contact.classList.remove("bg-color-3");
    }
    
}
window.addEventListener("scroll",backgroundChanger);
