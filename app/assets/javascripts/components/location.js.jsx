var Location = React.createClass({

// Need to restructure this component so that it has no state, instead receives props from Display's states and update their values based on the fuctionality in this component.

  // getInitialState: function() {
  //   return {
  //     latitude: null,
  //     longitude: null,
  //     city: null,
  //     state: null,
  //   };
  // },

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

  setPosition: function(field, change) {
    // this.setState({
      // latitude: position.coords.latitude,
      // longitude: position.coords.longitude,
    // });
    this.savePostion(this, position.coords.latitude);
    // this.getLocation(this.state);
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
        <div className="weather">
          <Weather lat={this.props.latitude} lon={this.props.longitude}/>
        </div>
        <div className="location">
          <h1>{this.props.city}, {this.props.state}</h1>
        </div>
      </div>
    )
  }
})