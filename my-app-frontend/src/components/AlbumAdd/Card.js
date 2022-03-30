import React from 'react';

function Card({album}) {
    const img = album.image[3]
    return(
        <div className="wrapper">
            <div className="container">
                <div className="top"></div>
                <div className="bottom">
                    <div className="left">
                        <div className="details">
                            <img src={img['#text']} alt={album.name} />
                        </div>
                        <div>                    
                        </div>
                    </div>
                    <div className='right'>
                        <h1>{album.name}</h1>
                        <h1>{album.artist}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;