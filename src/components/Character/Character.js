import {
  Card, CardActionArea, CardContent, CardMedia, Chip, Grid, Typography, Box, CardActions, Button,
} from '@mui/material';
import useStatus from '../../hooks/useStatus';

const Character = ({ name, image, status }) => {
  const color = useStatus(status);

  return (
    <Grid item xs={3}>
      <Card>
        <CardActionArea sx={{ transition: '0.2s', ':hover': { transform: 'scale(1.05)' } }}>
          <CardMedia sx={{ height: 0, paddingTop: '100%', position: 'relative' }} alt={image} image={image}>
            <Box sx={{ position: 'absolute', top: 5, right: 5 }} >
              <Chip sx={{ borderRadius: 2, padding: '1px', fontWeight: 'bold' }} label={status} color={color} variant="contained" />
            </Box>
          </CardMedia>
          <CardContent>
            <Typography fontWeight='bold' variant='h5' component='h5'>{name}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ display: 'flex' }}>
          <Button variant='contained'>Detalles</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Character;
