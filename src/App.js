import { Typography } from '@mui/material';
import './App.css';
import useFetch from './hooks/useFetch';

const App = () => {
  const { data } = useFetch('https://rickandmortyapi.com/api/character');
  console.log(data);
  return (
    <>
      <Typography variant='h5'>HOLA HOLA HOLA</Typography>
      <Typography variant='p' sx={{ fontWeight: 'bold' }}>Advanced</Typography>

    </>
  );
};

export default App;
