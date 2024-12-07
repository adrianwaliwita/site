import Container from "app/sections/Container";
import { Card } from "app/components/Card";
import GrowWithoutLimits from "../../components/GrowWithoutLimits";
import MarqueeVert from "app/components/MarqueeVert";
import CTA from "app/sections/CTA";
import AwardWinning from "app/components/AwardWinning";
import { headingStyles, bodyTextStyles } from "app/constants/FontStyles";

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
                <h1 className={headingStyles.LargeHeading}>
                  BE A PART OF THE <br />
                  <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                    DIFFERENCE
                  </span>
                </h1>

                {/* Description */}
                <p className={bodyTextStyles.descriptionLeft}>
                  A culture that allows you to be unapologetically you and the
                  support you need to thrive.
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
      <div className="mb-[5vh] md:mb-[10vh]">
        <AwardWinning />
      </div>

      <CTA
        title={"Ready to be part of the team?"}
        href={"/contact"}
        text={"Get in touch"}
      ></CTA>
    </div>
  );
};

export default JoinUs;
