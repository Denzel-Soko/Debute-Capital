$('.slick_slide').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
   autoplay: false,
  // autoplaySpeed: 2000,
  // prevArrow:<i class="fas fa-arrow-right"></i>,
  // prevArrow:<i class="fas fa-arrow-right"></i> 
    nextArrow:'<i  class ="fas fa-angle-left left_arrow"></i>',
   prevArrow:'<i  class ="fas fa-angle-right_arrow"></i>',
  
  
});
$('.slick_slide').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
   autoplay: false,
  // autoplaySpeed: 2000,
  // prevArrow:<i class="fas fa-arrow-right"></i>,
  // prevArrow:<i class="fas fa-arrow-right"></i> 
    nextArrow:'<i  class ="fas fa-angle-left left_arrow"></i>',
   prevArrow:'<i  class ="fas fa-angle-right_arrow"></i>',
  
  
});




$('.center').slick({
  centerMode: true,
  
  centerPadding: '60px',
  slidesToShow: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  nextArrow:'<i  class ="fas fa-arrow-left left_arrow">',
  prevArrow:'<i  class ="fas fa-arrow-right right_arrow">',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3

      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});









