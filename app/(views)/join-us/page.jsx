import Container from "app/sections/Container";
import { Card } from "app/components/Card";
import GrowWithoutLimits from "../../components/GrowWithoutLimits";
import MarqueeVert from "app/components/MarqueeVert";
import CTA from "app/sections/CTA";

import MarqueeHori from "app/components/MarqueeHori";
const progressImages = [
  { img: "/progress/1.jpg" },
  {
    img: "/progress/2.jpg",
  },
  {
    img: "/progress/3.jpg",
  },
  {
    img: "/progress/4.jpg",
  },
  {
    img: "/progress/5.jpg",
  },
  {
    img: "/progress/6.jpg",
  },
  {
    img: "/progress/6.jpg",
  },
  {
    img: "/progress/7.jpg",
  },
  {
    img: "/progress/8.jpg",
  },
  {
    img: "/progress/9.jpg",
  },
  {
    img: "/progress/10.jpg",
  },
  {
    img: "/progress/11.jpg",
  },
  {
    img: "/progress/12.jpg",
  },
  {
    img: "/progress/13.jpg",
  },
];
const logos = [
  {
    name: "ISO",
    url: "/accredit/GPTW.jpg",
  },
  {
    name: "DPA",
    url: "/accredit/GPTW-WOMEN.jpg",
  },
];

const JoinUs = () => {
  return (
    <div>
      <section className="flex flex-wrap md:h-[90vh] w-full ">
        {/* Left Content Section */}
        <div className="w-full md:w-8/12 md:mb-10 px-[5vw]">
          <div className="container mx-auto h-full sm:p-10">
            <header className="h-[50vh] md:h-[80vh] flex flex-col justify-center">
              <div className="px-4">
                {/* Title Section */}
                <div className="">
                  <div className="text-2xl lg:text-3xl tracking-widest font-GTAmerica font-bold text-center md:text-left">
                    JOIN US
                    <span className="bg-gradient-to-bl from-[#27253c] to-[#0000ff] bg-clip-text text-transparent">
                      .
                    </span>
                    <div className="flex justify-center md:justify-start w-full">
                      <div className="w-40 h-[2px] bg-gradient-to-bl from-[#27253c] to-[#0000ff] my-4"></div>
                    </div>
                  </div>
                </div>

                {/* Main Heading */}
                <h1 className="text-5xl md:text-[6vw] font-GTAmerica font-bold text-center md:text-left pr-2">
                  BE A PART OF THE <br />
                  <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                    DIFFERENCE
                  </span>
                </h1>

                {/* Description */}
                <p className="text-sm md:text-base xl:text-xl font-arial mt-7 text-center md:text-left">
                  We deliver exceptional value through tailored services for
                  better outcomes, faster results, and smarter decisions.
                </p>
              </div>
            </header>
          </div>
        </div>

        {/* Right Marquee Section */}
        <div className="w-full sm:w-4/12 h-[50vh] sm:h-screen">
          <MarqueeVert
            className="w-full h-full object-cover rounded-md"
            items={progressImages}
          />
        </div>
      </section>
      <div className="">
        <div className="px-8 pb-24 mx-auto mt-[-50px]  bg-white">
          <div className="flex flex-col">
            {/* Starts component */}
            <div className="mt-6 pt-12">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-1 md:gap-24 items-center text-center">
                {/* Marquee comes first on mobile */}

                <div>
                  <p className="font-GTAmerica font-bold text-6xl md:text-7xl mt-8 tracking-normal text-balance ">
                    AN{" "}
                    <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                      AWARD-WINNING
                    </span>{" "}
                    CULTURE{" "}
                  </p>

                  <p className="text-base mt-4 text-gray-700 text-balance">
                    We are a leading provider of BPO services, recognized for
                    delivering a comprehensive range of solutions, including
                    finance and accounting, procurement, technology, and
                    marketing as a service. Our team is committed to innovation
                    and excellence and continues to set new standards in the
                    outsourcing industry.
                  </p>
                </div>
              </div>
              <div className="pt-10">
                <div className="w-full py-8">
                  <div className="flex w-full flex-col items-center justify-center px-4 md:px-20">
                    <div className="grid grid-cols-2 gap-x-6 md:grid-cols-2 ">
                      {logos.map((logo, key) => (
                        <img
                          key={key}
                          src={logo.url}
                          className="h-[300px] w-[300px] border-gray-300 border-1 "
                          alt={`${logo.name}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>
            {/* Ends component 1 */}
          </div>
        </div>
      </div>

      <CTA
        title="Ready to be part of the team?"
        description="Join an environment where your ideas can thrive and make a difference.
        "
      />
    </div>
  );
};

export default JoinUs;
