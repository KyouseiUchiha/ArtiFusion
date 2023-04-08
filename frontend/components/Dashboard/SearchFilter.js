import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const SearchFilter = () => {
  return (
    <ButtonGroup variant="outlined" style={{ margin: '1rem', width: '80%' }}>
      <Button>Projects</Button>
      <Button>Images</Button>
      <Button>Stories</Button>
      <Button>Mangas</Button>
      <Button>Requests</Button>
    </ButtonGroup>
  );
};

export default SearchFilter;
