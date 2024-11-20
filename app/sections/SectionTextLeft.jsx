"use client";
import { Card } from "../components/Card"; // Adjust import path as needed

const SectionTextLeft = ({
  titleBeforeBlue,
  titleAfterBlue,
  blueTitle,
  description,
  component,
}) => {
  return (
    <section className="px-4 sm:px-[7%] mx-auto bg-white pb-20">
      <div className="flex flex-col">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-8 items-center">
          <div className="order-last md:order-first">
            <p className="font-GTAmerica text-4xl md:text-4xl lg:text-7xl font-bold tracking-normal text-black text-left md:text-left">
              {titleBeforeBlue}
              <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                {blueTitle}
              </span>
              {titleAfterBlue}
            </p>
            <div>
              <p className="font-arial text-sm sm:text-base lg:text-xl mt-4 text-gray-700">
                {description}
              </p>
            </div>
          </div>
          <div className="h-full w-full order-first md:order-last flex justify-center">
            {component || <Card />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTextLeft;
