import React, { useState, useContext } from 'react';
import {SavedGifsContext} from '../contexts/SavedGifsContext'
import {GifDialogContext} from '../contexts/GifDialogContext'

const Tile = (props) => {
    const [saved, setSaved] = useState(props.gif.saved);
    const [savedGifs, setSavedGifs] = useContext(SavedGifsContext);
    const [gifShown, setGifShown] = useContext(GifDialogContext);
    const [showGifDialog, setShowGifDialog] = useContext(GifDialogContext);

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
            setSavedGifs(newSavedGifs);
        }
        setSaved(!saved);
    }

    const showGif = () => {
        setShowGifDialog(true);
        setGifShown(props.gif);
    }

    return (
        <div className="tile">
            <img src={props.gif.src} alt="gif"/>
            <p>
                Title: {props.gif.title}
            </p>
            <p>
                Username: {props.gif.username}
            </p>
            
            <div className="overlay">
                <span className="save-btn" 
                    style={{color: saved?'rgb(119, 59, 231)':'white'}} 
                    onClick={toggleSave}
                >
                    <i className="fas fa-heart"/>
                </span>
                <span className="fullscreen" 
                    onClick={showGif}
                >
                    <i className="fas fa-expand"/>
                </span>
            </div>
        </div>
    )
}

export default Tile;