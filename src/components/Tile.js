import React, { useState } from 'react';

const Tile = (gif) => {
    const [saved, setSaved] = useState(false);
    return (
        
        <div className="tile">
            <div>
                <img src={gif.src} alt="" />
                title: {gif.title}
                username: {gif.username}
                <div className="overlay">
                    <span className="icon"><i class="fas fa-heart"/></span>
                </div>
            </div>
            
        </div>
    )
}

export default Tile;