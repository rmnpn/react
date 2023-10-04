import React, {useEffect, useState} from 'react';
import {userService} from "./userService";
import User from "./User/user";

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        userService.getAll().then(value => value.data).then(data=> setUsers(data))
    }, []);
    return (
        <div>
            {users.map(user => (<User key={user.id} user={user}/>))}
        </div>
    );
};

export default Users;