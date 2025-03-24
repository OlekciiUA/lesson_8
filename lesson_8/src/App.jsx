import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import MapMain from './components/Map/MainMap'
import Search from './components/Search/Search';
import MainWeather from "./components/MainWeather/MainWeather";
import OtherWeather from './components/OtherWeather/OtherWeather';



function App() {
  const [searchValue, setSearchValue] = useState('Kiev');
  const [town, setTown] = useState({});
  const [checkDegree, setCheckDegree] = useState('Цельсій');
  const [tempDegreesType, setTempDegreesType] = useState('°C');
  const [speedOfWindGusts, setSpeedOfWindGusts] = useState('м/с');

  const [errorCity, setErrorCity] = useState(false)

  const key = '5613933e9b4edcec768a593eabb72e06';

  useEffect(() => {
    axiosCityWeather(checkDegree);
    setSearchValue('');
  }, [checkDegree]);

  function city(checkDegree, mainCity) {

    if (checkDegree === 'Цельсій') {
      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${mainCity}&lang=ua&units=metric&appid=${key}`)
        .then((data) => setTown(data))
        .catch(() => error());

      setSearchValue('');
      setTempDegreesType('°C');
      setSpeedOfWindGusts('м/с');

    } else if (checkDegree === 'Фаренгейт') {
      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${mainCity}&lang=ua&units=imperial&appid=${key}`).then((data) => setTown(data))
        .catch(() => error());

      setSearchValue('');
      setTempDegreesType('°F');
      setSpeedOfWindGusts('міл/с');
    }
  }

  function axiosCityWeather(checkDegree) {
    if (searchValue === '') {
      city(checkDegree, town.data?.name)

    } else {
      city(checkDegree, searchValue)
    }
  }

  function backgroundImage(nameImage) {

    switch (nameImage) {
      case '01d':
        return `../src/components/img/clearSky.gif`;

      case '01n':
        return `../src/components/img/clearSkyNight.gif`;

      case '02d':
        return `../src/components/img/fewCloudsDay.gif`;

      case '02n':
        return `../src/components/img/fewCloudsNight.gif`;

      case '03d':
        return `../src/components/img/scatteredClouds.gif`;

      case '03n':
        return `../src/components/img/scatteredClouds.gif`;

      case '04d':
        return `../src/components/img/brokenClouds.gif`;

      case '04n':
        return `../src/components/img/brokenClouds.gif`;

      case '09d':
        return `../src/components/img/slowRain.webp`;

      case '09n':
        return `../src/components/img/slowRain.webp`;

      case '10d':
        return `../src/components/img/rainDay.gif`;

      case '10n':
        return `../src/components/img/rainyNight.gif`;

      case '11d':
        return `../src/components/img/storm.gif`;

      case '11n':
        return `../src/components/img/storm.gif`;

      case '13d':
        return `../src/components/img/snowing.gif`;

      case '13n':
        return `../src/components/img/snowing.gif`;

      case '50d':
        return `../src/components/img/mist.gif`;

      case '50n':
        return `../src/components/img/mist.gif`;
    }

  }

  function error(){
    setErrorCity(true);
    setTimeout(()=>{
      setErrorCity(false);
    },2000)
  }

  return (
    <div
      className='mainDiv'
      style={{
        backgroundImage: `url(${backgroundImage(town.data?.weather[0].icon)})`
      }}
    >

      <div className='container' >
        <Search
          searchValue={searchValue}
          axiosCityWeather={axiosCityWeather}
          setSearchValue={setSearchValue}
          setCheckDegree={setCheckDegree}
          checkDegree={checkDegree}
          error={error}
        />

        <div className="main__Weather__Div">
          <MapMain locationLon={town.data?.coord.lon
            ? town.data?.coord.lon
            : 30.5167}
            locationLat={town.data?.coord.lat
              ? town.data?.coord.lat
              : 50.4333
            }
            city={town.data?.name}
          />
          <MainWeather
            city={town.data?.name}
            temp={town.data?.main.temp}
            feelsLike={town.data?.main.feels_like}
            tempMin={town.data?.main.temp_min}
            tempMax={town.data?.main.temp_max}
            description={town.data?.weather[0].description}
            imgWeather={`https://openweathermap.org/img/wn/${town.data?.weather[0].icon}@2x.png`}
            tempDegreesType={tempDegreesType}
          />

        </div>

        < OtherWeather
          windSpeed={town.data?.wind.speed}
          windDeg={town.data?.wind.deg}
          windGust={town.data?.wind.gust}
          sunrise={town.data?.sys.sunrise}
          sunset={town.data?.sys.sunset}
          seaLevel={town.data?.main.sea_level}
          pressure={town.data?.main.pressure}
          humidity={town.data?.main.humidity}
          sysCountry={town.data?.sys.country.toLowerCase()}
          speedOfWindGusts={speedOfWindGusts}
        />
      </div>

      {errorCity ? <div className='error'>Ви ввели не корректне значення міста, спробуйте ще раз</div> : ''}

    </div >

  )
}

export default App
