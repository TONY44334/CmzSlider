const Container = document.querySelector('.container')
const Prev = document.querySelector('.prev')
const Nxt = document.querySelector('.nxt')
const Img = document.querySelector('.images')
const Slides = document.querySelectorAll('.images img')
let counter = 2;
let size = Slides[0].clientWidth;

Img.style.transform = `translate(${-size * counter}px)`;

Nxt.addEventListener ('click', ()=>{
   if(counter <= 0) {return};
   Img.style.transition = "transform 0.4s ease-in-out";
   counter++;                 
   Img.style.transform = `translateX(${-size * counter}px)`;
}); 

Prev.addEventListener ('click', ()=>{
   if(counter <= 0) {return};
   Img.style.transition = "transform 0.4s ease-in-out";
   counter--;                 
   Img.style.transform = `translateX(${-size * counter}px)`;

}); 

Img.addEventListener ("transitionend", ()=>{

   if(Slides[counter].id === "lastClone"){
      Img.style.transition = "none";
      counter = Slides.length -2;
      Img.style.transform = `translateX(${-size * counter}px)`;

   }

   if(Slides[counter].id === "firstClone"){
      Img.style.transition = "none";
      counter = Slides.length -counter;
      Img.style.transform = `translateX(${-size * counter}px)`;

   }
})



