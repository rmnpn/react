import React from 'react';

const Fullpost = ({value}) => {
    return (
        <div>
            <p>UserID - {value.userId} <br/>
               ID - {value.id}<br/>
               TITLE - {value.title}<br/>
               BODY - {value.body}<br/>


            </p>
        </div>
    );
};

export default Fullpost;