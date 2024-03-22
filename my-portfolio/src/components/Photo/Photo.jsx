import React from "react";
import './index.css';

function Photo() {
    const handleMouseMove = (e) => {
        const photo = e.target;
        const boundingBox = photo.getBoundingClientRect();
        const offsetX = (e.clientX - boundingBox.left) / boundingBox.width - 0.5;
        const offsetY = (e.clientY - boundingBox.top) / boundingBox.height - 0.5;

        photo.style.transform = `translate(${offsetX * 10}px, ${offsetY * 10}px)`;
    };

    const handleMouseLeave = (e) => {
        e.target.style.transform = 'none';
    };

    return (
        <div className="photo-container">
            <img
                className="photo"
                src="https://avatars.githubusercontent.com/u/117031491?v=4"
                alt="eu"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            />
        </div>
    );
}

export default Photo;
