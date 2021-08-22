const hamburger = Array.from(document.querySelectorAll(".hamburger img")),
      slider = Array.from(document.querySelectorAll(".slider span")),
      slides = Array.from(document.querySelectorAll("main section")),
      navbar= document.querySelector("nav")
      navUl = document.querySelector(".main-menu ul"),
      logo = document.querySelector(".main-menu img");
let current = 0;
slider[0].addEventListener('click',()=>{
    if(current == 0)return;
    current --;
    removeActiveSlides();
    slides[current].classList.add("active");
})
slider[1].addEventListener('click',()=>{
    if(current == slides.length -1 ) return ;
    current++;
    removeActiveSlides();
    slides[current].classList.add("active");
})
hamburger[0].addEventListener("click",()=>{
    navUl.classList.add("show");
    removeClassHamburger();
    navbar.classList.add("dropdown");
    logo.style.display="none";
    hamburger[1].classList.add("active");
})
hamburger[1].addEventListener("click",()=>{
    navUl.classList.remove("show");
    removeClassHamburger();
    logo.style.display="block";
    navbar.classList.remove("dropdown");
    hamburger[0].classList.add("active");
})
function removeActiveSlides(){
    slides.forEach(element=>element.classList.remove("active"));
}
function removeClassHamburger(){
    hamburger.forEach(element=>element.classList.remove("active"));
}