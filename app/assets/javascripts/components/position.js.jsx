var Position = React.createClass({

  componentWillMount: function() {
    this.getCoordinates();
  },

  getCoordinates: function() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getCityAndState);
    } else {
      alert("Geolocation is not supported.")
    }
  },

  getCityAndState: function(position) {
    var location = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    };
    var locationURL = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + location.latitude + ',' + location.longitude + '&key=' + this.props.googleMapsApiKey;
    var that = this;
    var distance = this.distanceChecker(location["latitude"], location["longitude"], this.props.state.latitude, this.props.state.longitude)

    // If there is no saved coordinates, or the difference between new and old coordinates is greater than 1 km
    if (distance > 1 || this.props.state.latitude === null) {

      // Hit GoogleMaps for city and state
      $.get(locationURL).done(function(response) {
        for (var i = 0; i < response.results[0].address_components.length; i++) {
          var element = response.results[0].address_components[i];

          if (element.types[0] === "locality") {
            location["city"] = element.long_name;
          } else if (element.types[0] === "administrative_area_level_1") {
            location["state"] = element.short_name;
          }
        };

        // Save lat, lon, city, and state to parent state.
        that.props.savePosition(location);
      });
    }
  },

  distanceChecker: function(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = (lat2-lat1) * (Math.PI/180);
    var dLon = (lon2-lon1) * (Math.PI/180); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * (Math.PI/180)) * Math.cos(lat2 * (Math.PI/180)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d;
  },

  render: function(){
    return (
      <div className="position module">
        <Weather latitude={this.props.state.latitude} longitude={this.props.state.longitude} openWeatherMapApiKey={this.props.openWeatherMapApiKey}/>
        <p className="location">{this.props.state.city}, {this.props.state.state}</p>
      </div>
    )
  }
})