// ----------------- Parallax JS -----------------

(function(){

  var parallax = document.querySelectorAll(".parallax"),
      speed = 0.2;

  window.onscroll = function(){
    [].slice.call(parallax).forEach(function(el,i){

      var windowYOffset = window.pageYOffset,
          elBackgrounPos = "50% " + (windowYOffset * speed) + "px";

      el.style.backgroundPosition = elBackgrounPos;

    });
  };

})();



// ----------------- Google Maps JS -----------------

function initMap() {

    var DarkHorseMapType = new google.maps.StyledMapType([
        {
            stylers: [
                { hue: "#00ffe6" },
                { saturation: -100 }
            ]
        },{
            featureType: "road",
            elementType: "geometry",
            stylers: [
                { lightness: 100 },
                { visibility: "simplified" }
            ]
        },{
            featureType: "road",
            elementType: "labels",
            stylers: [
                { visibility: "off" }
            ]
        },{
            featureType: 'water',
            stylers: [
                { color: '#666666' },
                { lightness: 0}
            ]
        }
    ], {
        name: 'Dark Horse Style'
    });

    var DarkHorseMapTypeId = 'custom_style';

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: {lat: 43.6590324, lng: -79.394195},  // Toronto.
        disableDefaultUI: true,
        mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, DarkHorseMapTypeId]
        }
    });

      map.mapTypes.set(DarkHorseMapTypeId, DarkHorseMapType);
      map.setMapTypeId(DarkHorseMapTypeId);

      setMarkers(map);

}


function setMarkers(map) {

    var locations = [
        ['Spadina', 43.6506122, -79.396706, 2],
        ['East', 43.6585154, -79.3527486, 1],
        ['West', 43.6466158, -79.4075972, 3],
        ['Geary', 43.6704413, -79.4349592, 5],
        ['John', 43.6483201, -79.3902355, 4],
      ];

    var image = {
        url: 'images/star-24.png',
        size: new google.maps.Size(24, 24),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 32)
      };

    var shape = {
        coords: [1, 1, 1, 20, 18, 20, 18, 1],
        type: 'poly'
      };

    for (var i = 0; i < locations.length; i++) {
        var location = locations[i];
        var marker = new google.maps.Marker({
          position: {lat: location[1], lng: location[2]},
          map: map,
          icon: image,
          shape: shape,
          title: location[0],
          zIndex: location[3]
        });
    }
}