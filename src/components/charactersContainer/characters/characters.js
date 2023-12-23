import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {characterActions} from "../../../redux";
import Character from "../character/character";

const Characters = () => {
    const dispatch = useDispatch();
    const {characters} = useSelector(state => state.characters);
    useEffect(() => {
        dispatch(characterActions.all())
    }, []);
    return (
        <div>
            {
                characters
                    ? characters.map(character => <Character key={character.id} character={character}/>)
                    : 'Муму-хуйня'
            }
        </div>
    );
};

export default Characters;