import React from "react";

import FirstComponent from "../components/FirstComponent";
import SecondComponent from "../components/SecondComponent";
import ThirdComponent from "../components/ThirdComponent";
import FourthComponent from "../components/FourthComponent";
import FifthComponent from "../components/FifthComponent";
import SixthComponent from "../components/SixthComponent";
import SeventhComponent from "../components/SeventhComponent";
import EightComponent from "../components/EightComponent";
import NinthComponent from "../components/NinthComponent";
import TenthComponent from "../components/TenthComponent";
import NavBar from "../components/NavBar";

const Bitcoin = () => {
  return (
    <>
    <NavBar/>
      <div className="sm:flex flex-col sm:flex-row ">
        <div className="bg-white   sm:ml-[56px]  mx-[14px]    sm:mt-[56px]  mt-[1.44rem] ">
          <FirstComponent />
          <SecondComponent />
          <ThirdComponent />
          <FourthComponent />
          <FifthComponent />
          <SixthComponent />
          <SeventhComponent />

            <TenthComponent />

        </div>

        <div className="sm:mt-[56px]  sm:ml-0 mx-[14px] sm:mr-[56px]    ">
          <EightComponent />
          <NinthComponent />
        </div>
      </div>
    </>
  );
};

export default Bitcoin;
