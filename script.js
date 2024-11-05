const apiKey = 'bd5e378503939ddaee76f12ad7a97608'; 

document.getElementById('getWeather').addEventListener('click', () => {
    const location = document.getElementById('location').value;
    fetchWeather(location);
});

async function fetchWeather(location) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
    
    try {
        const response = await fetch(url);
        console.log(response); // Log response to check if it's correct
        if (!response.ok) {
            throw new Error('Location not found');
        }
        const data = await response.json();
        console.log(data); // Log data to see what is returned
        displayWeather(data);
    } catch (error) {
        document.getElementById('weatherResult').innerHTML = `<p>${error.message}</p>`;
    }
}

function displayWeather(data) {
    const weatherDiv = document.getElementById('weatherResult');
    const { main, weather, name } = data;
    weatherDiv.innerHTML = `
        <h2>${name}</h2>
        <p>Temperature: ${main.temp} °C</p>
        <p>Conditions: ${weather[0].description}</p>
        <p>Humidity: ${main.humidity}%</p>
    `;
}
