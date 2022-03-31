import React from 'react';
import Card from './Card'
import {v4 as uuid} from 'uuid'


function SearchFunction({albums, addAlbum}) {

    if (albums.length == 0) { 
    
    return null }

    return (
    <div>
    <div className='row'>
        {       
            albums.results.albummatches.album.slice(0,12).map((album) => {
                return(
                <Card key={uuid()} album={album} addAlbum = {addAlbum} />
                )
            })
        }

    </div>
    </div>  
    )
}
export default SearchFunction