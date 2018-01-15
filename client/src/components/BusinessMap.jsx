import React from 'react';

const BusinessMap = (props) => {
  const initMap = () => {
    var uluru = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }
  return (
    <div id="map">
    <script async defer
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCkUOdZ5y7hMm0yrcCQoCvLwzdM6M8s5qk">
    </script>
    </div>
  )
}

export default BusinessMap;
