import React, { useState } from 'react';


const api = {
  key: "ecc00cf228e23a00290f425ae759b202",
  base: "https://api.openweathermap.org/data/2.5/"
}


function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});


  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result)
        })
    }
  }


  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  // const appId = document.getElementById('app')
  // console.log(appId)
  console.log(weather)

  return (
    <div className="app__wrapper">
      <div id="app" className={(typeof weather.main != "undefined") ? ((weather.weather[0].main === 'Rain') ? 'app rain-background' : (weather.weather[0].main === 'Clouds') ?  'app clouds-background' : (weather.weather[0].main === 'Snow') ? 'app snow-background' :(weather.weather[0].main === 'Clear') ? 'app sunny' : 'app') : 'app'}>
        <main>
          <div className="search-box">
            <input type="text"
              className="search-bar"
              placeholder="Enter the name of the country or city..."
              onChange={e => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}
            />
            <div className={(typeof weather.main != "undefined") ? 'title ' : 'title active'}>Weather App</div>
          </div>
          {(typeof weather.main != "undefined") ? (
                <div>
                    <div className="location-box">
                        <div className="location">{weather.name}, {weather.sys.country}</div>
                        <div className="date">{dateBuilder(new Date())}</div>
                    </div>
                    <div className="weather-box">
                        <div className="temp">{Math.round(weather.main.temp)}°c</div>
                        <div className="weater__wrapper">
                            <div className={(weather.weather[0].main === 'Rain') ? 'rain' : (weather.weather[0].main === 'Clouds') ? 'clouds' : (weather.weather[0].main === 'Snow') ? 'snow' : 'weather__icon'}></div>
                            <div className="weather">{weather.weather[0].main}</div>
                        </div>
                    </div>
                    <div className="wind">
                        <div className="wind__icon">
                        </div>
                        <div className="wind__data">
                            {weather.wind.speed} m/s
                        </div>
                    </div>
                </div>
            ) : ('')}
        </main>
      </div>
    </div>
  );
}

export default App;
