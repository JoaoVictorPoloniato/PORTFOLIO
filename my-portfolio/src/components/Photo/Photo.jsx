import React from "react";
import myPhoto from "./myphoto.png";
import './index.css';

function Photo() {
    return (
        <div className="photo-container">
            <img
                className="photo"
                src={myPhoto}
                alt="eu"
            />
        </div>
    );
}

export default Photo;
