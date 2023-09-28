import {useState} from "react";
import Users from "./users/users";
import Form from "./form/form";



function App() {
    const [onSave, setOnSave] = useState([]);

  return (
    <div>
        <Form setOnSave={setOnSave}/>
      <Users onSave={onSave} setOnSave={setOnSave}/>
    </div>
  );
}

export default App;
