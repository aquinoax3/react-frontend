
import React, {useEffect, useState} from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Nav from './NavBar/Nav';
import Home from './Home';
import YourFavs from './YourFavs';
import Combiner from './AlbumAdd/Combiner';
import Discover from './Discover';


function App() {
    const [page, setPage] = useState("/")
    const [search, setSearch] = useState(" ")

    function onSearchChange(input){
        setSearch(input)
        console.log(input)
    }


    return(
        <BrowserRouter>
            <Nav onChangePage = {setPage} className="nav" />
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path ="/AlbumPicker">
                    <Combiner onSearch={onSearchChange}/>
                </Route>
                <Route path="/YourFavs">
                    <YourFavs/>
                </Route>
                <Route path="/Discover">
                    <Discover/>
                </Route>
                <Route path="*">
                    <h1>404 not found</h1>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App;
