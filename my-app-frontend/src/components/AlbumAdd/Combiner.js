import React , {useState} from 'react';
import SearchFunction from './SearchFunction';

function Combiner({onSearch}){
    
    return (

    <div id="content_container">
    <p className="search_content">Search for an album to get started!</p>
    <input className="search_content" type="text" name="search" placeholder="Search..." onChange={(e) => onSearch(e.target.value)}></input>
    <SearchFunction search = {onSearch} />
    </div>
    )
}

export default Combiner;