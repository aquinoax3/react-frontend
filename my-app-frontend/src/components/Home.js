import React from "react";

function Home() {
  return (
    <div>
        <header className="title"> 
            <h1> Album Picker </h1>
            <p id="intro">Pick five of your favourite albums, then go judge your friends basd on what they picked.</p>
        </header>
         <div className='cf'>
            <img className ="bottom" src='https://m.media-amazon.com/images/I/71v0b7YG+zL._SL1500_.jpg'></img>
            <img className ="top" src='https://i.scdn.co/image/ab67616d0000b27325b055377757b3cdd6f26b78'></img>
            </div>
        <div className='cf2'>
            <img className ="bottom" src='https://m.media-amazon.com/images/I/61GigFPx3RL._SL1200_.jpg'></img>
            <img className ="top" src='https://preview.redd.it/0twt7jdw3pu01.png?width=640&crop=smart&auto=webp&s=80099c3f3cd5d940c84f52f432e9ea4873a36f1d
'></img>
        </div> 
    </div>
  );
}

export default Home;
