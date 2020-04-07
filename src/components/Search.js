import React from 'react';
import Container from '@material-ui/core/Container';
import {Jumbotron} from 'react-bootstrap'
import SearchBar from './SearchBar'
import TileList from './TileList';


const Search = () => {
    
    return(
        <div>
            <Jumbotron fluid>
                <Container>
                    <SearchBar/>
                </Container>
            </Jumbotron>
            <TileList/>
        </div>
    )
}

export default Search;