import React from 'react';
import {Link, Outlet} from "react-router-dom";

const MainMenu = () => {
    return (
        <div>
            Main Menu
            <ul>
                <li><Link to={'todos'}>Todos</Link></li>
                <li><Link to={'albums'}>Albums</Link></li>
                <li><Link to={'comments'}>Comments</Link></li>
            </ul>
            <Outlet/>
        </div>
    );
};

export default MainMenu;