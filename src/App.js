import './App.css';
import Users from "./Users/users";
import Form from "./Form/form";
import {useState} from "react";

function App() {
  const [onSave, setOnSave] = useState()
  return (
    <div>
      <Form setOnSave={setOnSave()}/>
      <hr/>
      <Users/>
    </div>

  );
}

export default App;
