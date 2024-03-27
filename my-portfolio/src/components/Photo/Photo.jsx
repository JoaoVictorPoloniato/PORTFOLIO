import React, { useState, useEffect } from "react";
import myPhoto from "./myphoto.png";
import './index.css';

function Photo() {
    const [photoLoaded, setPhotoLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setPhotoLoaded(true);
        };
        img.src = myPhoto;
    }, []);

    return (
        <div className="perfil-photo">
            <div className={`photo-container ${photoLoaded ? 'loaded' : ''}`}>
                <img
                    className={`photo ${photoLoaded ? 'animate-slide' : ''}`}
                    src={myPhoto}
                    alt="eu"
                />
            </div>
        </div>
    );
}

export default Photo;
