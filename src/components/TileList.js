import React from 'react';

import Tile from './Tile'
const TileList = (props) => {
    return(
        <div className = "tile-list">
            {
                props.gifs.map((gif) => {
                    return <Tile 
                        key={gif.id} 
                        gif={gif} 
                    />
                })
            }
        </div>
    )
}

export default TileList;
