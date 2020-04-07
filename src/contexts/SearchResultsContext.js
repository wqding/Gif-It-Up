import React, { createContext, useState } from "react";

const SearchResultsContext = createContext([]);

const SearchResultsProvider = (props) => {
    const [result, setResult] = useState([]);
    return(
        <SearchResultsContext.Provider value={[result, setResult]}>
            {props.children}
        </SearchResultsContext.Provider>
    );
}

export {SearchResultsContext, SearchResultsProvider};