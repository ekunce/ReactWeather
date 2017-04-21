var React = require('react')

var WeatherMessage = React.createClass({
    render () {
        var {location, temp} = this.props
        
        return (
            <h3>It is {temp} in {location}.</h3>
        )
    }
})

module.exports = WeatherMessage