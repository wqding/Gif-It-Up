import React, { useState, useContext } from 'react';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { Paper, InputBase, Button } from '@material-ui/core';
import {SearchResultsContext} from '../contexts/SearchResultsContext'
import {GifDialogContext} from '../contexts/GifDialogContext'

import  { Link } from 'react-router-dom'

import axios from 'axios';


const SEARCH_NAME_PARAM ='q';
const TRANSLATE_NAME_PARAM = 's';

const SearchBar = (props) => {
    const [inputText, setInputText] = useState();
    const [results, setResults] = useContext(SearchResultsContext);
    const [[gifShown, setGifShown],[showGifDialog, setShowGifDialog]] = useContext(GifDialogContext);


    const showGif = (gif) => {
        setShowGifDialog(true);
        setGifShown(gif);
    }

    const loadMultipleGifsFromURL = (url) => {
        props.setOpenLoading(true);
        axios.get(url)
        .then(res => {
            storeSearchResults(res.data)
            props.setOpenLoading(false);
        })
        .catch(err => {
            console.log(err)
        });
    }

    const loadSingleGifFromURL = (url) => {
        props.setOpenLoading(true);
        axios.get(url)
        .then(res => {
            let gif = {
                id: res.data.data.id,
                saved: false,
                title:res.data.data.title,
                username: res.data.data.username,
                src: res.data.data.images.downsized.url
            }
            showGif(gif)
            props.setOpenLoading(false);
        })
        .catch(err => {
            console.log(err)
        });
    }

    const searchGifs = () =>{
        let url = `https://knowhow-react-challenge.prod.with-datafire.io/gif/search?${SEARCH_NAME_PARAM}=${inputText}`;
        loadMultipleGifsFromURL(url);
    }

    const showRandom = () => {
        let url = `https://knowhow-react-challenge.prod.with-datafire.io/gif/random`;
        loadSingleGifFromURL(url);
    }

    const showTrending = () => {
        let url = `https://knowhow-react-challenge.prod.with-datafire.io/gif/trending`;
        loadMultipleGifsFromURL(url);
    }

    const storeSearchResults = (searchResults) => {
        let condensedResults = searchResults.data.map(gif => {
            return {
                id: gif.id,
                saved: false,
                title: gif.title,
                username: gif.username,
                src: gif.images.downsized.url
            }
        });
        setResults(condensedResults);
    }

    const showTranslate = () => {
        let url = `https://knowhow-react-challenge.prod.with-datafire.io/gif/translate?${TRANSLATE_NAME_PARAM}=${inputText}`;
        loadSingleGifFromURL(url);
    }
    
    return(
        <Paper>
            <InputBase
                style={{marginLeft:10}}
                autoFocus
                placeholder="Search"
                onChange={(e) => {setInputText(e.target.value)}}
            />
            <IconButton color="primary" aria-label="search" onClick={searchGifs}>
                <SearchIcon />
            </IconButton>
            <Button onClick={showTranslate} color="primary">Translate</Button>
            <Button onClick={showRandom} color="primary">Random</Button>
            <Button onClick={showTrending} color="primary">Trending</Button>
            <Link to='/saved'><Button color="primary">View Saved</Button></Link>
        </Paper>
    )
}

export default SearchBar;