(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space


// Carousel

$('.carousel.carousel-slider').carousel({
  fullWidth: true,
  indicators: true
});