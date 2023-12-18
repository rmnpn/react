import React from 'react';
import Characters from "../../components/CharactersContainer/Characters/Characters";
import {useNavigate} from "react-router-dom";

const CharactersPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={()=>navigate(-1)}>back</button>
            <Characters/>
        </div>
    );
};

export default CharactersPage;