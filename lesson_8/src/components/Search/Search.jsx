import { useRef } from 'react';
import './Serch.scss'
export default function Search({ searchValue, axiosCityWeather, setSearchValue, setCheckDegree, checkDegree, error }) {

    const refBtn = useRef();

    return (
        <div className="search">
            <input type="text"
                ref={refBtn}
                value={searchValue}
                onKeyDown={(e) => {

                    if (e.code === 'Enter') {
                        if (e.target.value === '') error();
                        else axiosCityWeather(checkDegree);
                    }
                }
                }
                onChange={(e) => setSearchValue(e.target.value)}
                required
            />
            <div>
                <button
                    onClick={() => {

                        if (refBtn.current.value === '') {
                            error();
                        }
                        else axiosCityWeather(checkDegree)
                    }}
                    className='btn__Search'
                >
                    Enter
                </button>

                <div className="changeDegrees"
                    onClick={(e) => {
                        if (e.target.innerHTML === 'Фаренгейт') {
                            setCheckDegree('Цельсій');
                            e.target.innerHTML = 'Цельсій';
                            axiosCityWeather(checkDegree);
                        }
                        else {
                            setCheckDegree('Фаренгейт');
                            e.target.innerHTML = 'Фаренгейт';
                            axiosCityWeather(checkDegree);
                        }

                    }}>
                    {checkDegree}
                </div>
            </div>

        </div>
    )
}

