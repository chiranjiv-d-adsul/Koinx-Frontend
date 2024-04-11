
import React from "react";
import { dashLinks } from "../constants/index";

const Bitcoin = () => {
  return (
    <>
      <div className="sm:flex mx-[14px] ">
        <div className="bg-white sm:h-[4399px] border-4 sm:ml-[56px]    sm:mt-[56px]  mt-[1.44rem] ">
          <div className="sm:w-[881px]  sm:h-[711px]  w-full bg-yellow-200 p-[1.25rem] gap-[1.25rem]">
            1
          </div>
          <div className="my-[1.25rem] bg-[#D3E0E6] w-full h-[4.8rem] sm:w-[881px]  sm:h-[48px]  items-center">
            <ul className="flex justify-left gap-[2rem] items-center pb-[0.725rem] pt-[0.725rem]">
              {dashLinks.map((item) => (
                <li className="gap-[0.375rem]" key={item.label}>
                  <a
                    href={item.href}
                    className="font-montserrat leading-normal text-lg text-slate-gray"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className=" sm:w-[881px] sm:h-[632px] w-full bg-blue-300 h-[32.5rem] rounded-[0.5rem] p-[1.5rem] gap-[1.5rem]">f</div>
          <div className="sm:h-[556px] sm:w-[881px] my-[1.25rem] w-full h-[32.5rem] bg-pink-400 rounded-[0.5rem] p-[1.5rem] gap-[1.5rem]">
            4
          </div>
          <div className="sm:w-[881px] sm:h-[995px] my-[1.25rem] w-full h-[55.625rem] bg-[#d6baba] rounded-[0.5rem] p-[1.5rem] gap-[1.5rem]">
            5
          </div>
          <div className="sm:w-[881px] sm:h-[539px] my-[1.25rem] w-full h-[30.625rem] bg-blue-500 rounded-[0.5rem] p-[1.5rem] gap-[1.5rem]">
            6
          </div>
          <div className="sm:h-[776px] sm:w-[881px] my-[1.25rem] w-full h-[42.5rem] bg-orange-300 rounded-[0.5rem] p-[1.5rem] gap-[1.5rem]">
            7
          </div>
        </div>
        <div className="sm:mt-[56px] sm:ml-[6px]   sm:mr-[56px]  ">
          <div className=" sm:w-[426px] sm:h-[515px] w-full h-[25.75rem] bg-[#0052FE] border-[4px]">
            get start for free with koinx
          </div>
          <div className= "sm:w-[427px] sm:h-[225px] w-full h-[11.25rem] bg-orange-500 mt-[1.25rem] border-[4px]">
            Trending coins
          </div>
        </div>
      </div>

      <div className="sm:h-[628px]  sm:w-[1440px] w-full pt-[3.5rem] bg-[#FFFFFF]">
        <div className="mt-[4.34rem] ml-[5vw] mr-[5vw] mb-[4.34rem] ">
          <div>
            <h1>You May Also Like</h1>
          </div>
          <div className=" sm:h-[160px] mt-[1.25rem]  gap-[0.625rem] grid grid-cols-5">
            <div className="rounded-[1rem] p-[1.0625rem] border-[1px] bg-[#E3E3E3]">
              hello
            </div>
            <div className="rounded-[1rem] p-[1.0625rem] border-[1px] bg-[#E3E3E3]">
              hellpo
            </div>
            <div className="rounded-[1rem] p-[1.0625rem] border-[1px] bg-[#E3E3E3]">
              cdcds
            </div>
            <div className="rounded-[1rem] p-[1.0625rem] border-[1px] bg-[#E3E3E3]">
              cdcds
            </div>
            <div className="rounded-[1rem] p-[1.0625rem] border-[1px] bg-[#E3E3E3]">
              cdcds
            </div>
          </div>

          <div>
            <div className="mt-[1.875rem]">
              <h1>Trending Coins</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-5 mt-[1.25rem] mb-[1.875rem] gap-[0.625rem] sm:h-[160px]">
              <div className="rounded-[1rem] p-[1.0625rem] border-[1px] bg-[#E3E3E3]">
                cdcds
              </div>
              <div className="rounded-[1rem] p-[1.0625rem] border-[1px] bg-[#E3E3E3]">
                cdcds
              </div>
              <div className="rounded-[1rem] p-[1.0625rem] border-[1px] bg-[#E3E3E3]">
                cdcds
              </div>
              <div className="rounded-[1rem] p-[1.0625rem] border-[1px] bg-[#E3E3E3]">
                cdcds
              </div>
              <div className="rounded-[1rem] p-[1.0625rem] border-[1px] bg-[#E3E3E3]">
                cdcds
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bitcoin;
