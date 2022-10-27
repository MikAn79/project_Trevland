$(document).ready(function(){
  $(".sliders").slick({
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow:
      "<button type='button' class='btn-slick-prev btn-slider'><img src='img/icons/prev.svg' alt=''></button>",
    nextArrow:
      "<button type='button' class='btn-slick-next btn-slider'><img src='img/icons/next.svg' alt=''></button>",
  });
});