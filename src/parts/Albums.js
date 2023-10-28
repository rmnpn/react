import React, {useEffect, useState} from 'react';
import ApiService from "../services/ApiService";
import album from "./component/Album";
import Album from "./component/Album";

const Albums = () => {
    const apiService = new ApiService('albums');
    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        apiService.getAllData().then(value=>setAlbums(value))
    }, []);

    return (
        <div>
            {
                albums.map(album=>(<Album album={album} key={album.id}/>))
            }
        </div>
    );
};

export default Albums;