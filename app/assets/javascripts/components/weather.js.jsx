var Weather = React.createClass({
  getInitialState: function() {
    return ({ iconClassName: null })
  },

  componentDidUpdate: function(prevProps) {
    if (this.props !== prevProps) {
      this.getWeather();
    }
  },

  getWeather: function() {
    var weatherURL = "http://api.openweathermap.org/data/2.5/weather?lat=" + this.props.latitude + "&lon=" + this.props.longitude + "&APPID=" + this.props.openWeatherMapApiKey;

    var that = this;

    $.get(weatherURL).done(function(response) {
      if (response.weather[0].id !== that.state.weatherCode) {
        that.buildClassName(response.weather[0].id);
      }
    });
  },

  buildClassName: function(idCode) {
    var iconClassString = "wi wi-owm-" + idCode;

    this.setState({ iconClassName: iconClassString });
  },

  render: function() {
    return (
      <div className="weather">
        <i className={this.state.iconClassName}></i>
      </div>
    )
  }
})