<template>
<div>
    <Header></Header>
      <div class="card">
  <b-card
        header="Où pouvons-nous vous prendre en charge ?"
        header-bg-variant="primary"
        header-text-variant="white"
        align="center"
        style="max-width: 20rem; z-index: 1;"
    class="mb-2"
    id="titlecard"
  >
    <b-card-text>
          <input
        id="origin-input"
        type="text"
        placeholder="Spécifiez un lieu de prise en charge"
      />

      <input
        id="destination-input"
        type="text"
        placeholder="Saissisez votre destination"
      />
     
    </b-card-text>

    <button id="commande" :disabled="isActive"  variant="primary">Commander votre Rebu</button>
  </b-card>
</div>
      <div id="map" style="height:100vh;">
  </div>

    

    <Footer></Footer>
</div>
</template>

<script>
class AutocompleteDirectionsHandler {
  map;
  originPlaceId;
  destinationPlaceId;
  travelMode;
  directionsService;
  directionsRenderer;
  isActive;
  constructor(map,isActive) {
    this.map = map;
    this.isActive = isActive
    this.originPlaceId = "";
    this.destinationPlaceId = "";
    this.travelMode = google.maps.TravelMode.DRIVING;
    this.directionsService = new google.maps.DirectionsService();
    this.directionsRenderer = new google.maps.DirectionsRenderer();
    this.directionsRenderer.setMap(map);
    const originInput = document.getElementById("origin-input");
    const destinationInput = document.getElementById("destination-input");
    const originAutocomplete = new google.maps.places.Autocomplete(originInput);
    originAutocomplete.setFields(["place_id"]);
    originAutocomplete.setComponentRestrictions({
    country: ["fr"],
  });
    const destinationAutocomplete = new google.maps.places.Autocomplete(
      destinationInput
    );
    
    destinationAutocomplete.setFields(["place_id"]);
   
    this.setupPlaceChangedListener(originAutocomplete, "ORIG");
    this.setupPlaceChangedListener(destinationAutocomplete, "DEST");
  
  }
 

  setupPlaceChangedListener(autocomplete, mode) {
    autocomplete.bindTo("bounds", this.map);
    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();

      if (!place.place_id) {
        window.alert("Please select an option from the dropdown list.");
        return;
      }

      if (mode === "ORIG") {
        this.originPlaceId = place.place_id;
      } else {
        this.destinationPlaceId = place.place_id;
      }
      this.route()
    });
  }
  route() {
    if (!this.originPlaceId || !this.destinationPlaceId) {
      return;
    }
    const me = this;
    this.directionsService.route(
      {
        origin: { placeId: this.originPlaceId },
        destination: { placeId: this.destinationPlaceId },
        travelMode: this.travelMode,
      },
      (response, status) => {
        if (status === "OK") {
          me.directionsRenderer.setDirections(response);
          console.log(this.isActive)
          this.isActive = false
                    console.log(this.isActive)

        } else {
          window.alert("Directions request failed due to " + status);
        }
      }
    );
  }

}


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
       isActive: true,
      }
    },
    mounted(){    
      this.initMap()
    },

  methods: {
        initMap() {
 
  const map = new google.maps.Map(document.getElementById("map"), {
    mapTypeControl: false,
    center: { lat: 46.7111, lng: 1.7191},
    zoom: 6,
  });
new AutocompleteDirectionsHandler(map,this.isActive);
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
      handleLocationError(false, infoWindow, map.getCenter());
    }
 
},

 


    
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