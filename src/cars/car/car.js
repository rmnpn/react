import {carService} from "../../service/axios";
import {useContext} from "react";
import {Context} from "../../App";

const Car = ({car}) => {
    const {setCarForUpdate,setNewCar} =useContext(Context);
    const {id,brand,price,year} = car;
    const deleteCar = async () => {
        await carService.deleteById(id);
        setNewCar(car)
    }


    return (
        <div>
            <div> id:{id}</div>
            <div> brand:{brand}</div>
            <div> price:{price}</div>
            <div> year:{year}</div>
            <button onClick={()=>setCarForUpdate(car)}>Update</button>
            <button onClick={deleteCar}>Delete</button>
            <br/> <hr/>
        </div>
    );
};

export default Car;