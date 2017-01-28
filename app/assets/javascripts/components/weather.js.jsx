var Weather = React.createClass({
  getInitialState: function() {
    return ({ 
      iconClassName: null,
      temp: null 
    });
  },

  componentDidUpdate: function(prevProps) {
    if (this.props !== prevProps) {
      this.getWeather();
    }
  },

  getWeather: function() {
    var weatherURL = "http://api.openweathermap.org/data/2.5/weather?lat=" + this.props.latitude + "&lon=" + this.props.longitude + "&units=imperial&APPID=" + this.props.openWeatherMapApiKey;

    var that = this;

    $.get(weatherURL).done(function(response) {

      var weatherIdCode = response.weather[0].id;
      var temp = Math.round(response.main.temp);

      if (response.weather[0].id !== that.state.weatherCode || temp !== that.state.temp) {
        that.saveWeather(weatherIdCode, temp);
      }
    });
  },

  saveWeather: function(idCode, temp) {
    var iconClassString = "wi wi-owm-" + idCode;

    this.setState({ 
      iconClassName: iconClassString,
      temp: temp 
    });
  },

  render: function() {
    return (
      <div className="weather">
        <p className="temperature">{this.state.temp}°F</p>
        <i className={this.state.iconClassName}></i>
      </div>
    )
  }
})