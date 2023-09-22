import logo from './logo.svg';
import './App.css';
import UserComponent from "./userComponent/userComponent";
import Posts from "./posts/posts";
import {useState} from "react";

function App() {
  const [userId, setUserId] = useState(null)
  return (
    <div>
  <UserComponent setUserId={setUserId}/>
      <hr/>
      {userId&&<Posts userId={userId}/>}
    </div>
  );
}

export default App;
