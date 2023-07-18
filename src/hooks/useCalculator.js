import { useState } from 'react';

const useCalculator = (initialData) => {
  const [data, setData] = useState(initialData);

  const incrementQuantity = (index) => {
    setData(prevData => {
      const newData = [...prevData];
      newData[index].quantity += 1;
      return newData;
    });
  };

  const decrementQuantity = (index) => {
    setData(prevData => {
      const newData = [...prevData];
      if (newData[index].quantity > 0) {
        newData[index].quantity -= 1;
      }
      return newData;
    });
  };

  return { data, incrementQuantity, decrementQuantity };
};

export default useCalculator;