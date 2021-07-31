import React, { useEffect, useState } from 'react'
import './covid.css'

const Covid = () => {

    const [data, setData] = useState([])

    const getCovidData = async () => {
        try {
            const res = await fetch("https://api.covid19india.org/data.json");
            const actualData = await res.json();
            setData(actualData.statewise[0])
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getCovidData();
    }, [])

    return (
        <>
            <section>
                <h1>🔴 Live</h1>
                <h2>Covid-19 tracker By tapesh</h2>

                <ul>
                    <li className="card">
                        <div className="cardMain">
                                <p className="cardName"> <span>Our</span> Country</p>
                                <p className="cardTotal cardLarge">India</p>
                        </div>
                    </li>
                    <li className="card">
                        <div className="cardMain">
                                <p className="cardName"> <span>Total</span> Recovered</p>
                                <p className="cardTotal ">{data.recovered}</p>
                        </div>
                    </li>
                    <li className="card">
                        <div className="cardMain">
                                <p className="cardName"> <span>Total</span> Confirmed</p>
                                <p className="cardTotal ">{data.confirmed}</p>
                        </div>
                    </li>
                    <li className="card">
                        <div className="cardMain">
                                <p className="cardName"> <span>Total</span> deaths</p>
                                <p className="cardTotal ">{data.deaths}</p>
                        </div>
                    </li>
                    <li className="card">
                        <div className="cardMain">
                                <p className="cardName"> <span>Total</span> active</p>
                                <p className="cardTotal ">{data.active}</p>
                        </div>
                    </li>
                    <li className="card">
                        <div className="cardMain">
                                <p className="cardName"> <span>last</span> updated</p>
                                <p className="cardTotal cardSmall">{data.lastupdatedtime}</p>
                        </div>
                    </li>
                </ul>
            </section>
        </>
    )
}

export default Covid
