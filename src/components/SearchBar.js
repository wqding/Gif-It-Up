import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { Paper, InputBase, Button } from '@material-ui/core';
import {SearchResultsContext} from '../contexts/SearchResultsContext'
import axios from 'axios';


const SEARCH_NAME_PARAM ='q';
const TRANSLATE_NAME_PARAM = 's';

// fix
const useStyles = makeStyles(() => ({
    input: {
        marginLeft: 10,
        width: '85%',
    }
}));

const SearchBar = () => {
    const classes = useStyles();
    const [searchText, setSearchText] = useState();
    const [results, setResults] = useContext(SearchResultsContext);

    const searchMemes = () =>{
        console.log(searchText)
        let url = `https://knowhow-react-challenge.prod.with-datafire.io/gif/search?${SEARCH_NAME_PARAM}=${searchText}`;
        axios.get(url)
        .then(res => {
            storeSearchResults(res.data)
        })
        .catch(err => {
            console.log(err)
        });
    }

    const storeSearchResults = (searchResults) => {
        let condensedResults = searchResults.data.map(gif => {
            return {
                id: gif.id,
                title: gif.title,
                username: gif.username,
                src: gif.images.downsized.url
            }
        })
        setResults(condensedResults)
    }

    const viewSaved = () => {

    }
    
    return(
        <Paper>
            <InputBase
                autoFocus
                className={classes.input}
                placeholder="Search"
                onChange={(e) => {setSearchText(e.target.value)}}
            />
            <IconButton color="primary" aria-label="search" onClick={searchMemes}>
                <SearchIcon />
            </IconButton>
            <Button onClick={viewSaved} color="primary">View Saved</Button>
        </Paper>
        
    )
}

export default SearchBar;