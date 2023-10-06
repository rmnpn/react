import Form from "./form/form";
import Cars from "./cars/cars";
import {createContext, useState} from "react";


export const Context = createContext(null);
function App() {
    const [newCar, setNewCar] = useState(null);
    const [cars, setCars] = useState([]);
    return (
        <Context.Provider value={{newCar,setNewCar,cars,setCars}}>
        <div>
            <Form/>
            <hr/>
            <Cars/>
        </div>
        </Context.Provider>
    );
}

export default App;
