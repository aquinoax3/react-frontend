import React from 'react';


function FavCard({album}) {
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
                        <h3>{album.album_title}</h3>
                        <h3>{album.album_artist}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FavCard;