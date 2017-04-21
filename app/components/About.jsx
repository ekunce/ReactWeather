var React = require('react')

var About = (props) => {
    return (
        <div>
            <h1 className="text-center">About</h1>
            <p>This is a weather application built on React. I have built this for learning purposes</p>
            <p>
                Here are some of the tools used:
            </p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a> - JS framework used
                </li>
                <li>
                    <a href="http://openweathermap.org">Open Weather Map</a> - Used for weather data
                </li>
            </ul>
        </div>
    )
}

module.exports = About