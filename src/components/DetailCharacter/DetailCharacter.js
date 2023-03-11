import {
  Box, List, ListItemText, Typography,
} from '@mui/material';
import './detailcharacter.css';

const DetailCharacter = ({
  name, status, location, image, species, gender, origin, episode,
}) => {
  console.log(image);
  return (
    <Box mt={10}>
      <Typography variant='h3' textAlign='center' fontWeight='bold' >{name}</Typography>
      <Box sx={{
        display: 'flex', justifyContent: 'center', gap: 4, mt: 2,
      }}>
        <Box>
          <img src={image} alt={image} className='image-width' />
        </Box>
        <Box sx={{ mr: 15 }}>
          <Typography variant='h5' fontWeight='bold'>Character Detail</Typography>
          <List>
              <ListItemText> <Typography component='span' fontWeight='bold'>Name</Typography>: {name}</ListItemText>
              <ListItemText> <Typography component='span' fontWeight='bold'>Status</Typography>: {status}</ListItemText>
              <ListItemText> <Typography component='span' fontWeight='bold'>Gender</Typography>: {gender}</ListItemText>
              <ListItemText> <Typography component='span' fontWeight='bold'>Specie</Typography>: {species}</ListItemText>
              <ListItemText> <Typography component='span' fontWeight='bold'>Location</Typography>: {location?.name}</ListItemText>
              <ListItemText> <Typography component='span' fontWeight='bold'>Originally From</Typography>: {origin?.name}</ListItemText>
          </List>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', px: 32 }}>
        <Typography textAlign='center'> Episodes :{episode?.map((ep, i) => i + 1).join('-')}</Typography>
      </Box>
    </Box>
  );
};

export default DetailCharacter;
