var Display = React.createClass({
  getInitialState: function() {
    return ({
      city: null,
      state: null,
      latitude: null,
      longitude: null
    });

  },

  saveCoordinates: function(data) {
    console.log(data);    
    // this.setState(change);
    // console.log(this.state);
  },

  render: function() {
    return (
      <div className="weather-location"> 
        <Location googleMapsApiKey={this.props.googleMapsApiKey} saveCoordinates={this.saveCoordinates} city={this.state.city} state={this.state.state}/>
      </div>
    )
  }
})