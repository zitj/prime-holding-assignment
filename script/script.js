console.log('We are connected!');

const hero = document.querySelector('.hero');
const carouselContent = hero.querySelectorAll('.text');
const arrowButtons = hero.querySelectorAll('.carouselButton');
const prevButton = arrowButtons[0];
const nextButton = arrowButtons[1];
let counter = 1; 

console.log(carouselContent[counter]);


nextButton.addEventListener('click', ()=>{
    console.log('You\'ve clicked on a right arrow button!');
    counter++;
    console.log(counter);
    
    if(counter >= carouselContent.length - 1){
        counter = 0;
    }
   
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
    
    if(counter <= 0){
        counter = carouselContent.length;
    }

    // console.log(carouselContent[counter]);
    // if(carouselContent[counter + 1].classList.contains('right')){
    //     carouselContent[counter].classList.add('left');
    //     carouselContent[counter + 1].classList.remove('right')
    // }
});

