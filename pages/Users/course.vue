<template>
<div>
    <Header></Header>
    <div id="map" style="height:100vh;">
      <div class="card">
  <b-card
        header="Où pouvons-nous vous prendre en charge ?"
        header-bg-variant="primary"
        header-text-variant="white"
        align="center"
        style="max-width: 20rem;"
    class="mb-2"
  >
  <form @submit.prevent="signup">
    <b-card-text>
      <b-form-input id="input-large" size="lg" placeholder="Spécifiez un lieu de prise en charge"></b-form-input>
      {{distance}} Km
    </b-card-text>
  </form>

    <b-button @click="getLocalisation()" variant="primary">Get your location</b-button>
  </b-card>
</div>
    </div>
    
    <Footer></Footer>
</div>
</template>

<script>
import Header from "../../components/header"
import Footer from "../../components/footer"
export default {
  components: {
    Header,
    Footer,
  },
    data(){
      return{
        distance:"",
      }
    },
    head() {
    return {
      script: [
        //{src: `https://maps.googleapis.com/maps/api/js?key=AIzaSyC7Dk2fOqlce1cTvJmJA_uoyM9RNZ1_uG4&libraries=places`}
      ]
    };
  },
  beforeMount(){
      this.googleMap()
  },
  methods: {
        googleMap() {
var mapVar= {
	center:new google.maps.LatLng(40.774102,-73.971734),
	zoom:15,
	mapTypeId: 'roadmap'
};
var map = new google.maps.Map(document.getElementById("map"),mapVar)
const dakota = {lat: 44.7767644, lng: -73.9761399}
  const frick = {lat: 40.771209, lng: -73.9673991}
var champ_elysees_Position = {lat: 48.869745,lng: 2.307946};
var mk1 = new google.maps.Marker({position: dakota, map: map})
var mk2 = new google.maps.Marker({position: frick, map: map})
var line = new google.maps.Polyline({path: [dakota, frick], map: map})
 var R = 3958.8; // Radius of the Earth in miles
      var rlat1 = mk1.position.lat() * (Math.PI/180); // Convert degrees to radians
      var rlat2 = mk2.position.lat() * (Math.PI/180); // Convert degrees to radians
      var difflat = rlat2-rlat1; // Radian difference (latitudes)
      var difflon = (mk2.position.lng()-mk1.position.lng()) * (Math.PI/180); // Radian difference (longitudes)

     var d = 2 * R * Math.asin(Math.sqrt(Math.sin(difflat/2)*Math.sin(difflat/2)+Math.cos(rlat1)*Math.cos(rlat2)*Math.sin(difflon/2)*Math.sin(difflon/2)));
     d = d.toFixed(2)*1.6
     this.distance = d.toFixed(2)
},
    getLocalisation(){
   var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 6,
  });
  var infoWindow = new google.maps.InfoWindow();
  const locationButton = document.getElementById("location");

  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
 
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
 
}


    
  }
};

</script>

<style scoped>
.custom-map-control-button {
  background-color: #fff;
  border: 0;
  border-radius: 2px;
  box-shadow: 0 1px 4px -1px rgba(0, 0, 0, 0.3);
  margin: 10px;
  padding: 0 0.5em;
  font: 400 18px Roboto, Arial, sans-serif;
  overflow: hidden;
  height: 40px;
  cursor: pointer;
}
.custom-map-control-button:hover {
  background: #ebebeb;
}

.card{
    position: absolute;
    z-index: 1;
    top: 14%;
    left: 3%;
    height: 83%;
}
</style>