import React, {useContext} from 'react';
import {SavedGifsContext} from '../contexts/SavedGifsContext'


import Tile from './Tile'
const TileList = (props) => {
    const [savedGifs, setSavedGifs] = useContext(SavedGifsContext);

    return(
        <div className = "tile-list">
            {
                props.gifs.map((gif) => {
                    return <Tile
                        key={gif.id} 
                        gif={gif}
                        // saved={true}
                    />                    
                })
            }
        </div>
    )
}

export default TileList;
