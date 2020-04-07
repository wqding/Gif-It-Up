    
import React, { useState, useContext } from 'react';

import Tile from './Tile'
import {SearchResultsContext} from '../contexts/SearchResultsContext'
const TileList = () => {
    const [results, setResults] = useContext(SearchResultsContext);

    return(
        <div className = "tile-list">{
            results.map((gif) => {
                return <Tile key={gif.id} title={gif.title} username={gif.username} src={gif.src} />
            })
        }</div>
    )
}

export default TileList
