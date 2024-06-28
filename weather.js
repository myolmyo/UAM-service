document.addEventListener('DOMContentLoaded', function() {
    fetchWeather();
    fetchTraffic();
});

function fetchWeather() {
    const apiKey = 'f384c135c4cde7a36e56285c8baada7e'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Incheon&appid=${apiKey}&units=metric`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = `${data.main.temp}°C, ${data.weather[0].description}`;
        document.getElementById('current-weather').textContent = weather;
    })
    .catch(error => console.error('Error fetching weather data:', error));
}

function fetchTraffic() {
    
    const exampleTrafficData = [
        { road: '고속도로 1', status: '정체', expectedDelay: '15분' },
        { road: '고속도로 2', status: '원활', expectedDelay: '없음' },
        { road: '도심 도로', status: '약간 정체', expectedDelay: '5분' },
    ];

    let trafficInfo = '';
    exampleTrafficData.forEach(traffic => {
        trafficInfo += `${traffic.road}: ${traffic.status} (예상 지연: ${traffic.expectedDelay})<br>`;
    });

    document.getElementById('current-traffic').innerHTML = trafficInfo;
}
