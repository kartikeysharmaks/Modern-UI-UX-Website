import React from 'react';
import { card } from '../assets';
import styles,{layout} from '../style';
import Button from './Button';

const CardDeal = () => {
  return (
    <div className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          Find a better card deal <br className='sm:block hidden'/> in a very few steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum facilis enim earum quidem repellat consequatur, reiciendis id, reprehenderit voluptatibus labore nam commodi, ad illum. Quasi nulla vel explicabo sit adipisci.
        </p>
        <Button styles={'mt-10'}/>
      </div>
      <div className={`${layout.sectionImg}`}>
        <img src={card} alt="card" className='w-[100%] h-[100%] ' />
      </div>
    </div>
  );
};

export default CardDeal;