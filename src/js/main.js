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

//   var $datepicker = $('#datepicker').pikaday({
//     firstDay: 1,
//     minDate: new Date('2000-01-01'),
//     maxDate: new Date('2020-12-31'),
//     yearRange: [2000,2020]
// });
// // chain a few methods for the first datepicker, jQuery style!
// $datepicker.pikaday('show').pikaday('nextMonth');



// var mymap = L.map('mapid').setView([51.505, -0.09], 13);
// var myIcon = L.icon({
//   iconUrl: 'C:/Users/newse/Desktop/marker.png',
//   iconSize: [38, 95],
//   iconAnchor: [22, 94],
//   popupAnchor: [-3, -76],
//   });

// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
//   maxZoom: 18,
//   attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
//     '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
//     'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//   id: 'mapbox/streets-v11',
//   tileSize: 512,
//   zoomOffset: -1
// }).addTo(mymap);

// L.marker([50.505, 30.57], {icon: myIcon}).addTo(mymap);

// 


});

let mapOptions = {
  center: [52.27959,104.31101],
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
let marker = L.marker([52.27959,104.31101], markerOptions);

// Adding popup to the marker
// marker.bindPopup('Добро пожаловать!').openPopup();

// Adding marker to the map
marker.addTo(map);
// https://openstreetmap.ru/#mmap=17/52.27953/104.311




