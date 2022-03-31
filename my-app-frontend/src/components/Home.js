import React from 'react';

function Home() {
    return (
    <div>
        <header className="title"> 
            <h1> Album Picker </h1>
            <p id="intro">Pick five of your favourite albums, then go judge your friends basd on what they picked.</p>
        </header>
        <div className='home_albums'>
            <img className ="home_img" src='https://m.media-amazon.com/images/I/71v0b7YG+zL._SL1500_.jpg'></img>
        </div>
    </div>
    )
}


export default Home;