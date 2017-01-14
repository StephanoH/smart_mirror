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
    var googleMapsApi = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + this.state.latitude + ',' + this.state.longitude + '&key=' + this.props.google_maps_api_key;
    $.get(googleMapsApi, function(data) {
      that.setState({
        city: data.results[0].address_components[3].long_name,
        state: data.results[0].address_components[5].short_name
      });
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