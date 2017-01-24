var Location = React.createClass({

  componentDidMount: function() {
    this.getCoordinates();
  },

  getCoordinates: function() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setCoordinates);
    } else {
      alert("Geolocation is not supported.")
    }
  },

  setCoordinates: function(position) {
    var coordinates = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    };
    this.props.saveCoordinates(coordinates);
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

  saveLocation: function(state) {
    $.post('/location', this.state).done(function(response) {
      console.log(response);
    });
  },

  render: function(){
    return (
        <div className="location">
          <h1>{this.props.city}, {this.props.state}</h1>
        </div>
    )
  }
})