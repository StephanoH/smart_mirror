var Display = React.createClass({
  render: function() {
    return (
    <div>
      <Location googleMapsApiKey={this.props.googleMapsApiKey}/>
    </div>
    )
  }
})