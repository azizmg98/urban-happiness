import React from 'react';

const AlbumItem = ({album}) => {
  return <div>
            <div>
            <h1>{album.name}</h1>
            <img src={album.image} alt={album.name} className='cover' />
            <p>{album.price}</p>
            </div>
    </div>;
};

export default AlbumItem;
