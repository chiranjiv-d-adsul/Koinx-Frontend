import React from "react";

const NinthComponent = () => {
  return (
    <>
      <div className="sm:w-[427px] sm:h-[225px]  w-full h-[11.25rem] mt-[1.25rem] p-[24px] flex flex-col gap-[24px] bg-[#FFFFFF]">
        <h1 className="font-Inter font-semibold text-[24px] leading-7">
          Trending Coins (24h)
        </h1>
        <div className="flex gap-[24px]  justify-between  items-center ">
          <div className="flex gap-[6px]">
            <img
              src="/assets/Ethereum-ETH.png.png"
              alt=""
              height={24}
              width={24}
            />
            <h2 className="text-[#0F1629] font-Inter font-medium text-[16px] leading-[24px]">Ethereum</h2>
          </div>
          <div className=" bg-[#EBF9F4] text-[#14B079] p-[8px] rounded-lg gap-[8px]">
            A 8.21 %
          </div>
        </div>
        <div className="flex gap-[24px]  justify-between  items-center ">
          <div className="flex gap-[6px]">
            <img
              src="/assets/bnb.png"
              alt=""
              height={24}
              width={24}
            />
            <h2 className="text-[#0F1629] font-Inter font-medium text-[16px] leading-[24px]">Ethereum</h2>
          </div>
          <div className=" bg-[#EBF9F4] text-[#14B079] p-[8px] rounded-lg gap-[8px]">
            A 8.21 %
          </div>
        </div>
      </div>
    </>
  );
};

export default NinthComponent;
