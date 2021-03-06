import React , {useState, useEffect} from 'react';
import SearchFunction from './SearchFunction';

function Combiner({onChange,search, addAlbum}){
    const [savedAlbums, setSavedAlbums] = useState([])

    useEffect(() => {
        if (search === "") { 
    
            return undefined }
        fetch(`https://ws.audioscrobbler.com/2.0/?method=album.search&album=${search}&api_key=639324828b6390c9a197ca916d0b68e2&format=json`)
        .then(res => res.json())
        .then(data =>{
            if (data.errorMessage) {
            setSavedAlbums([])
            return (null)
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
        <input type="text" name="search" placeholder="Search..." onChange={(e) => onChange(e.target.value)}></input>
    </div>
        <SearchFunction search = {search} albums = {savedAlbums} addAlbum = {addAlbum}/>
    </div>
    )
}

export default Combiner;