import React, {useContext} from 'react';
import {Context} from "../../App";

const Subchild22 = () => {
    const {data,setData} = useContext(Context);
    return (
        <div>

            <button onClick={()=>setData(prev=>[...prev,'a','n','a','h','u','i','b','l','e','t','v','p','i','z','d','u'])}>push A</button>
        </div>
    );
};

export default Subchild22;