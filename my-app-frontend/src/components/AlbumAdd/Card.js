import React from 'react';

//Add a prop and post method on App.Js

function Card({album}) {
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
                        <h1>{album.name}</h1>
                        <h1>{album.artist}</h1>
                        <button id="album_add_button">Add to your list</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;