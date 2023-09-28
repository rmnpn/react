import React, {useEffect} from 'react';
import User from "./user/user";

const Users = ({onSave,setOnSave}) => {

    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setOnSave(value));
    }, []);
    return (
        <div>
            {
                onSave.map(user=> <User user={user} key={user.id}/>)
            }
        </div>
    );
};

export default Users;