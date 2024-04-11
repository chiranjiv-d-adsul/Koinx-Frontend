import React from "react";

const SeventhComponent = () => {
  return (
    <>
      <div className="flex flex-col md:h-[776px] md:w-[881px] my-[1.25rem] w-full  border border-solid border-gray-300 bg-white rounded-[0.5rem] p-[1.5rem] gap-[1.5rem]">
        <h1 className="font-Inter font-semibold text-[24px] text-[#0F1629] leading-7">
          Team
        </h1>
        <p className="font-Inter font-medium text-[16px] leading-6 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla in
          delectus dicta tempore vero ullam maxime ad blanditiis deleniti
          tenetur.
        </p>
        <div className="flex md:flex-row flex-col justify-betweenn items-center rounded-lg p-[11.19px] pr-[19.9px] gap-4 hover:border hover:border-solid bg-[#E8F4FD] hover:border-blue-500">
          <div className="w-[128.61px]  px-[16px]  gap-[13.19px]  ">
            {" "}
            <img className="rounded-[6.68px] " src="/src/assets/Mask Group.png" alt="" width={96.35} height={104.81} />
            <h2 className= " font-Inter font-medium text-[15px] leading-[18.15px] text-[#0F1629] text-center"> John Smith</h2>
            <h3 className="text-[#788F9B] font-Inter font-medium text-[12px] leading-[14.52px] text-center">Designation</h3>
          </div>

          <div>
            {" "}
            <p className="text-justify ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              necessitatibus numquam cum saepe rerum! Quidem libero
              exercitationem, quos necessitatibus deleniti non. Provident
              exercitationem distinctio perferendis!
            </p>{" "}
          </div>



        </div>
        <div className="flex md:flex-row flex-col justify-betweenn items-center rounded-lg p-[11.19px] pr-[19.9px] gap-4 hover:border hover:border-solid bg-[#E8F4FD] hover:border-blue-500">
          <div className="w-[128.61px]  px-[16px]  gap-[13.19px]  ">
            {" "}
            <img className="rounded-[6.68px] " src="/src/assets/sandeep.png" alt="" width={96.35} height={104.81} />
            <h2 className= " font-Inter font-medium text-[15px] leading-[18.15px] text-[#0F1629] text-center"> Elina Williams</h2>
            <h3 className="text-[#788F9B] font-Inter font-medium text-[12px] leading-[14.52px] text-center">Designation</h3>
          </div>

          <div>
            {" "}
            <p className="text-justify ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              necessitatibus numquam cum saepe rerum! Quidem libero
              exercitationem, quos necessitatibus deleniti non. Provident
              exercitationem distinctio perferendis!
            </p>{" "}
          </div>



        </div>
        <div className="flex md:flex-row flex-col justify-betweenn items-center rounded-lg p-[11.19px] pr-[19.9px] gap-4 hover:border hover:border-solid bg-[#E8F4FD] hover:border-blue-500">
          <div className="w-[128.61px]  px-[16px]  gap-[13.19px]  ">
            {" "}
            <img className="rounded-[6.68px] " src="/src/assets/sandeep2.png" alt="" width={96.35} height={104.81} />
            <h2 className= " font-Inter font-medium text-[15px] leading-[18.15px] text-[#0F1629] text-center"> John Smith</h2>
            <h3 className="text-[#788F9B] font-Inter font-medium text-[12px] leading-[14.52px] text-center">Designation</h3>
          </div>

          <div>
            {" "}
            <p className="text-justify ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              necessitatibus numquam cum saepe rerum! Quidem libero
              exercitationem, quos necessitatibus deleniti non. Provident
              exercitationem distinctio perferendis!
            </p>{" "}
          </div>



        </div>
      </div>
    </>
  );
};

export default SeventhComponent;
