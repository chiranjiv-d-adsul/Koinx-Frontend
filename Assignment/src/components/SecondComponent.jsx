import React from 'react'
import { dashLinks } from "../constants/index";


const SecondComponent = () => {
  return (
    <>
      <div className="my-[1.25rem] bg-[#D3E0E6] w-full h-[4.8rem] sm:w-[881px] sm:h-[48px] gap-[32px] border  items-center overflow-scroll">
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
    </>
  )
}

export default SecondComponent;
