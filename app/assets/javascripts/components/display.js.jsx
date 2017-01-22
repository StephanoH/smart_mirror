var Display = React.createClass({
  getInitialState: function() {
    return ({
      city: null,
      state: null,
      latitude: null,
      longitude: null
      // need to add fields for weather information
    });

    this.saveLocation = this.saveLocation.bind(this);
  },

  saveLocation: function(field, data) {
    var change = {};
    change[field] = word.target.value;
    this.setState(change);
  },

  render: function() {
    return (
    <div className="Widgets"> 
      <Location googleMapsApiKey={this.props.googleMapsApiKey} saveLocation={this.saveLocation}/>
    </div>
    )
  }
})