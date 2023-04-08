import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import ClearIcon from '@mui/icons-material/Clear';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const SearchBar = ({ placeholder, onSearch }) => {
  const [searchText, setSearchText] = useState('');
  const [showClearButton, setShowClearButton] = useState(false);

  const handleSearch = value => {
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
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #e6e6e6',
        borderRadius: '5px',
        padding: '10px',
        margin: '2rem',
        width: '96%',
        justifyContent: 'center',
       
      }}
    >
      <Input
        type="text"
        placeholder={placeholder}
        value={searchText}
        onChange={event => handleSearch(event.target.value)}
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
      <ButtonGroup variant="outlined" style={{ marginLeft: '1rem' }}>
        <Button>Projects</Button>
        <Button>Images</Button>
        <Button>Stories</Button>
        <Button>Mangas</Button>
        <Button>Requests</Button>
      </ButtonGroup>
    </div>
  );
};

export default SearchBar;
