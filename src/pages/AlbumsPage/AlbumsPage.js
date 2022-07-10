import React, {useEffect, useState} from 'react';

import {albumService} from "../../services";
import {Album} from "../../components";
import './AlbumsPageStyle.css';

const AlbumsPage = () => {

    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        albumService.getAll().then(value => setAlbums(value))
    }, [])
    return (
        <div className={'albums-container'}>
            {
                albums.map(album => <Album key={album.id} album={album}/>)
            }
        </div>
    );
};

export {AlbumsPage};
