import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, reset} from "./redux/actions/index";

function App() {
 const store = useSelector(state => state);
    let dispatch = useDispatch();
    const incr = () => {
        dispatch(increment())
    }

    const decr = () => {
        dispatch(decrement())
    }

    const res = () => {
        dispatch(reset())
    }
    return (
        <div>
            <h1>{store}</h1>
            <button onClick={incr}>increment</button>
            <button onClick={decr}>decrement</button>
            <button onClick={res}>reset</button>
        </div>
    );
}

export default App;
