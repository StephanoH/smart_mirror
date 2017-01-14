var Display = React.createClass({

  getInitialState: function() {
    return {
      latitude: null,
      longitude: null,
      city: null,
      state: null,
    };
  },

  componentWillMount: function() {
    this.getLocation();
  },

  getLocation: function() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.savePosition);
      $.GET(
        url: 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + this.state.latitude + ',' + this.state.longitude + '&key=AIzaSyBjzaL0Xq0nQNX2z-_5JDP0V8YOm6myLKM', 
      ).done(function(response){
        console.log(response);
      });
    } else {
      alert("Geolocation is not supported.")
    }
  },

  savePosition: function(position) {
    console.log(position.coords.latitude),

    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  },

  render: function(){
    return (
      <div>
        <h1> Latitude: {this.state.latitude} </h1>
        <h1> Longitude: {this.state.longitude} </h1>
      </div>
    )
  }
})