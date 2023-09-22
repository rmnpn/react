import Child1 from "./child1/child1";
import Child2 from "./child2/child2";
import {createContext, useState} from "react";

export const Context = createContext(null);



function App() {
    const [data, setData] = useState(['s','u','k'])
  return (
      <Context.Provider value={{setData,data}}>
    <div >
      <Child1/>
      <Child2/>
    </div>
      </Context.Provider>
  );
}

export default App;
