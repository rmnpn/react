import React, {useEffect, useState} from 'react';
import User from "./Users/user";

const UserComponent = ({setUserId}) => {
    const [users,setUsers] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value))
    }, []);
    return (
        <div>
            {
                users.map(user=> <User id={user.id} user={user} setUserid={setUserId}/>)
            }
        </div>
    );
};

export default UserComponent;