var Weather = React.createClass({
  getInitialState: function() {
    return ({ 
      iconClassName: null,
      temp: null 
    });
  },

  // get weather every 15 minutes
  componentDidMount: function() {
    window.setInterval(function() {
      this.getWeather();
    }.bind(this), 900000);
  },

  // get weather if coordinates sent by Display changes
  componentDidUpdate: function(prevProps) {
    if (this.props !== prevProps) {
      this.getWeather();
    }
  },

  // call weather API and call save function
  getWeather: function() {
    var weatherURL = "http://api.openweathermap.org/data/2.5/weather?lat=" + this.props.latitude + "&lon=" + this.props.longitude + "&units=imperial&APPID=" + this.props.openWeatherMapApiKey;

    var that = this;

    $.get(weatherURL).done(function(response) {
      console.log(response);

      var weatherIdCode = response.weather[0].id;
      var temp = Math.round(response.main.temp);

      that.saveWeather(weatherIdCode, temp);
    });
  },

  // format className from idCode and save to state
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