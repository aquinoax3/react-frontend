import React , {useState, useEffect} from 'react';
import FavCard from "./FavCard"
import {v4 as uuid} from 'uuid'


function YourFavs(){

    const [userAlbums, setUserAlbums] = useState([])
    let current_user = 1 
    useEffect(() => {
    fetch(`http://localhost:9292/toplists/id=${current_user}`)
    .then(res => res.json())
    .then(data =>{
        if (data.errorMessage) {
        setUserAlbums([])
        }
        else {
            setUserAlbums(data)
        }
        console.log(data)
    })
    },[current_user])
    return (
        <div className='row'>
        {       
            userAlbums.map((album) => {
                return(
                <FavCard key={uuid()} album={album}/>
                )
            })
        }

    </div>
    )

}

export default YourFavs;