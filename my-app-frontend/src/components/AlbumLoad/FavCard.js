import React from 'react';


function FavCard({album, removeAlbum}) {
    return(
        <div className="wrapper">
            <div className="container">
                <div className="top"></div>
                <div className="bottom">
                    <div className="left">
                        <div className="details">
                            <img src={album.album_cover} alt={album.album_title} />
                        </div>
                        <div>                    
                        </div>
                    </div>
                    <div className='right'>
                        <h3 className='album_title'>{album.album_title}</h3>
                        <h3 className='album_artist'>{album.album_artist}</h3>
                        <button id="album_remove_button" onClick={() => removeAlbum(album)}>Remove from your list</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FavCard;