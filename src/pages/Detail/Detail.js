import { Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import { DetailCharacter } from '../../components/DetailCharacter';
import { Navbar } from '../../components/Navbar';
import useFetch from '../../hooks/useFetch';

const Detail = () => {
  const { id } = useParams();
  const { dataCharacter, isLoading } = useFetch(`https://rickandmortyapi.com/api/character/${id}`);
  console.log(isLoading);
  return (
    <>
    <Navbar />
    <Container maxWidth='xl'>
      <DetailCharacter />
    </Container>
    </>
  );
};

export default Detail;
