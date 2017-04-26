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
      }