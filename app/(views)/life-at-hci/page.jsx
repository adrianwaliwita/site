"use client";
import Container from "app/sections/Container";
import { Card } from "app/components/Card";
import GrowWithoutLimits from "../../components/GrowWithoutLimits";
import MarqueeVert from "app/components/MarqueeVert";
import CTA from "app/sections/CTA";
import Reveal from "app/components/Reveal";
import HyperText from "app/components/HyperText";
import ScrollReveal from "app/components/ScrollReveal";
import SectionTextRight from "app/sections/SectionTextRight";
import HoverCard from "app/components/HoverCard";
import HoverCard2 from "app/components/HoverCard2";
import Button from "app/components/Button";
import MarqueeHori from "app/components/MarqueeHori";

const progressImages = [
  { img: "/about/1.jpg" },
  { img: "/about/2.jpg" },
  { img: "/about/3.jpg" },
  { img: "/about/4.jpg" },
  { img: "/about/5.jpg" },
  { img: "/about/6.jpg" },
  { img: "/about/7.jpg" },
];
const accredit = [
  { img: "/accredit/ACCA.jpg" },
  { img: "/accredit/CIMA.jpg" },
  { img: "/accredit/CMA.jpg" },
  { img: "/accredit/GPTW.jpg" },
  { img: "/accredit/CPA.jpg" },

  { img: "/accredit/GPTW-WOMEN.jpg" },
];

const LifeAtHci = () => {
  return (
    <div className="w-full">
      <section className="flex flex-col items-center w-full ">
        {/* Content Section */}
        <div className="w-full px-[5vw] pt-[5vw] text-center">
          <div className="container mx-auto h-full sm:p-10">
            <header className="flex flex-col justify-center items-center">
              <div className="px-4 ">
                {/* Title Section */}
                <div>
                  <div className="text-2xl lg:text-3xl tracking-widest font-GTAmerica font-bold">
                    LIFE AT HCI
                    <span className="bg-gradient-to-bl from-[#27253c] to-[#0000ff] bg-clip-text text-transparent">
                      .
                    </span>
                    <div className="flex justify-center w-full">
                      <div className="w-40 h-[2px] bg-gradient-to-bl from-[#27253c] to-[#0000ff] my-4"></div>
                    </div>
                  </div>
                </div>

                {/* Main Heading */}

                <h1 className="text-5xl md:text-[5vw] font-GTAmerica font-bold">
                  <Reveal boxColor={"#5046e6"} duration={0.4898}>
                    <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                      A WORKPLACE
                    </span>
                  </Reveal>{" "}
                  LIKE NO OTHER{" "}
                </h1>

                {/* Description */}

                <div className="text-sm md:text-base xl:text-xl font-arial mt-7">
                  Where every day is a chance to learn, laugh, and fall in love
                  with what you do.
                </div>
              </div>
            </header>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4  px-[5vw]">
            <HoverCard
              title={"Our People"}
              description={
                "We are focused on creating a workplace that is safe, inclusive, and reflects the diversity of the communities we serve with: Diversity, Equity, and Inclusion (DEl) Programs Employee Well-being Programs Leadership training initiatives"
              }
              img={"/sustainability/Our-People.jpg"}
            />
            <HoverCard
              title={"Our Environment"}
              description={
                "We're committed to reducing our environmental footprint and promoting sustainable practices with: Waste Reduction and Recycling, Programs, Environmental Conservation, Campaigns, Ocean Clean Up Initiatives"
              }
              img={"/sustainability/Our-Environment.jpg"}
            />{" "}
            <HoverCard
              title={"Our Community"}
              description={
                "We are dedicated to giving back to our community and positively impacting the lives of those around us through: Donation Drives, Uplifting Programs, Food Distribution, and Annual Christmas Charity"
              }
              img={"/sustainability/Our-Community.jpg"}
            />
          </div>
        </div>{" "}
        {/* Marquee Section */}
      </section>

      <section className="px-4 sm:px-[5%] h:20vh md:h-[100vh] mx-auto flex items-center justify-center mb-[-10vh] ">
        <div className="flex flex-col w-full">
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-8 items-center ">
            <div className="w-full ">
              <div className="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-2 gap-2">
                <HoverCard2
                  title={"Stronger Together"}
                  description={'"To us, challenges are best tackled as a team"'}
                  img={"/people/1.jpg"}
                />
                <HoverCard2
                  title={"Personal Journeys"}
                  description={
                    '"We measure people against their past selves, not each other"'
                  }
                  img={"/people/2.jpg"}
                />
                <HoverCard2
                  title={"Open Door Policy"}
                  description={`"Our doors are open to all team member's ideas and perspectives."'`}
                  img={"/people/3.jpg"}
                />
                <HoverCard2
                  title={"Continuous Improvement"}
                  description={
                    ' "We collectively work towards small improvements which make a big impact over time"'
                  }
                  img={"/people/4.jpg"}
                />
              </div>
            </div>

            <div className=" flex items-center  ">
              <div className="font-GTAmerica text-[4vw] leading-[4vw] font-bold tracking-normal text-black text-left md:text-left">
                EVERY SINGLE DAY, <br />
                OUR TEAM CLOCKS IN WITH A
                <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent ml-[12px]">
                  PASSION
                </span>{" "}
                FOR THE WORK THEY DO
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA title={"CONNECT WITH US TODAY"}></CTA>
    </div>
  );
};

export default LifeAtHci;
