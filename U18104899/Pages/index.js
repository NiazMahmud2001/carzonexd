var counter = 1;

function plusSlides(a , b){
   var c = '.'+b+counter;
   var car_pic = document.querySelector(c);
   console.log(car_pic);

   counter++;
   if(counter>2){
      counter = 2;
   }

   car_pic.style.marginLeft = a*380+'px';
   car_pic.style.transitionDuration = '0.5s';

}
function plusSlides_prev(a , b){

   var c = '.'+b+counter;
   var car_pic = document.querySelector(c);
   console.log(car_pic);

   counter--;
   if(counter<1){
      counter = 1;
   }

   car_pic.style.marginLeft = a*350+'px';
   car_pic.style.transitionDuration = '0.5s';

}
