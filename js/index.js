$(function(){
  $('.page-container').fullpage({
    navigation: true,
    navigationPosition: 'right'
  });
	
  function init() {
    $('[data-behaviour="toggle-menu-icon"]').on('click', toggleMenuIcon);
    $('[data-behaviour="toggle-link-icon"]').on('click', toggleSubMenu);
  }
  
  function toggleMenuIcon() {
    $(this).toggleClass('menu-icon--open');
    $('[data-element="toggle-nav"]').toggleClass('nav--active');
  }
  
  function toggleSubMenu() {
    $(this).toggleClass('nav__link--plus nav__link--minus');
    $('[data-behaviour="toggle-sub-menu"]').slideToggle('nav__sub-list--active');
  }
  
  init();
});


jQuery(document).ready(function($) {
  $(document).ready(function() { /* google maps -----------------------------------------------------*/
    google.maps.event.addDomListener(window, 'load', initialize);

    function initialize() {

      /* position Chicago */
      var latlng = new google.maps.LatLng(-18.96927,29.499435);
      var mapOptions = {
        zoomControl: true,
        zoomControlOptions: {
          position:         
          google.maps.ControlPosition.LEFT_TOP
          },
        center: latlng,
        scrollwheel: false,
        zoom: 9,
        /* More styles at https://snazzymaps.com */
        styles: [{
          "featureType": "landscape",
          "stylers": [{
            "saturation": -100
          }, {
            "lightness": 65
          }, {
            "visibility": "on"
          }]
        }, {
          "featureType": "poi",
          "stylers": [{
            "saturation": -100
          }, {
            "lightness": 51
          }, {
            "visibility": "simplified"
          }]
        }, {
          "featureType": "road.highway",
          "stylers": [{
            "saturation": -100
          }, {
            "visibility": "simplified"
          }]
        }, {
          "featureType": "road.arterial",
          "stylers": [{
            "saturation": -100
          }, {
            "lightness": 30
          }, {
            "visibility": "on"
          }]
        }, {
          "featureType": "road.local",
          "stylers": [{
            "saturation": -100
          }, {
            "lightness": 40
          }, {
            "visibility": "on"
          }]
        }, {
          "featureType": "transit",
          "stylers": [{
            "saturation": -100
          }, {
            "visibility": "simplified"
          }]
        }, {
          "featureType": "administrative.province",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "water",
          "elementType": "labels",
          "stylers": [{
            "visibility": "on"
          }, {
            "lightness": -25
          }, {
            "saturation": -100
          }]
        }, {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [{
            "hue": "#ffff00"
          }, {
            "lightness": -25
          }, {
            "saturation": -97
          }]
        }]

        /* End Styles */
      };

// Create our info window content   
    var infoWindowContent = '<div class="info_content">' +
        '<h3>My Location</h3>' +
        '<p>This is where you put information about this address</p>' +
    '</div>';

    // Initialise the inforWindow
    var infoWindow = new google.maps.InfoWindow({
        content: infoWindowContent
    });
      
      var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
      marker.setMap(map);
    };
    /* end google maps -----------------------------------------------------*/
  });
});