let Navbar = document.querySelector('.navbar');
let Fabars = document.querySelector('.fa-bars');

Fabars.onclick = () =>{
    Navbar.classList.toggle("active")
};

var swiper = new Swiper(".home-slid", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

var swiper = new Swiper(".team-slider", {
    slidesPerView: 1.2,
    spaceBetween: 10,
    breakpoinys:{
        "0":{
            slidesPerView: 1,
            autoplay:{
                delay:700,
                disbleOnInteraction:false,
            },
        },
        "768":{
            slidesPerView:2,
        },
        "1020":{
            slidesPerView:2,
        },
    }
  });