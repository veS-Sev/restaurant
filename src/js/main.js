$(function () {
  var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    spaceBetween: 0,
    centeredSlides: true,
    effect: 'fade',
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
   
  });

  var mixer = mixitup('.mix-container', {
    load: {
      filter: '.category-a',
      sort: 'myorder:desc'
    }
  });



});

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


//   var $datepicker = $('#datepicker').pikaday({
//     firstDay: 1,
//     minDate: new Date('2000-01-01'),
//     maxDate: new Date('2020-12-31'),
//     yearRange: [2000,2020]
// });
// // chain a few methods for the first datepicker, jQuery style!
// $datepicker.pikaday('show').pikaday('nextMonth');

