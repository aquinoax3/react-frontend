import React from 'react';


function Card({album, addAlbum}) {
    return(
        <div className="wrapper">
            <div className="container">
                <div className="top"></div>
                <div className="bottom">
                    <div className="left">
                        <div className="details">
                            <img src={album.image[2]['#text']} alt={album.name} />
                        </div>
                        <div>                    
                        </div>
                    </div>
                    <div className='right'>
                        <h3>{album.name}</h3>
                        <h3>{album.artist}</h3>
                        <button id="album_add_button" onClick={() => addAlbum(album)}>Add to your list</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;