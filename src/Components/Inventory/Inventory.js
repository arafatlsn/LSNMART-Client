import React from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
  const {_id} = useParams();
  console.log(_id)
  return (
    <div>
      <h1>Your product is {_id}</h1>
    </div>
  );
};

export default Inventory;