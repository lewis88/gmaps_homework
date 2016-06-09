// Map constructor
var Map = function( latLng, zoom ){

  // call to googlemaps to get the google map() constructor
  this.googleMap = new google.maps.Map( document.getElementById( 'map' ), {
    center: latLng, zoom: zoom } );
  // the first element tells the constructor where we are putting it, the second part
  // {} is the options object which is the setup for the maps position

  this.addMarker = function( latLng, label ){
    var marker = new google.maps.Marker( { position: latLng, map: this.googleMap, label: label } );
    // create a google maps marker (also takes an options objet {})
    // Note that the label marker takes in a string
    return marker
  }

  this.addInfoWindow = function( latLng, title ){
    var marker = this.addMarker( latLng, title );
    var infoWindow = new google.maps.InfoWindow({ content: title });
    marker.addListener('click', function(){
      infoWindow.open( this.map, this );
    });
  }

  this.resetCenter = function( latLng ){
    this.googleMap.setCenter( latLng ); // or panTo( latLng )
  }
}
