"use client";

import { Card } from "../components/Card"; // Adjust import path as needed

const SectionTextRight = ({
  titleBeforeBlue,
  titleAfterBlue,
  blueTitle,
  description,
  component,
}) => {
  return (
    <section className="px-4 sm:px-[5%] h-auto mx-auto flex items-center justify-center md:pt-[5%]">
      <div className="flex flex-col w-full">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-8 items-center ">
          <div className="h-full w-full order-first md:order-none flex justify-center">
            {component || <Card />}
          </div>
          <div className="">
            <p className="font-GTAmerica text-4xl md:text-4xl lg:text-7xl font-bold tracking-normal text-black text-left md:text-left">
              {titleBeforeBlue}
              <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent ml-[12px]">
                {blueTitle}
              </span>
              {titleAfterBlue}
            </p>
            <div className="pr-0 sm:pr-[5vw]">
              <p className="font-arial text-sm sm:text-base lg:text-xl mt-4 text-black">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTextRight;
