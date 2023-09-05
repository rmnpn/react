import React, {useEffect, useState} from 'react';
import Launch from "./launch";

const SpaceX = () => {
    let [launches, setLaunches] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches')
            .then(response => response.json())
            .then(data => {

                const launches2020 = data.filter(launch => launch.launch_year !== '2020');

                setLaunches(launches2020);
            })


    }, []);
    return (
        <div>
            {
                launches.map(value => <Launch launch={value}/>)
            }
        </div>
    );
};

export default SpaceX;