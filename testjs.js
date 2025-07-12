const carousel=document.getElementById('heroCarousel');
const carouselItems=document.querySelectorAll('.carousel-item');

carousel.addEventListener('slide.bs.carousel', function(e){
    const cardOpening=e.relatedTarget.querySelector('.card-opening');
    setTimeout(()=>{
        cardOpening.classList.add('open');
    },500);//adjust this delay for for card opening timing
});

carousel.addEventListener('slide.bs.carousel', function(e){
    const previousItem = e.from;
    const prevCardopening = carouselItems[previousItem].querySelector('.card-opening');

    prevCardopening.classList.remove('open');
});

//bellow are login an sign in page function
//fake validation cresdential
const validUsername = "user";
const validPassword = "password";


//valid login function
function validateLogin(event) {
    event.preventDefault();
    // hide error ,message
    document.getElementById('errorMessage').style.display = "none";
    document.querySelector('.loader').style.display = "block";

    //simulate validation delay with setTimeOut
    setTimeout(() => {
        //get enter values
       const username = document.getElementById('username').value;
       const password = document.getElementById('password').value;

       //check if the enter cresdential is correct
       if(username === validUsername && password === validPassword){
        alert("login succcesful!");
        console.log('correct');
        //retricting any other action
       } else {
        document.getElementById('errorMessage').style.display = "block";
        document.querySelector('.loader').style.display = "none";
        console.log('not correct');
       };

    }, 1500);
};


