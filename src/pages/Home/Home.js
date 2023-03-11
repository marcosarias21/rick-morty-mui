import { Box, Container, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { Character } from '../../components/Character';
import { FilterSpecie } from '../../components/FilterSpecie';
import { Navbar } from '../../components/Navbar';
import { NavLinkPopover } from '../../components/NavLinkPopover';
import { SelectTypePj } from '../../components/SelectTypePj';
import { SkeletonCard } from '../../components/SkeletonCard';
import useFetch from '../../hooks/useFetch';
import { useCharacterBook } from '../../store/characterStore';

const Home = () => {
  const [data, setData] = useState([]);
  const { status, specie, name } = useCharacterBook();
  const { dataCharacter, isLoading } = useFetch(`https://rickandmortyapi.com/api/character/?status=${status}&species=${specie}&name=${name}`);
  useEffect(() => {
    setData(dataCharacter);
  }, [data]);

  return (
    <Box position='relative'>
      <Navbar />
      <Container maxWidth='xl' sx={{ display: { xs: 'block', sm: 'flex', md: 'flex' }, position: 'relative' }}>
        <Box sx={{
          mt: 6, borderRadius: 1, marginRight: 5, position: 'relative', width: { xs: '100%', md: 'auto' },
        }}>
          <Box sx={{
            position: 'sticky', top: '5.5em', border: '1px solid gray', width: { xs: '100%' }, padding: 2, borderRadius: 2,
          }}>
            <SelectTypePj />
            <FilterSpecie />
          </Box>
        </Box>
        <Grid container sx={{ mt: 4 }} spacing={2}>
          {isLoading ? [1, 2, 3, 4].map(item => <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }} key={item} ><SkeletonCard /></Box>)
            : dataCharacter?.results?.map(dataPj => <Character key={dataPj.id} {...dataPj} />)}

        </Grid>
      </Container>
      <NavLinkPopover />
    </Box>
  );
};

export default Home;
