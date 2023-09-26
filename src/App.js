import logo from './logo.svg';
import {useEffect, useState} from "react";
import Users from "./users/users";
import Form from "./form/form";



function App() {
    const [onSave, setOnSave] = useState(null);

  return (
    <div>
        <Form setOnSave={setOnSave}/>
      <Users onSave={onSave}/>
    </div>
  );
}

export default App;
