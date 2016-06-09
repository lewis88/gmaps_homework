var init = function(){
  var center = geolocator();
  var map = new Map( center, 15);
  // map.addMarker( center, "1" );
  // map.addMarker( jenners, "2" );
  //
  // var newCLick = map.bindClick();
  //console.log( map, "map" );
  // var locator = new GeoLocator( map );
  // console.log( locator );
  // locator.setMapCenter();
  map.addInfoWindow( center, "my info window");
}

var geolocator = function(){
  navigator.geolocation.getCurrentPosition( function( position ){
    return { lat: position.coords.latitude, lng: position.coords.longitude }
  }
}

var GeoLocator = function( map ){
  this.map = map;
  this.setMapCenter = function(){
    navigator.geolocation.getCurrentPosition( function( position ){
      var center = { lat: position.coords.latitude, lng: position.coords.longitude }
      this.map.resetCenter( center ); // setCenter( center );
      this.map.addMarker( center );
    }.bind(this) );
  }
}



window.onload = init;
