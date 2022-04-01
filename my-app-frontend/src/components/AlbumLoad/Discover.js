import React, { useState } from "react";
import DiscCard from "./DiscCard";

function Discover() {
  const [userAlbums, setUserAlbums] = useState([]);
  const [input, setInput] = useState("");

  function handleSearchInput(e) {
    e.preventDefault();
    console.log("searched");
    fetch(`http://localhost:9292/users/${input}/albums`)
      .then((response) => response.json())
      .then((jsonData) => setUserAlbums(jsonData));
  }

  let showenItems = userAlbums.map((album) => {
    return <DiscCard key={album.id} album={album} />;
  });
  return (
    <>
      <div id="content_container">
        <p className="search_content">
          Search your friend's username to see their album choices.
        </p>
        <form onSubmit={(e) => handleSearchInput(e)}>
          <input
            onChange={(e) => setInput(e.target.value)}
            className="search_content"
            type="text"
            name="search"
            placeholder="Search..."
            value={input}
          ></input>
        </form>
      </div>
      <div id="disc_container">
        {showenItems}
      </div>
    </>
  );
}

export default Discover;