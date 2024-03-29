const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/71ece2473f57951f60d3e0f5251b1821/' + latitude + ',' + longitude + '?units=ca'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to forecast service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out and the humidity is ' + body.currently.humidity*100 + '%. There is a ' + body.currently.precipProbability + ' chance of rain')    
        }
    })
}

module.exports = forecast