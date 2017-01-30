var Display = React.createClass({

  getInitialState: function() {
    return ({
      city: null,
      state: null,
      latitude: null,
      longitude: null,
      dateTime: new Date()
    });
  },

  savePosition: function(data) {
    this.setState(data);

    $.post('/location', this.state).done(function(response) {
      console.log(response);
    });
  },

  setDateTime: function(dateTime) {
    this.setState({
      dateTime = dateTime
    })
  },

  render: function() {
    return (
      <div className="container">
        <Position googleMapsApiKey={this.props.googleMapsApiKey} openWeatherMapApiKey={this.props.openWeatherMapApiKey} savePosition={this.savePosition} state={this.state}/>
        <DateTime dateTime={this.state.dateTime} setDateTime={this.setDateTime}/>
      </div>
    )
  }
})