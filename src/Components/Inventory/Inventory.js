import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
  const [product, setProduct] = useState([]);
  const {_id} = useParams();
  useEffect(() => {
    const func = async() => {
      const url = `http://localhost:5000/product?prod=${_id.split(':')[1]}`
    const { data } = await axios.get(url)
    setProduct(data);
    }
    func()
  }, [])

  console.log(product)
  const { img, name, description, price, quantity, supplier } = product;
  
  return (
    <div>
      <div>
        <img src={img} alt="product" />
      </div>
    </div>
  );
};

export default Inventory;