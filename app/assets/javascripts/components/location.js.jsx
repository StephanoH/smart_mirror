var Location = React.createClass({

  getInitialState: function() {
    return {
      latitude: null,
      longitude: null,
      city: null,
      state: null,
    };
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
      that.saveLocation(that.state);
    });
  },

  saveLocation: function(state) {
    console.log(state);
    $.post('/location', this.state).done(function(response) {
      console.log(response);
    });
  },

  render: function(){
    return (
      <div>
        <h1>{this.state.city}, {this.state.state}</h1>
      </div>
    )
  }
})