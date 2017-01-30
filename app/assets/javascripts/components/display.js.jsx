var Display = React.createClass({

  getInitialState: function() {
    var dateTime = new Date();

    return ({
      city: null,
      state: null,
      latitude: null,
      longitude: null,
      dateTime: dateTime
    });
  },

  componentDidMount: function() {
    window.setInterval(function() {
      this.setDateTime()
    }.bind(this), 1000);
  },

  savePosition: function(data) {
    this.setState(data);

    $.post('/location', this.state).done(function(response) {
      console.log(response);
    });
  },

  setDateTime: function() {
    var dateTime = new Date();
    this.setState({
      dateTime: dateTime.toString()
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