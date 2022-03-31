import React, { useEffect, useState } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Nav from "./NavBar/Nav";
import Home from "./Home";
import YourFavs from "./YourFavs";
import Combiner from "./AlbumAdd/Combiner";
import Discover from "./Discover";
import Login from "./NavBar/Login";

function App() {
  const [page, setPage] = useState("/");
  const [likedList, setLikedList] = useState([]);
  const [search, setSearch] = useState(" ");

  function onSearchChange(input) {
    setSearch(input);
    console.log(search);
  }

  function handleAddAlbum(album) {
    const foundIndex = likedList.findIndex((item) => album.name === item.name);
    if (foundIndex === -1) {
      setLikedList([...likedList, album]);
      fetch("http://localhost:9292/albums", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(album),
      })
        .then((response) => response.json())
        .catch((error) => console.error("Error:", error));
    } else {
      console.log("Album already on list");
    }
  }

  function getUserAlbums(album) {
    if (likedList.find((item) => item === album)) {
      const newList = likedList.filter((item) => item !== album);
      setLikedList(newList);
      fetch("http://localhost:3000/" + album.id, {
        method: "DELETE",
      });
    } else {
      console.log("Not found");
    }
  }

  return (
    <BrowserRouter>
      <Nav onChangePage={setPage} className="nav" />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/AlbumPicker">
          <Combiner search={search} onChange={onSearchChange} />
        </Route>
        <Route path="/YourFavs">
          <YourFavs />
        </Route>
        <Route path="/Discover">
          <Discover />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
