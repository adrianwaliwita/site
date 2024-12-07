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
import { headingStyles, bodyTextStyles } from "app/constants/FontStyles";

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
    <div className="w-full pt-[15vh] md:pt-[10vh]">
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

                <h1 className={headingStyles.LargeHeading}>
                  <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                    A WORKPLACE{" "}
                  </span>
                  LIKE NO OTHER
                </h1>

                {/* Description */}

                <div
                  className={`${bodyTextStyles.descriptionCenter} pb-10 md:pb-0`}
                >
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
      <section className="px-4 sm:px-[5%] h-auto md:h-screen flex items-center justify-center mb-[-10vh] py-12 md:py-0">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Text Section - First on Mobile, Second on Desktop */}
            <div className="order-1 md:order-2 flex items-center">
              <div className="text-black text-center md:text-left">
                <h2 className="font-GTAmerica text-3xl sm:text-4xl md:text-[4vw] lg:text-[3.5vw] font-bold leading-tight tracking-normal">
                  EVERY SINGLE DAY, <br />
                  OUR TEAM CLOCKS IN WITH A{" "}
                  <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                    PASSION
                  </span>{" "}
                  FOR THE WORK THEY DO
                </h2>
              </div>
            </div>

            {/* Cards Grid - Second on Mobile, First on Desktop */}
            <div className="order-2 md:order-1 w-full">
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 md:gap-6">
                <HoverCard2
                  title="Stronger Together"
                  description="To us, challenges are best tackled as a team"
                  img="/people/1.jpg"
                />
                <HoverCard2
                  title="Personal Journeys"
                  description="We measure people against their past selves, not each other"
                  img="/people/2.jpg"
                />
                <HoverCard2
                  title="Open Door Policy"
                  description="Our doors are open to all team member's ideas and perspectives"
                  img="/people/3.jpg"
                />
                <HoverCard2
                  title="Continuous Improvement"
                  description="We collectively work towards small improvements which make a big impact over time"
                  img="/people/4.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-[10vh]"></div>
      <CTA
        title={"Ready to be part of the team?"}
        description={
          "Join an environment where your ideas can thrive and make a difference."
        }
        href={"/contact"}
        text={"Get in touch"}
      ></CTA>{" "}
    </div>
  );
};

export default LifeAtHci;
