var Weather = React.createClass({

  componentDidUpdate: function() {
    this.getWeather();
  },

  getWeather: function() {
    console.log(this.props);

    var weatherURL = "http://api.openweathermap.org/data/2.5/weather?lat=" + this.props.latitude + "&lon=" + this.props.longitude + "&APPID=" + this.props.openWeatherMapApiKey;

    console.log(weatherURL);
    
    $.get(weatherURL).done(function(response) {
      console.log(response);
    });
  },






  render: function() {
    return (
      <p>Hello, world!</p>
    )
  }
})