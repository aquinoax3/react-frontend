import React from 'react';


function DiscCard({album}) {
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DiscCard;