// components/GalleryNavbar.js
import { Chip } from '@mui/material';

const GalleryNavbar = ({ onSelect }) => {
  const categories = ['All', 'Manga & Visual Novel','Image', 'Stories' ];

  return (
    <div className="gallery-navbar">
      {categories.map((category, index) => (
        <Chip
          key={index}
          label={category}
          onClick={() => onSelect(category)}
          style={{ margin: '0 0.5rem 0.5rem 0', cursor: 'pointer'}}
        />
      ))}
    </div>
  );
};

export default GalleryNavbar;
