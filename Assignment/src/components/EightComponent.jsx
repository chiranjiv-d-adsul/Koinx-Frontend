import React from 'react';

const EightComponent = () => {
  return (
    <div className="sm:w-[426px] sm:h-[515px] gap-[30px] rounded-2xl w-full  h-[25.75rem] bg-[#0052FE]">
      <div className='md:px-[31px] px-[10px] py-[16px] rounded-lg gap-[19px]'>
        <div className=' flex flex-col items-center justify-center sm:gap-[19px] md:px-[18.5px] gap-3  px-[10px] md:py-[15px] py-[8px]'>
          <h1 className='text-[#FFFFFF] font-inter font-semibold gap-[14px] text-2xl leading-40 text-center'>Get Started with KoinX for FREE</h1>
          <p className='text-[#F2F2F2] font-inter font-medium text-sm leading-24 text-center'>With our range of features that you can equip for free,
            KoinX allows you to be more educated and aware of your tax reports.</p>
        <img className='sm:pt-[39px]' src="/src/assets/Frame.svg" alt="" height={'166.22px'} width={'166.22px'} />

        <button className='w-[241px] h-[48px] flex gap-[6px] justify-between items-center rounded-lg px-[24px] py-[10px] bg-[#FFFFFF] font-inter font-semibold text-base leading-28'> Get Started for FREE <img src="/src/assets/ArrowRight.svg" alt="" /> </button>
        </div>
      </div>
    </div>
  );
};

export default EightComponent;
