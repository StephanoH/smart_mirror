var Display = React.createClass({

  getInitialState: function() {
    return {
      latitude: null,
      longitude: null,
    };
  },

  componentWillMount: function() {
    this.getLocation();
  },

  getLocation: function() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.savePosition);
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