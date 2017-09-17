(function($) {
  $(".button-collapse").sideNav();

  $('#next').on('click', function (){
    $('.carousel').carousel('next');
  })
  $('#prev').on('click', function (){
    $('.carousel').carousel('prev');
  })


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
