import Users from "./Users/users";
import Form from "./Form/form";
import {useState} from "react";


function App() {
    const [users, setUsers] = useState([]);
  return (
    <div>
      <Form setUsers={setUsers}/>
      <hr/>
      <Users users={users} setUsers={setUsers}/>
    </div>

  );
}

export default App;
