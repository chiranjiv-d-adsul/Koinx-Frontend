import React from 'react'

const FirstComponent = () => {
  return (
    <>
        <div className="sm:w-[881px]  sm:h-[711px]  w-full bg-yellow-200 sm:p-[1.25rem] gap-[1.25rem]">
            <div className="h-[40px] gap-[40px] bg-slate-500">
              <h1 className="flex gap-2">
                {" "}
                <img src="src/assets/bnb.png" alt="" width={36} height={36} />
                <h1 className="my-auto"> Bitcoin </h1> BTC
              </h1>
            </div>
            <div className="sm:my-[20px] mt-[18px] sm:mr-[20px] bg-amber-400 gap-[24px] sm:h-[574px]  h-[391px] ">
              <div className="sm:w-[568.72px] h-[66px] bg-green-200">s</div>
              <div className="sm:w-[827px] border bg-[#DEE1E6] my-[24px]"></div>
              <div className="sm:h-[460px]   h-[216.84px] sm:ml-[24px] sm:mr-[20px] sm:gap-[40px]  bg-neutral-500">
                w
              </div>
            </div>
          </div>
    </>
  )
}

export default FirstComponent;
