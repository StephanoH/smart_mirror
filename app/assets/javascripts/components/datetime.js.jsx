var DateTime = React.createClass({

  getInitialState: function() {
    return ({
      dateTime: new Date()
    });
  },

  componentDidMount: function() {
    window.setInterval(function() {
      this.setDateTime()
    }.bind(this), 1000);
  },

  setDateTime: function() {
    var dateTime = new Date();
    this.setState({
      dateTime: dateTime
    });
  },


  showTime: function() {
    var hours = this.state.dateTime.getHours();
    var minutes = ("0" + this.state.dateTime.getMinutes()).slice(-2);
    var amPM = " AM";

    if (hours > 12) {
      hours -= 12;
      amPM = " PM";
    }

    var displayedTime = hours + ":" + minutes + amPM;

    return displayedTime
  },

  showDate: function() {
    var day = this.state.dateTime.getDay();
    var month = this.state.dateTime.getMonth();
    var date = this.state.dateTime.getDate();
    var weekday = {
      0: "Sunday",
      1: "Monday",
      2: "Tuesday",
      3: "Wednesday",
      4: "Thursday",
      5: "Friday",
      6: "Saturday"
    };
    var months = {
      0: "January",
      1: "February",
      2: "March",
      3: "April",
      4: "May",
      5: "June",
      6: "July",
      7: "August",
      8: "September",
      9: "October",
      10: "November",
      11: "December"
    };
    var displayedDate = weekday[day] + ", " + months[month] + " " + date;

    return displayedDate

  },

  render: function() {
    return (
      <div className="datetime module">
        <p className="time">{this.showTime()}</p>
        <p className="date">{this.showDate()}</p>
      </div>
    )
  }
}) 