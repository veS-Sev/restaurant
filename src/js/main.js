$(function () {
  var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    spaceBetween: 0,
    centeredSlides: true,
    effect: 'fade',
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

  });
  var mixer = mixitup('.mix-container', {
    load: {
      filter: '.category-c',
      sort: 'myorder:desc'
    }
  });


  // var picker = new Pikaday({ field: document.getElementById('datepicker') });
  
 

  var field = document.getElementById('datepicker');

  field.addEventListener('click', function () {
    var picker = new Pikaday({
      format: 'DD MMM YYYY',
      firstDay: 1,
      // minDate: null,
      // yearSuffix: 'года',
      // showDaysInNextAndPreviousMonths: true,
      i18n: {
        previousMonth : 'Previous Month',
        nextMonth     : 'Next Month',
        months        : ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        weekdays      : ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'],
        weekdaysShort : ['Вс','Пн','Вт','Ср','Чт','Пт','Сб']
    },
      onSelect: function (date) {
        // field.value = picker.toString();
        // let dateClick = this.getMoment().format('D MMM YYYY');
        // console.log(this.getMoment().format('Do MMMM YYYY'));
        field.value = picker.toString();
       
      }
    });
    // picker.toString('DD-MM-YYYY');
    field.parentNode.insertBefore(picker.el, field.nextSibling);
    // toString(date, format = 'YYYY-MM-DD')
    
  });


  // var picker = new Pikaday({ field: $('#datepicker')[0] });


  $('.menu__btn').on('click', function () {
    $('.header__navigation-inner').slideToggle(1000);
    $('.menu__btn-line').toggleClass('inert-menu');
  });
});


if ($(window).width() > 899) {
  $('.header__banner-arrow').attr("href", "#restaurant");
}



let mapOptions = {
  center: [52.27959, 104.31101],
  zoom: 18
}
// Creating a map object
let map = new L.map('map', mapOptions);

// Creating a Layer object
let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

// Adding layer to the map
map.addLayer(layer);

// Icon options
let iconOptions = {
  iconUrl: 'images/map/marker.png',
  iconSize: [24, 32]
}
// Creating a custom icon
let customIcon = L.icon(iconOptions);

// Creating Marker Options
let markerOptions = {
  // title: "HisLocation",
  // clickable: true,
  // draggable: true,
  icon: customIcon
}
// Creating a Marker
let marker = L.marker([52.27959, 104.31101], markerOptions);

// Adding popup to the marker
// marker.bindPopup('Добро пожаловать!').openPopup();

// Adding marker to the map
marker.addTo(map);
// https://openstreetmap.ru/#mmap=17/52.27953/104.311