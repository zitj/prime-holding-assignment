console.log('We are connected!');

const hero = document.querySelector('.hero');
const carouselContent = hero.querySelectorAll('.text');
const arrowButtons = hero.querySelectorAll('.carouselButton');
const carouselDots = hero.querySelectorAll('.dot');
const prevButton = arrowButtons[0];
const nextButton = arrowButtons[1];
let counter = 1; 

console.log(carouselDots[counter]);


const previousDots = () =>{
    if(counter == 0){
        carouselDots[counter].classList.add('active');
        carouselDots[counter + 1].classList.remove('active');
    }
    if(counter < 1){
        counter = carouselContent.length;
    }
   if(counter == carouselContent.length - 1){
    carouselDots[0].classList.remove('active');
   }
    if(counter <= carouselContent.length){
        carouselDots[counter].classList.add('active');
        carouselDots[counter + 1].classList.remove('active');
    }
}

const nextDots = () =>{
    if(counter >= carouselContent.length){
        counter = 0;
        carouselDots[counter + 4].classList.remove('active');
    }
    if(!carouselDots[counter].classList.contains('active')){
        carouselDots[counter].classList.add('active');
    }
    if(counter > 0){
        carouselDots[counter - 1].classList.remove('active');
    }
}

nextButton.addEventListener('click', ()=>{
    console.log('You\'ve clicked on a right arrow button!');
    counter++;
    console.log(counter);
    
    nextDots();


    //  console.log(carouselContent[counter]);
    
    //     if(!carouselContent[counter].classList.contains('left')){
    //         carouselContent[counter].classList.add('right');
    //         if(carouselContent[counter + 1].classList.contains('left')){
    //             carouselContent[counter + 1].classList.remove('left');
    //         };
    //         counter ++;
            
    //     }
       

    
});
prevButton.addEventListener('click', ()=>{
    console.log('You\'ve clicked on a left arrow button!');
    counter--;
    console.log(counter);
    previousDots();
   
  
    // console.log(carouselContent[counter]);
    // if(carouselContent[counter + 1].classList.contains('right')){
    //     carouselContent[counter].classList.add('left');
    //     carouselContent[counter + 1].classList.remove('right')
    // }
});

