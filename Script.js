function getWeather() {
    const apiKey = "YOUR_API_KEY"; // Replace with your API key
    const city = document.getElementById("cityInput").value;
    const weatherInfo = document.getElementById("weatherInfo");

    if (city === "") {
        weatherInfo.innerHTML = "Please enter a city name.";
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                weatherInfo.innerHTML = `
                    <h3>${data.name}, ${data.sys.country}</h3>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                `;
            } else {
                weatherInfo.innerHTML = "City not found!";
            }
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            weatherInfo.innerHTML = "An error occurred. Try again.";
        });
}
