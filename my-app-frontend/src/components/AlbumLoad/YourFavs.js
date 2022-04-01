import React , {useState, useEffect} from 'react';
import FavCard from "./FavCard"
import {v4 as uuid} from 'uuid'


function YourFavs({removeAlbum}){

    const [userAlbums, setUserAlbums] = useState([])
    useEffect(() => {
    let current_user = JSON.parse(localStorage.getItem('user'))
    fetch(`http://localhost:9292/toplists/id=${current_user.id}`)
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
    },[])

    function handleRemoveAlbum(album){
        fetch(`http://localhost:9292/albums/${album.id}`,{
          method:"DELETE",
        }).then (()=>{
          console.log("delete call",userAlbums)
          setUserAlbums(userAlbums.filter(el=> {
            console.log("after delete", userAlbums)
            return (el.id !==album.id)
          }))
            
        })
      }

    return (
        <div className='row'>
        {       
            userAlbums.map((album) => {
                console.log(album)
                console.log(album.album_cover)
                return(

                <FavCard key={uuid()} album={album} removeAlbum = {handleRemoveAlbum}/>
                )
            })
        }

    </div>
    )

}

export default YourFavs;