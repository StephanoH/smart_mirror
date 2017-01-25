var Display = React.createClass({

  getInitialState: function() {
    return ({
      city: null,
      state: null,
      latitude: null,
      longitude: null
    });

  },

  saveLocation: function(data) {
    this.setState(data);

    $.post('/location', this.state).done(function(response) {
      console.log(response)
    });
  },

  render: function() {
    return (
      <div className="container">
        <Location googleMapsApiKey={this.props.googleMapsApiKey} saveLocation={this.saveLocation} state={this.state}/>
      </div>
    )
  }
})