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

 
  var mixer = mixitup('.mix-container', {
    load: {
      filter: '.category-a',
      sort: 'myorder:desc'
    }
  });

  var $datepicker = $('#datepicker').pikaday({
    firstDay: 1,
    minDate: new Date('2000-01-01'),
    maxDate: new Date('2020-12-31'),
    yearRange: [2000,2020]
});
// chain a few methods for the first datepicker, jQuery style!
$datepicker.pikaday('show').pikaday('nextMonth');

 
});




