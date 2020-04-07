import React, { createContext, useState } from "react";

const SavedGifsContext = createContext([]);

const SavedGifsProvider = (props) => {
    const [savedGifs, setSavedGifs] = useState([]);
    return(
        <SavedGifsContext.Provider value={[savedGifs, setSavedGifs]}>
            {props.children}
        </SavedGifsContext.Provider>
    );
}

export {SavedGifsContext, SavedGifsProvider};