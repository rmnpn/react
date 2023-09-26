import React, {useEffect, useState} from 'react';
import user from "./user/user";
import User from "./user/user";

const Users = ({onSave}) => {
    const [users, setUsers] = useState([]);
    console.log(onSave);
    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value));
    }, [onSave]);
    return (
        <div>
            {
                users.map(user=> <User user={user} key={user.id}/>)
            }
        </div>
    );
};

export default Users;