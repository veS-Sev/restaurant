$(function () {

  var swiper = new Swiper('.header__swiper-container', {
    direction: 'vertical',
    spaceBetween: 4000,
    effect: 'fade',
    pagination: {
      el: '.header__swiper-pagination',
      clickable: true,
    },
  });

  // $( "#datepicker" ).datepicker();


  var mixer = mixitup('.mix-container',{
    load:{
    filter:'.category-a',
    sort:'myorder:desc'
    }
  });
});

