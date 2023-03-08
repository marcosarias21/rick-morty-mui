import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetch = (url) => {
  console.log(url);
  const [dataCharacter, setDataCharacter] = useState([{
    data: null,
    isLoading: true,
  }]);

  const getData = async () => {
    const { data } = await axios(url);
    setDataCharacter({
      data,
      isLoading: false,
    });
  };
  useEffect(() => {
    getData();
  }, [url]);

  return dataCharacter;
};

export default useFetch;
