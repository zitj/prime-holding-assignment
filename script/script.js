console.log('We are connected!');

const hero = document.querySelector('.hero');
const carouselContent = hero.querySelectorAll('.text');
const arrowButtons = hero.querySelectorAll('.carouselButton');
const carouselDots = hero.querySelectorAll('.dot');
const prevButton = arrowButtons[0];
const nextButton = arrowButtons[1];
let counter = 0; 


const reset = () =>{
    for(let i = 0; i < carouselContent.length; i++){
        carouselContent[i].style.display = 'none';
        carouselDots[i].classList.remove('active');
    }
}

const sliding = e => {
    reset();
    carouselContent[e].style.display = 'block';
    carouselDots[e].classList.add('active');
}

const startSlide = () =>{
    sliding(0);
}

const showPrevious = () =>{
    sliding(counter - 1);
    counter--;
}
const showNext = () =>{
    sliding(counter + 1);
    counter++;
    
}
startSlide();
nextButton.addEventListener('click', ()=>{
    console.log(`${counter} You\'ve clicked on a right arrow button!`);
    if(counter >= carouselContent.length - 1){
        counter = -1;
        startSlide();
        
    }
    showNext();
});
prevButton.addEventListener('click', ()=>{
    console.log(`${counter} You\'ve clicked on a left arrow button!`);
    if(counter === 0){
        counter = carouselContent.length;
    }
    showPrevious();
});

