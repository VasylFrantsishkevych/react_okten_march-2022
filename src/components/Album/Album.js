import React from 'react';

import  './AlbumStyle.css';

const Album = ({album: {id, title}}) => {
    return (
        <div className={'album'}>
            {id} - {title}
        </div>
    );
};

export {Album};
