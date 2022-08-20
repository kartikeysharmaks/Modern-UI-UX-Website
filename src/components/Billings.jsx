import React from 'react';
import { apple,google,bill } from '../assets';
import styles,{layout} from '../style';

const Billings = () => {
  return (
    <div id='product' className={`${layout.sectionReverse}`}>
      <div className={`${layout.sectionImgReverse}`}>
        <img src={bill} alt="bill" className='relative z-[5] w-[100%] h-[100%]'/>
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
      </div>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          Easily control your <br className='sm:block hidden'/> billing & invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eveniet est inventore excepturi dolore ipsam quas? Laboriosam, maxime nisi sint sunt est architecto numquam iure quidem impedit facilis sequi debitis?
        </p>
        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img src={google} alt="google-playstore" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'/>
          <img src={apple} alt="apple-store" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'/>
        </div>
      </div>
    </div>
  );
};

export default Billings;