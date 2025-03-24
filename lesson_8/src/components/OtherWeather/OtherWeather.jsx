import './OtherWeather.scss'

export default function OtherWeather({ windSpeed, windDeg, windGust, sunrise, sunset, seaLevel, humidity, pressure, sysCountry,speedOfWindGusts }) {

    return (

        <div className="other__Weather__Div">

            <div className='div__Text__Content'>
                <div>Вітер: : 
                    <p className='text__Content'>{windSpeed} {speedOfWindGusts}</p>
                    </div>
                <div>
                    Направление вітра
                    <p className='text__Content'>{windDeg}°</p>
                </div>


                {windGust ? <div>Порив вітру 
                    <p className='text__Content'>{windGust} {speedOfWindGusts}</p>
                    </div> : ''}
            </div>

            <div className='div__Text__Content'>
                <div>
                    Схід сонця:
                    <p className='text__Content'>{new Date(sunrise * 1000).toLocaleTimeString(sysCountry, { hour: 'numeric', minute: "numeric", second: 'numeric' })}</p>
                </div>
                <div>
                    Захід сонця:
                    <p className='text__Content'>{new Date(sunset * 1000).toLocaleTimeString(sysCountry, { hour: 'numeric', minute: "numeric", second: 'numeric' })}</p>
                </div>


            </div>

            <div className='div__Text__Content'>
                <div>
                    Тиск на рівні моря  <p className='text__Content'>{seaLevel} гПа</p>
                </div>
                <div>
                    Тиск на рівні землі <p className='text__Content'>{pressure} гПа</p>
                </div>
                <div>
                    Вологість: <p className='text__Content'>{humidity} %</p>
                </div>
            </div>
        </div>
    )
}