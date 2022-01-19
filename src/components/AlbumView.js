import React from 'react'
import AlbumsList from '../AlbumsList';
import AlbumItem from './AlbumItem';

const AlbumView = () => {
    return (
        <div>
            {AlbumsList.map((album) => (
              <AlbumItem album={AlbumsList} />  
            ))}
        </div>
    )
}

export default AlbumView;

