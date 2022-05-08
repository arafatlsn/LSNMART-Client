import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import SpinnerComp from '../SpinnerComp/SpinnerComp';

const Cards = () => {
  const [products, setProducts] = useState([])
  const [spinner, setSpinner] = useState(false);
  useEffect(() => {
    setSpinner(true);
    const func = async() => {
      const { data } = await axios.get('https://cryptic-everglades-57877.herokuapp.com/products?size=6');
      setProducts(data)
      setSpinner(false)
    }
    func()
  }, [])
  return (
    <>

      {
        spinner ? <SpinnerComp></SpinnerComp> : <div className='w-[100%] lg:w-[65%] mx-auto grid grid-cols-2 lg:grid-cols-6 justify-center justify-items-center gap-0 overflow-hidden'>
        {
          products.map(elProd => <Card key={elProd._id} elProd={elProd}></Card>)
        }
      </div>
      }

    </>
  );
};

export default Cards;