(function($) {
  $(".button-collapse").sideNav();


  if(window.innerWidth > 992) {
    $('.carousel').removeClass('carousel-slider')
    $('.carousel').carousel({
      dist: 0,
      padding: 10,
      indicators: true,
    });
  }
   else {
     $('.carousel').carousel({
       indicators: true,
       fullWidth: true
     });
   }

})(window.jQuery);
