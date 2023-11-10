import React, {useMemo, useState} from 'react';

const TestUseMemo = () => {
    const [count, setCount] = useState(0);
    const [todo, setTodo] = useState([]);
    const calc = (num) => {
        for (let i = 0; i < 1000000000; i++) {
            num += 1;
        }
    }
   const excalc = useMemo(()=> {calc(count)},[count]);
    const handler = () => {setCount(count+1)};
    const adtodo = () => setTodo([...todo, 'todos'])
    return (
        <div>
            <button onClick={handler}>Додати Calc</button>
            <br/>
            {count}
            <br/>
            <button onClick={adtodo}> ADD todo</button>
            {todo}
        </div>
    );
};

export default TestUseMemo;