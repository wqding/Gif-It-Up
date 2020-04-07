import React, { useState, useContext } from 'react';
import Container from '@material-ui/core/Container';
import {SavedGifsContext} from '../contexts/SavedGifsContext'
import {SearchResultsContext} from '../contexts/SearchResultsContext'

const Tile = (props) => {
    const [saved, setSaved] = useState(props.gif.saved);
    const [savedGifs, setSavedGifs] = useContext(SavedGifsContext);
    const [searchResults, setSearchResults] = useContext(SearchResultsContext);

    const deleteGifFromSaved = () => {
        return savedGifs.filter(savedGif => savedGif.id !== props.gif.id);
    }

    const toggleSave = () => {
        if(saved){
            let newSavedGifs = deleteGifFromSaved();
            setSavedGifs(newSavedGifs);
        }else{
            let newSavedGifs = savedGifs;
            let gifData = props.gif;
            gifData.saved = true;
            newSavedGifs.push(gifData);
            setSavedGifs(newSavedGifs)
        }
        setSaved(!saved);
    }

    return (
        <div className="tile">
            <img src={props.gif.src} alt="" />
            <p>
                Title: {props.gif.title}
            </p>
            <p>
                Username: {props.gif.username}
            </p>
            
            <div className="overlay">
                <span className="icon-btn" 
                    style={{color: saved?'rgb(119, 59, 231)':'white'}} 
                    onClick={toggleSave}
                >
                    <i className="fas fa-heart"/>
                </span>
            </div>
        </div>
    )
}

export default Tile;