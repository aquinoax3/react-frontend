import React , {useState, useEffect} from 'react';
import SearchFunction from './SearchFunction';

function Combiner({onChange,search}){
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
    },[search])
    

    
    return (
    <div id="larger">
    <div id="content_container">
        <p className="search_content">Search for an album to get started!</p>
        <input className="search_content" type="text" name="search" placeholder="Search..." onChange={(e) => onChange(e.target.value)}></input>
    </div>
        <SearchFunction search = {search} albums = {savedAlbums} />
    </div>
    )
}

export default Combiner;