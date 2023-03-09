import { useEffect, useState } from 'react';

const useStatus = (status) => {
  const [color, setColor] = useState();
  useEffect(() => {
    if (status === 'Alive') {
      setColor('success');
    } else if (status === 'Dead') {
      setColor('error');
    } else {
      setColor('secondary');
    }
  }, []);

  return color;
};

export default useStatus;
