const apiUrl = "/weather";

async function checkWeather(city){
    const response = await fetch(apiUrl + '?q=' + city);
    var data = await response.json();
    console.log(data);

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = data.main.temp + '°C';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';

    if(data.weather[0].main == 'Clouds'){
        weatherIcon.src = 'images/clouds.png';
    } else if(data.weather[0].main == 'Clear'){
        weatherIcon.src = 'images/clear.png';
    } else if(data.weather[0].main == 'Drizzle'){
        weatherIcon.src = 'images/drizzle.png';
    } else if(data.weather[0].main == 'Mist'){
        weatherIcon.src = 'images/mist.png';
    }

    document.querySelector('.weather').style.display = 'block';
}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
});

