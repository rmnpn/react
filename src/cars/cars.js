import React, {useEffect, useState} from 'react';
import Car from "./car/car";

const Cars = ({onSave,setOnSave,setCarForUpdate}) => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('http://owu.linkpc.net/carsAPI/v1/cars')
            .then(value => value.json())
            .then(value => setCars(value))
    }, [onSave]);
    return (<div>
        {
            cars.map(car => <Car key={car.id} car={car} setOnSave={setOnSave} setCarForUpdate={setCarForUpdate}/>)
        }
    </div>);
};

export default Cars;