let getTemp = document.getElementById('temperature').textContent
let getWind = document.getElementById('windspeed').textContent

let temperature = parseInt(getTemp, 10)
let wind = parseInt(getWind, 10)

let windChill = 35.74 + (0.6215 * temperature) - (35.75 * (wind ** 0.16)) + (0.4275 * temperature * (wind ** 0.16))

document.getElementById('windchill').textContent = windChill.toFixed(1)