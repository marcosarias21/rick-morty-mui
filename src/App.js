import { Container, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { Character } from './components/Character';
import { Navbar } from './components/Navbar';
import useFetch from './hooks/useFetch';

const App = () => {
  const [dataCharacter, setDataCharacter] = useState([]);
  const { data } = useFetch('https://rickandmortyapi.com/api/character');

  useEffect(() => {
    setDataCharacter(data);
  }, [data]);

  return (
    <>
      <Navbar />
      <Container>
        <Grid container sx={{ mt: 4 }} spacing={2}>
          {dataCharacter?.results?.map(dataPj => <Character key={dataPj.id}
          {...dataPj} />)}
        </Grid>
      </Container>
    </>
  );
};

export default App;
