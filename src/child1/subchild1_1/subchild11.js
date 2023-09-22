import React, {useContext} from 'react';
import {Context} from "../../App";


const Subchild11 = () => {
 const {data} = useContext(Context)
    return (
        <div>
            {
                data.map(data=> <div>{data}</div>)
            }
        </div>
    );
};

export default Subchild11;