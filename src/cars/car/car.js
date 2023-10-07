import {carService} from "../../service/axios";

const Car = ({car,setNewCar}) => {
    const {id,brand,price,year} = car;
    function deleteCar() {
        carService.deleteById()
        setNewCar()
    }
    return (
        <div>
            <div> id:{id}</div>
            <div> brand:{brand}</div>
            <div> price:{price}</div>
            <div> year:{year}</div>
            <button>Update</button>
            <button onClick={deleteCar}>Delete</button>
            <br/> <hr/>
        </div>
    );
};

export default Car;