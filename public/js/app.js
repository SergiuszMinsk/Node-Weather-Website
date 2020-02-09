const messageOne = document.querySelector('.message-1')
const messageTwo = document.querySelector('.message-2')
const form = document.querySelector('form')
const searchInput = document.querySelector('input')

const fetchWeather = (location) => {
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    fetch(`http://localhost:3000/weather?address=${location}`).then(response => {
        response.json().then(({ error, forecast, location }) => {
            if (error) {
                return messageOne.textContent = error
            }
            messageOne.textContent = location
            messageTwo.textContent = forecast
        })
    })
}

form.addEventListener('submit', event => {
    event.preventDefault()
    const location = searchInput.value
    fetchWeather(location)
})