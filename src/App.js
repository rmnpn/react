import Cars from "./cars/cars";
import Form from "./form/form";
import {useState} from "react";
function App() {
    const [onSave, setOnSave] = useState(null);
    const [carForUpdate,setCarForUpdate] = useState(null);
  return (

    <div>
        <Form setOnSave={setOnSave} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
        <hr/>
        <Cars onSave={onSave} setOnSave={setOnSave} setCarForUpdate={setCarForUpdate}/>
    </div>
  );
}

export default App;
