import { Box, Container, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { FilterSpecie } from './components/FilterSpecie';
import { Character } from './components/Character';
import { Navbar } from './components/Navbar';
import { SelectTypePj } from './components/SelectTypePj';
import { SkeletonCard } from './components/SkeletonCard';
import useFetch from './hooks/useFetch';
import { useCharacterBook } from './store/characterStore';

const App = () => {
  const [data, setData] = useState([]);
  const { status, specie, name } = useCharacterBook();
  console.log(status);
  const { dataCharacter, isLoading } = useFetch(`https://rickandmortyapi.com/api/character/?status=${status}&species=${specie}&name=${name}`);

  useEffect(() => {
    setData(dataCharacter);
  }, [data]);

  return (
    <Box position='relative'>
      <Navbar />
      <Container maxWidth='xl' sx={{ display: 'flex', position: 'relative' }}>
        <Box sx={{
          mt: 6, borderRadius: 1, marginRight: 5, position: 'relative',
        }}>
          <Box sx={{
            position: 'sticky', top: '5.5em', border: '1px solid gray', padding: 2, borderRadius: 2,
          }}>
            <SelectTypePj />
            <FilterSpecie />
          </Box>
        </Box>
        <Grid container sx={{ mt: 4 }} spacing={2}>
          {isLoading ? [1, 2, 3, 4].map(item => <SkeletonCard key={item} />)
            : dataCharacter?.results?.map(dataPj => <Character key={dataPj.id} {...dataPj} />)}

        </Grid>
      </Container>
    </Box>
  );
};

export default App;
