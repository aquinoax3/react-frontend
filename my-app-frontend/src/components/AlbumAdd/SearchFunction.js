import React, {useEffect, useState} from 'react';
import Card from './Card'
import {v4 as uuid} from 'uuid'


function SearchFunction({search}) {
    const [savedAlbums, setSavedAlbums] = useState([])

    useEffect(() => {
        fetch(`https://ws.audioscrobbler.com/2.0/?method=album.search&album=${search}&api_key=639324828b6390c9a197ca916d0b68e2&format=json`)
        .then(res => res.json())
        .then(data =>{
            if (data.errorMessage) {
            setSavedAlbums([])
            }
            else {
                setSavedAlbums(data)
            }

        })
        .catch(err => console.log('error',err))
    },[])
    

    if (savedAlbums.length == 0) { 
    
    return null }

    return (
    <div> 
    <div className='row'>
        {       
            savedAlbums.results.albummatches.album.slice(0,16).map((album) => {
                return(
                <Card key={uuid()} album={album} />
                )
            })
        }

    </div>  
    </div>

    )
}
export default SearchFunction