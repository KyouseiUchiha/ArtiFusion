import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import ClearIcon from '@mui/icons-material/Clear';

const SearchBar = ({ placeholder, onSearch }) => {
  const [searchText, setSearchText] = useState('');
  const [showClearButton, setShowClearButton] = useState(false);

  const handleSearch = (value) => {
    setSearchText(value);
    setShowClearButton(value !== '');
    onSearch(value);
  };
  

  const handleClear = () => {
    setSearchText('');
    setShowClearButton(false);
    onSearch('');
  };

  return (
    <div style={{ 
      border: '1px solid #e6e6e6', 
      borderRadius: '5px', 
      padding: '10px',
      margin:'1rem',
      width: '80%'
    }}>


      <Input
        type="text"
        placeholder={placeholder}
        value={searchText}
        onChange={(event) => handleSearch(event.target.value)}
        endAdornment={
          <InputAdornment position="end">
            {showClearButton ? (
              <IconButton onClick={handleClear}>
                <ClearIcon />
              </IconButton>
            ) : (
              <SearchIcon />
            )}
          </InputAdornment>
        }
      />
    </div>
  );
};

export default SearchBar;
