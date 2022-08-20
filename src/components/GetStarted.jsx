import React from 'react';
import styles from '../style';
import { arrowUp } from '../assets';

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] p-[2px] cursor-pointer rounded-full bg-blue-gradient`}>
      <div className={`${styles.flexCenter} bg-primary h-[100%] w-[100%] flex-col rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className='font-poppins font-medium text-[18px] leading-[23px] mr-1'>
            <span className='text-gradient'>
              Get
            </span>
          </p>
          <img src={arrowUp} alt="arrow" className='w-[23px] h-[23px] object-contain' />
        </div>
        <p className='font-poppins font-medium text-[18px] leading-[23px]'>
            <span className='text-gradient'>
              Started
            </span>
          </p>
      </div>

    </div>
  )
};

export default GetStarted;