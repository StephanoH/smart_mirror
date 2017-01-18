var Display = React.createClass({
  render: function() {
    return (
    <div className="Widgets"> 
      <Location googleMapsApiKey={this.props.googleMapsApiKey}/>
    </div>
    )
  }
})