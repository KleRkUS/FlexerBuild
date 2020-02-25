jQuery(function($){
  $(document).ready(function(){
    $('.slickslider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1234000,
        arrows: false,
        pauseOnFocus: false
    });
  });
});