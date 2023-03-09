import {
  Card, CardContent, Grid, Skeleton,
} from '@mui/material';

const SkeletonCard = () => {
  return (
    <Grid item xs={3}>
      <Card sx={{ width: 280 }}>
        <Skeleton variant='rectangular' height={250} />
        <CardContent>
          <Skeleton height={25} />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default SkeletonCard;
