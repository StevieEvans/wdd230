// Get HTML elements in the doc
const currentTemp = document.querySelector('#current-temp')
const weatherIcon = document.querySelector('#weather-icon')
const captionDesc = document.querySelector('#figcaption')

const url = 'https://api.openweathermap.org/data/2.5/weather?lat={49.75}&lon={6.64}&units=imperial&appid={a0ec8835c73183d9cfce4bb425a9a548}'

apiFetch = async() => {
    try{
        const response = await fetch(url)
        if (response.ok){
            const data = response.json()
            console.log(data)
        } else {
            throw Error(await response.text())
        }
    }
    catch(error){
        console.log(error)
    }
}

apiFetch()