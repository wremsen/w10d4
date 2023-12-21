// import React from 'react';
import { NavLink } from "react-router-dom";
import '../components/GalleryNavigation.css';

const GalleryNavigation = ({galleries}) => {
  return (
    <div>
      <h1>Galleries</h1>
        {galleries.map((gallery) => (
          <NavLink key={gallery.id} to={`/gallery/${gallery.id}`} className="active">
            {gallery.name}
          </NavLink> 
        ))}
    </div>
  );
};

export default GalleryNavigation;

