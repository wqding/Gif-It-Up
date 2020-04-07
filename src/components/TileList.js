import React, {useContext} from 'react';
import {SavedGifsContext} from '../contexts/SavedGifsContext'


import Tile from './Tile'
const TileList = (props) => {
    const [savedGifs, setSavedGifs] = useContext(SavedGifsContext);

    const isSaved = (id) => {
        for(let i=0; i < savedGifs.length; i++){
            if(Object.values(savedGifs[i]).includes(id)) return true
        }
        return false;
    }

    // const updateSavedFlags = () => {
    //     let newResults = results;
    //     for(let i=0; i < newResults.length; i++){
    //         if(isSaved(newResults[i].id)){
    //             newResults[i].saved = true;
    //         }else{
    //             newResults[i].saved = false;
    //         }
    //     }
    //     setResults(newResults);
    // }

    return(
        <div className = "tile-list">
            {
                props.gifs.map((gif) => {
                    return <Tile
                        key={gif.id}
                        gif={gif}
                        saved={isSaved(gif.id)}
                    />                    
                })
            }
        </div>
    )
}

export default TileList;
