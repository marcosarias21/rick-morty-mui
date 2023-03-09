import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [dataCharacter, setDataCharacter] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    const { data } = await axios(url);
    setDataCharacter(data);
    setIsLoading(false);
  };
  useEffect(() => {
    getData();
  }, [url]);

  return { dataCharacter, isLoading };
};

export default useFetch;
