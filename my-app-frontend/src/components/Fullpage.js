
import React, {useEffect, useState} from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Nav from './Nav';
import Header from './Header';
import YourFavs from './YourFavs';


function FullPage() {
    const [inventory, setInventory] = useState([])
    const [page, setPage] = useState("/")
    const [savedInventory, setSavedInventory] = useState([])
    const [likedList, setLikedList] = useState([])

    return(
        <BrowserRouter>
            <Nav onChangePage = {setPage} className="nav" />
            <Switch>
                <Route exact path="/">
                    <Header/>
                </Route>
                <Route path="/Page1">
                    <YourFavs/>
                </Route>
                <Route path="*">
                    <h1>404 not found</h1>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default FullPage;
