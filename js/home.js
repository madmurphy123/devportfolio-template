    if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }).catch(function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

 var pos = {
              lat: 0,
              lng: 0
            };

 function initMap() {
        var uluru = {lat: 53.009111, lng: -2.176581 };
        var map = new google.maps.Map(document.getElementById('googlemap'), {
          zoom: 15,
          center: uluru,
          scrollwheel: false
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });

      

        // map.addListener(map, 'click', find_closest_marker);

      document.getElementById("distance").addEventListener("click", function (event) {
          var lat = pos.lat;
    var lng =  pos.lng;
    var R = 6371; // radius of earth in km
    var distances = [];
    var closest = -1;
  
        var mlat = marker.position.lat();
        var mlng = marker.position.lng();
        var dLat  = rad(mlat - lat);
        var dLong = rad(mlng - lng);
        var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(rad(lat)) * Math.cos(rad(lat)) * Math.sin(dLong/2) * Math.sin(dLong/2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        var d = R * c;
  

    var result = d.toFixed(2) + "km";

     document.getElementById("distanceResult").innerHTML = result;

      });


        infoWindow = new google.maps.InfoWindow;    

       if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }

        

      function rad(x) {return x*Math.PI/180;}



