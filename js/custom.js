     
$('.slider-main').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  dots: true,
  autoplaySpeed: 10000,
  responsive: [
  
  {
  breakpoint: 992,
  settings: {
  slidesToShow: 1,
  slidesToScroll: 1
  }
  },
  {
  breakpoint: 525,
  settings: {
  slidesToShow: 1,
  slidesToScroll: 1
  }
  }
  
  ]
  
  });