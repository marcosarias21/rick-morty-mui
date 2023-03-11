import { Container } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DetailCharacter } from '../../components/DetailCharacter';
import { Navbar } from '../../components/Navbar';
import useFetch from '../../hooks/useFetch';

const Detail = () => {
  const { id } = useParams();
  const [detailPj, setDetailPj] = useState({});
  const { dataCharacter, isLoading } = useFetch(`https://rickandmortyapi.com/api/character/${id}`);
  console.log(detailPj);

  useEffect(() => {
    setDetailPj(dataCharacter);
  }, [dataCharacter]);

  return (
    <>
    <Navbar />
    <Container maxWidth='lg'>
      <DetailCharacter {...detailPj} />
    </Container>
    </>
  );
};

export default Detail;
