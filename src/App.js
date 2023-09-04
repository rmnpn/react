import logo from './logo.svg';
import './App.css';
import Posts from "./posts/posts";
import Fullpost from "./fullpost/fullpost";
import {useState} from "react";

function App() {

    const [chosenPost, setChosenpost] = useState(null)
    const infopost = (obj) => {
        setChosenpost({...obj})
    }
  return (<div className={'container'}>
          <div className={'left'}>
          <Posts infopost={infopost}/>
          </div>
          {chosenPost && (<div className={'right'}>
              <Fullpost value={chosenPost}/>
          </div>)}
    </div>
  );
}

export default App;
