import './App.css';
import Users from "./Users/users";
import Form from "./Form/form";
import {useState, createContext} from "react";

const Context = createContext(null)
function App() {
  const [onSave, setOnSave] = useState()
  return (
      <Context.Provider value={{onSave,setOnSave}}>
    <div>
      <Form/>
      <hr/>
      <Users/>
    </div>
      </Context.Provider>
  );
}

export default App;
