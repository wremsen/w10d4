// import React from 'react';
import { NavLink } from "react-router-dom";

const GalleryNavigation = ({galleries}) => {
    return (
    <div>
    <h1>Galleries</h1>;
    <ul>
        {galleries.map((gallery) => (
            <NavLink key={gallery.id} to={`/gallery/${gallery.id}`} className="active">
                {gallery.name}
            </NavLink> 
        ))}
    </ul>
    </div>
    );
};

export default GalleryNavigation;

