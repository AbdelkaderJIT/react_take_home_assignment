import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  transform: expand ? 'rotate(0deg)' : 'rotate(0deg)',
}));

export default function ProductCard({ title, description, price, image, isFavourite, onFavourite, id }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 350,   minWidth: 350, minHeight: 450, maxHeight: 450 , margin: 2 }}>
      <CardHeader
        
        title={
           <Typography
      variant="h6"
      sx={{
        fontSize: '1.1rem',
        whiteSpace: 'normal',      // Allow wrapping
        overflow: 'visible',       // Show all text
        textOverflow: 'unset',     // No ellipsis
        minHeight: 'unset',
        maxHeight: 'unset'
      }}
    >
      {title}
    </Typography>
    }
       
      />
      <CardMedia
        component="img"
  image={image}
  alt={title}
  sx={{ objectFit: 'contain', maxHeight: 200, width: '100%' }}
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
         <IconButton aria-label="add to favorites" onClick={() => onFavourite(id)}>
          {isFavourite ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
        </IconButton>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
          <Typography>
            Details
          </Typography>
        </ExpandMore>
      </CardActions>
      
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>
            {description}
          </Typography>
        </CardContent>
      </Collapse>
      <CardContent>
          <Typography>
            Price: ${price}
          </Typography>
        </CardContent>
    </Card>
  );
}