import React, {useEffect} from 'react';
import {userService} from "./userService";
import User from "./User/user";

const Users = ({users,setUsers}) => {

    useEffect(() => {
        userService.getAll().then(value => value.data).then(data=> setUsers(data))
    }, []);
    console.log(users);
    return (
        <div>
            {users.map(user => (<User key={user.id} user={user}/>))}
        </div>
    );
};

export default Users;