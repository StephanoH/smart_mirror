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

    $.get(locationURL).done(function(response) {
      for (var i = 0; i < response.results[0].address_components.length; i++) {
        var element = response.results[0].address_components[i];

        if (element.types[0] === "locality") {
          location["city"] = element.long_name;
        } else if (element.types[0] === "administrative_area_level_1") {
          location["state"] = element.short_name;
        }
      };

      that.props.savePosition(location);
    });
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