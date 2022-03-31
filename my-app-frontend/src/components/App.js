
import React, {useEffect, useState} from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Nav from './NavBar/Nav';
import Home from './Home';
import YourFavs from './AlbumLoad/YourFavs';
import Combiner from './AlbumAdd/Combiner';
import Discover from './AlbumLoad/Discover';
import Login from './NavBar/Login';


function App() {

    const [page, setPage] = useState("/")
    const [likedList, setLikedList] = useState([])
    const [search, setSearch] = useState(" ")
    useEffect(() => {
      if(JSON.parse(localStorage.getItem('user')) === null){
        localStorage.setItem('user', JSON.stringify({}));
      }
    }, [])
    
    function onSearchChange(input){
        setSearch(input)
    }

    function handleAddAlbum(album){
        const foundIndex = likedList.findIndex(item => album.name === item.name);
        if (foundIndex === -1) {
            setLikedList([...likedList, album]);
            let albumInfo = {album_title: album.name,album_cover:album.image[2]['#text'],album_artist:album.artist}
            fetch("http://localhost:9292/albums", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(albumInfo),
            })
            .then(response => response.json())
            .catch(error => console.error("Error:", error))
        } else {
            console.log("Album already on list")
        }
    }



    return(
        <BrowserRouter>
            <Nav onChangePage = {setPage} className="nav" />
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path ="/AlbumPicker">
                    <Combiner search = {search} onChange ={onSearchChange} addAlbum = {handleAddAlbum} />
                </Route>
                <Route path="/YourFavs">
                    <YourFavs/>
                </Route>
                <Route path="/Discover">
                    <Discover/>
                </Route>
                <Route path="/Login">
                    <Login/>
                </Route>
                <Route path="*">
                    <h1>404 not found</h1>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App;
