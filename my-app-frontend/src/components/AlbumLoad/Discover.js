import React from "react";
import { useState } from "react";
import DiscCard from "./DiscCard";
import Card from "../AlbumAdd/Card";

function Discover() {
  const [userAlbums, setUserAlbums] = useState([]);

  function handleSearchInput() {
    console.log("searched");
    fetch(`http://localhost:9292/toplists`)
      .then((response) => response.json())
      .then((jsonData) => setUserAlbums(jsonData));
  }


  let showenItems = userAlbums.map((album) => {
    return <DiscCard key={album.id} album={album} />;
  });
  return (
    <div id="content_container">
      <p className="search_content">
        Search your friend's username to see their album choices.
      </p>
      <input
        onChange={handleSearchInput}
        className="search_content"
        type="text"
        name="search"
        placeholder="Search..."
      ></input>
      {showenItems}
    </div>
  );
}

export default Discover;
