import React, { useState, useContext } from 'react';
import {SavedGifsContext} from '../contexts/SavedGifsContext'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import  { Link } from 'react-router-dom'

import TileList from './TileList';


const SavedGifs = () => {
    const [savedGifs, setSavedGifs] = useContext(SavedGifsContext);
    console.log(savedGifs)
    return(
        <div>
            <Container>
                <Button color="primary"><Link to='/'> Go Back</Link></Button>
            </Container>
            <TileList gifs={savedGifs}/>
        </div>
    )
}

export default SavedGifs;