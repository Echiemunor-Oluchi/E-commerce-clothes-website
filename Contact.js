$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
autoplayTimeout:2000,
autoplayHoverPause:false,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

});

