import React, { useState, useEffect } from 'react';
import './covid.css'


const Statewise = () => {

    const [statedata, setstateData] = useState([])

    const getCovidStateData = async () => {
        try {
            const res = await fetch("https://api.covid19india.org/data.json");
            const actualData = await res.json();
            setstateData(actualData.statewise)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getCovidStateData();    
    }, [])

    return (
        <>
            <div className="container-fluid">
                <div className="main-heading">
                    <h3 className="dashboard"> <span className="font-weight-bold"> India </span> Covid-19 Dashboard </h3>
                </div>

                <div className="table-responsive">
                    <table border="" className="table table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th>State</th>
                                <th>Confirmed</th>
                                <th>Recoverdde</th>
                                <th>Deaths</th>
                                <th>Active</th>
                                <th>Updated</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                statedata.map((curElem, ind) => {
                                    return (
                                        <tr key={ind}>
                                            <td>{curElem.state}</td>
                                            <td>{curElem.confirmed}</td>
                                            <td>{curElem.recovered}</td>
                                            <td>{curElem.deaths}</td>
                                            <td>{curElem.active}</td>
                                            <td>{curElem.lastupdatedtime}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Statewise;
