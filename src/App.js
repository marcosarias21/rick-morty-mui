import { Container, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { Character } from './components/Character';
import { Navbar } from './components/Navbar';
import { SkeletonCard } from './components/SkeletonCard';
import useFetch from './hooks/useFetch';

const App = () => {
  const [data, setData] = useState([]);
  const { dataCharacter, isLoading } = useFetch('https://rickandmortyapi.com/api/character');

  useEffect(() => {
    setData(dataCharacter);
  }, [data]);

  return (
    <>
      <Navbar />
      <Container>
        <Grid container sx={{ mt: 4 }} spacing={2}>
          {isLoading ? [1, 2, 3, 4].map(item => <SkeletonCard key={item} />)
            : dataCharacter?.results?.map(dataPj => <Character key={dataPj.id} {...dataPj} />)}

        </Grid>
      </Container>
    </>
  );
};

export default App;
