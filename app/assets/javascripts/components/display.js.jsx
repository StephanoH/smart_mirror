var Display = React.createClass({

  getInitialState: function() {
    return {
      latitude: null,
      longitude: null,
      city: null,
      state: null,
    };

    this.getLocation = this.getLocation.bind(this);
  },

  componentWillMount: function() {
    this.getCoordinates();
  },

  getCoordinates: function() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setPosition);
    } else {
      alert("Geolocation is not supported.")
    }
  },

  setPosition: function(position) {
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
    this.getLocation(this.state);
  },

  getLocation: function(field) {
    var that = this;
    var googleMapsApi = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + this.state.latitude + ',' + this.state.longitude + '&key=' + this.props.googleMapsApiKey;
    $.get(googleMapsApi, function(data) {
      for (var i=0; i < data.results[0].address_components.length; i++) {
        var element = data.results[0].address_components[i];
        if (element.types[0] === "locality") {
          that.setState({
            city: element.long_name
          });          
        } else if (element.types[0] === "administrative_area_level_1") {
          that.setState({
            state: element.short_name
          });
        };
      };
    });
  },

  render: function(){
    return (
      <div>
        <h1> Latitude: {this.state.latitude} </h1>
        <h1> Longitude: {this.state.longitude} </h1>
        <h1> City: {this.state.city} </h1>
        <h1> State: {this.state.state} </h1>
      </div>
    )
  }
})