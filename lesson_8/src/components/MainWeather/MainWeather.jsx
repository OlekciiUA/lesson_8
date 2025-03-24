
import './MainWeatherStyle.scss'
export default function MainWeather({ city, temp, feelsLike, tempMin, tempMax, description, imgWeather, tempDegreesType }) {

    return (
        <div className="div__Weather__Main__Data">
            <h1>
                {city}
            </h1>
            <div className="">
                <div className='div__Text__Content'>
                    Темпретура:  <p className='text__Content'> {temp} {tempDegreesType}</p>
                </div>
                <div className='div__Text__Content'>
                    Bідчувається як: <p className='text__Content'> {feelsLike} {tempDegreesType}</p>
                </div >
                <div className='div__Text__Content'>
                    Mин. темп: <p className='text__Content'> {tempMin} {tempDegreesType}</p>
                </div>
                <div className='div__Text__Content'>
                    Mакс. темп: <p className='text__Content'> {tempMax} {tempDegreesType}</p>
                </div>
                <div className="img__Weather__Data">
                    <img src={imgWeather} alt="error" />
                    <div className='div__Text__Content'>
                        <p className='text__Content'> {description}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}