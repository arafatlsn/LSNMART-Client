import React from 'react';
import './SpinnerComp.css'

const SpinnerComp = () => {
  return (
    <div className='absolute top-[50%] left-[40%] lg:left-[50%]'>
      <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
  );
};

export default SpinnerComp;