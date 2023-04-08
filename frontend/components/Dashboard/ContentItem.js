import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

const ContentItem = ({ title, username, thumbnailUrl }) => {
  return (
    <div className="card">
      <div className="card-image" style={{ position: 'relative' }}>
        <figure className="image is-4by3">
          <img src={thumbnailUrl} alt={title} />
        </figure>
       
      </div> 

      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <Avatar>{username.charAt(0).toUpperCase()}</Avatar>
          </div>
          <div className="media-content" style={{ overflow: 'hidden' }}>
            <p className="title is-4">{title}</p>
            <p className="subtitle is-6">by {username}</p>
          </div>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 70,
            right: 10,
          }}
        >
          <Stack direction="row" spacing={0.5}>
            <IconButton color="primary" aria-label="like" size="small">
              <FavoriteIcon fontSize="small" />
            </IconButton>
            <IconButton color="primary" aria-label="comment" size="small">
              <CommentIcon fontSize="small" />
            </IconButton>
            <IconButton color="primary" aria-label="share" size="small">
              <ShareIcon fontSize="small" />
            </IconButton>
          </Stack>
        </div>
      </div>
      
    </div>
  );
};


export default ContentItem;
