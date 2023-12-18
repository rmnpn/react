import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {episodesService} from "../../../services";
import {useSearchParams} from "react-router-dom";
import {episodesActions} from "../../../redux";
import Episode from "../Episode/Episode";
import css from './Episodes.module.css'

const Episodes = () => {
    const dispatch = useDispatch();
    const {episodes} = useSelector(store => store.episodes);
    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        episodesService.getAll(query.get('page')).then(({data}) => {
            dispatch(episodesActions.set(data))
            setQuery(prev => ({...prev, page: prev.get('page')})) //Пагінація, щоб в адресній строці показувало номер сторінки
        })
    }, [query, dispatch, setQuery]);
    return (
        <div className={css.Episodes}>
            {episodes.map(episode => <Episode key={episode.id} episode={episode}/>)}
        </div>
    );
};

export default Episodes;