import React from 'react';

const User = ({user,setUserid}) => {
    const {name,id,username} = user;


    return (
        <div>
            <div> id:{id}</div>
            <div> name:{name}</div>
            <div> username:{username}</div>
            <button onClick={()=> setUserid(id)}>Get Posts</button>
        </div>
    );
};

export default User;