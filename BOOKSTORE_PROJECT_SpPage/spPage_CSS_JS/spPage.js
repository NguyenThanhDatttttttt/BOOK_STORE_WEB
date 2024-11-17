$(document).ready(function(){
    $('.section-container').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: false,
        // draggable: true,
        // autoplay: true,
        autoplaySpeed: 5000,
        vertical: false,   
        verticalSwiping: false,
        prevArrow:"<button type='button' class='slick-prev pull-left slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        dots: true,
        responsive: [
            {
                breakpoint: 1024, 
                settings: {
                    slidesToShow: 4, 
                    
                }
            },
            {
                breakpoint: 600, 
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });
});



