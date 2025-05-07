// app/page.jsx
"use client";
import { useState } from "react";
import Container from "app/sections/Container";
import { cn } from "@/lib/utils";
import GrowWithoutLimits from "app/components/GrowWithoutLimits";
import SectionTextRight from "app/sections/SectionTextRight";
import SectionTextRightBlue from "app/sections/SectionTextRightBlue";
import SectionTextRightLong from "app/sections/SectionTextRightLong";
import MarqueeFront from "app/components/MarqueeFront";
import PostCarousel from "app/components/PostCarousel";
import Testimonials from "app/components/Testimonials";
import MarqueeHoriLogoSingle from "app/components/MarqueeHoriLogoSingle";
import MarqueeHoriLogoSingleReverse from "app/components/MarqueeHoriLogoSingleReverse";

const ausGov = [
  { img: "/AUS-Services/melb.jpg" },
  { img: "/AUS-Services/nt.jpg" },
  { img: "/AUS-Services/tasm.jpg" },

  { img: "/AUS-Services/qt.jpg" },
  { img: "/AUS-Services/nsw.jpg" },

  { img: "/AUS-Services/wa.jpg" },
  { img: "/AUS-Services/act.jpg" },
  { img: "/AUS-Services/sau.jpg" },
];

const ausUni = [
  { img: "/uni-logos/ecu.png" },
  { img: "/uni-logos/swinburne.png" },
  { img: "/uni-logos/deakin.png" },
  { img: "/uni-logos/curtin.png" },
  { img: "/uni-logos/cross.png" },

  { img: "/uni-logos/western.png" },
  { img: "/uni-logos/uniMel.png" },
  { img: "/uni-logos/queensland.png" },
  { img: "/uni-logos/monash.png" },
];

import {
  DividerBlueCenter,
  DividerBlueLeft,
  DividerWhiteLeft,
  DividerWhiteCenter,
} from "app/components/Divider";

import SectionTextLeft from "app/sections/SectionTextLeft";
import ProgressSection from "app/sections/progressSection";
import SectionTextLeftBlue from "app/sections/SectionTextLeftBlue";

import { useEffect } from "react";
import { headingStyles, bodyTextStyles } from "app/constants/FontStyles";
// or '@/constants/textStyles' depending on your project structure
import MarqueeVert from "app/components/MarqueeVert";
import MarqueeHori from "app/components/MarqueeHori";
import Button from "app/components/Button";

const accredit = [
  { img: "/accredit/ACCA.jpg" },
  { img: "/accredit/CIMA.jpg" },
  { img: "/accredit/CMA.jpg" },
  { img: "/accredit/GPTW.jpg" },
  { img: "/accredit/CPA.jpg" },
  { img: "/accredit/AMCHAM.jpg" },
  { img: "/accredit/BRIT.jpg" },
  { img: "/accredit/ACCU.jpg" },
  { img: "/accredit/SLASSCOM.jpg" },
  { img: "/accredit/EDB.jpg" },
];
const award = [
  { img: "/award/15.jpg" },
  { img: "/award/16.jpg" },
  { img: "/award/17.jpg" },
  { img: "/award/18.jpg" },
  { img: "/award/19.jpg" },
  { img: "/award/GPTW-WOMEN.jpg" },
  { img: "/award/SATYN-2.jpg" },
];

const featuresData = [
  {
    title: "Best-in-class Talent",
    description:
      "Work with a team of certified, driven, and expertly trained professionals",
  },
  {
    title: "70% Cost Arbitrage",
    description:
      "Inclusive of initial setup, hiring, infrastructure, employee benefits, and account management",
  },
  {
    title: "Scalability",
    description:
      "Grow your business with confidence and efficiency with our world-class operating model",
  },
  {
    title: "A True Extension",
    description: "Seamless integration into your existing team and goals",
  },
];

export default function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch(
        "https://hconnect-demo.saberion.org/wp-json/wp/v2/posts?per_page=3"
      );
      const data = await res.json();
      setBlogs(data);
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <div className="pt-[10vh] md:pt-[10vh] ">
        {/* Main Content Section */}
        <Container className="max-w-7xl pt-[10vh] md:pt-0 lg:max-w-[180rem] flex flex-wrap h-[40vh] md:h-dvh w-[100%]  overflow-x-clip relative mb-20 md:mb-0 ">
          {/* First column */}
          <div className="flex items-center text-center md:text-left w-full  md:w-2/3 lg:w-1/2 px-5 md:px-[5%] lg:px-[5%] order-2 md:order-1">
            <div className="max-w-full md:w-full mb-8">
              <h1 className="text-[13vw] leading-[13vw] md:text-[7.5vw] font-GTAmerica md:leading-[7.5vw] font-bold mt-[3vh] md:mt-0">
                <span className={headingStyles.gradient}>SCALE</span> WITH
                CONFIDENCE
              </h1>
              <div className={bodyTextStyles.primary}>
                Our world-class operating model and Australian-certified talent
                enable business agility, resilience, and efficiency. We provide
                tailored solutions for the Australian market and beyond.
              </div>
              <Button text="Learn More" href="/about" />
            </div>
          </div>
          {/* Second column - 2x2 grid */}
          <div className="hidden  md:flex items-center md:w-1/3 lg:w-1/2  justify-center  md:rotate-45 mt-10 order-1 md:order-2">
            <div className="grid grid-cols-2 grid-rows-2 gap-4 w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] lg:w-[50vw] lg:h-[50vw] md:mt-[-70%] md:mr-[-50%]">
              <div className="bg-image1 bg-[length:300%] bg-center md:w-full pt-[100%] rounded-3xl scroll-move"></div>
              <div className="bg-image1 bg-[length:300%] bg-center md:w-full pt-[100%] rounded-3xl scroll-move"></div>
              <div className="bg-image2 bg-[length:450%] bg-center md:w-200 pt-[100%] rounded-3xl scroll-move "></div>
              <div className="bg-image3 bg-[length:450%] bg-center md:w-full pt-[100%] rounded-3xl"></div>
            </div>
          </div>
        </Container>

        <div className="mt-[-5vh] md:pt-[10vh] mb-[-5vh] md:mb-[-15vh] mr-[5%]">
          <ProgressSection></ProgressSection>
        </div>

        <div className=""></div>

        <section>
          <div className=" mx-auto  px-4 pt-[5vh]  md:pt-[10vh] lg:px-6">
            <div className="mx-auto-sm text-center mb-8 lg:mb-16">
              <div className="font-GTAmerica text-4xl md:px-5 md:text-[7vw] md:leading-[7vw]  lg:text-[4.6vw]  font-bold tracking-normal text-black text-center">
                NATIONWIDE{" "}
                <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                  SUPPORT
                </span>{" "}
              </div>
              <div className=" lg:mt-[-2.3vh]">
                <DividerBlueCenter />
              </div>
              <div className={bodyTextStyles.descriptionCenter}>
                We expertly navigate regional nuances across Australia to ensure
                full compliance in every state.
              </div>
            </div>
            <MarqueeHoriLogoSingle items={ausGov}> </MarqueeHoriLogoSingle>
          </div>
        </section>

        <Container>
          <section>
            <div className="pt-0 md:pt-[10vh]">
              <div className=" mx-auto  bg-white">
                <div className="flex flex-col">
                  <div className="">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-1 md:gap-24 items-center text-center">
                      <div>
                        <div className={`${headingStyles.primaryCenter}`}>
                          <span className={headingStyles.gradient}>GROW</span>{" "}
                          WITHOUT LIMITS{" "}
                        </div>
                        <DividerBlueCenter />

                        <div
                          className={`space-y-4 mt-4 ${bodyTextStyles.descriptionCenter}`}
                        >
                          <div>
                            Reduce costs and scale confidently with our
                            world-class operating model and people practices.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pt-[5vh]">
                      <GrowWithoutLimits features={featuresData} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Container>

        <div className="pt-[5vh] md:pt-[vh] md:pb-[10vh] xl:pb-[8vh]"></div>

        <div className="relative h-[120vh] md:h-[120vh] lg:h-[100vh] xl:h-[80vh] bg-gradient-to-bl from-[#000000] to-[#0000ff]">
          {/* Background Image with parallax effect */}
          <div
            className="absolute inset-0 w-full  bg-cover bg-center z-0"
            style={{
              backgroundImage: "url(/Site-Wave-FIN.jpg)",
              backgroundAttachment: "fixed",
              opacity: 0.6,
            }}
          ></div>

          {/* Overlay with 50% opacity */}
          <div className="absolute inset-0 bg-gradient-to-bl from-black to-blue opacity-50 z-10"></div>

          {/* Content on top of the overlay */}
          <div className="relative z-20">
            <Container>
              <div className="py-12 ">
                <PostCarousel
                  items={blogs}
                  title="LATEST FROM H CONNECT INTERNATIONAL"
                />
              </div>
            </Container>
          </div>
        </div>

        <section className="md:pb-[5vh]">
          <div className="pt-[5vh] md:pt-[10vh] ">
            <div className="px-8 mx-auto bg-white">
              <div className="flex flex-col">
                <div className="">
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-1 md:gap-24 items-center text-center">
                    <div>
                      <div className={headingStyles.primaryCenter}>
                        <span className={headingStyles.gradient}>
                          ACCREDITED
                        </span>{" "}
                        BY THE BEST
                      </div>
                      <DividerBlueCenter />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center ">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-[5vh] w-[100%] ">
              {/* Carousel Section */}
              <div className="col-span-2">
                <MarqueeFront items={accredit} isActive={true}></MarqueeFront>
              </div>

              {/* Title Section */}
              <div className="col-span-1 flex justify-center md:justify-center items-center ">
                <h2 className="border-l-2 hidden md:block border-black pl-8 font-GTAmerica text-4xl  md:text-[3vw] md:leading-[7.5vw] lg:text-[4.6vw] font-bold tracking-normal text-black text-center bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent bl">
                  Accreditations
                </h2>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center bg-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-[5vh] w-[100%]  ">
              {/* Title Section */}
              <div className="col-span-1 flex justify-center md:justify-center items-center ">
                <h2 className="border-r-2 hidden md:block border-black pr-8  font-GTAmerica text-4xl  md:text-[3vw] md:leading-[7.5vw] lg:text-[4.6vw] ml-[-10vh] font-bold tracking-normal text-black text-center bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent ">
                  Awards
                </h2>
              </div>

              {/* Carousel Section */}
              <div className="col-span-2 mt-[-10vh] md:mt-0 md:w-[110%] md:ml-[-10vw] ">
                <MarqueeFront items={award}></MarqueeFront>
              </div>
            </div>
          </div>
        </section>

        <section className=" lg:mb-[-6vh] ">
          <SectionTextRight
            titleBeforeBlue={<>ONE OF THE </>}
            blueTitle={"FIRST FOUR"}
            titleAfterBlue={
              <>
                {" "}
                <br />
                <span className={headingStyles.gradient}> CPA </span> RECOGNIZED
                EMPLOYER PARTNERS IN SRI LANKA.
              </>
            }
            component={
              <div>
                <div className="max-w-[100vw] w-[100vw] md:max-w-[50vw] md:w-[40vw]  px-[2vw]   ">
                  <div
                    className={cn(
                      "group cursor-pointer overflow-hidden relative card rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 ",
                      "bg-[url('/cpa-fin.png')] bg-cover aspect-square"
                    )}
                  ></div>
                </div>
              </div>
            }
          ></SectionTextRight>
        </section>
        <section>
          <div className=" mx-auto  px-4 pt-[5vh]  md:pt-[10vh] lg:px-6">
            <div className="mx-auto-sm text-center mb-8 lg:mb-16">
              <div className="font-GTAmerica text-4xl md:px-5 md:text-[7vw] md:leading-[7vw]  lg:text-[4.6vw]  font-bold tracking-normal text-black text-center">
                <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                  POSITIONED
                </span>{" "}
                FOR AUSTRALIA
              </div>
              <div className=" lg:mt-[-2.3vh]">
                <DividerBlueCenter />
              </div>
              <div className={bodyTextStyles.descriptionCenter}>
                With 60% of our services delivered to Australia, our team is
                well-versed in supporting Australian business needs. We proudly
                hire graduates from leading Australian universities with
                campuses in Sri Lanka. This means our talent is not only highly
                skilled, but also Australian-educated and culturally aligned.
                Our people understand your market, your standards, and your
                expectations—making collaboration seamless and success
                achievable.
              </div>
            </div>
            <MarqueeHoriLogoSingleReverse items={ausUni}>
              {" "}
            </MarqueeHoriLogoSingleReverse>
          </div>
        </section>

        <Container>
          <div className="">
            {" "}
            <div className="px-8 mx-auto mt-[-0px] bg-white">
              {" "}
              <div className="flex flex-col">
                {" "}
                <div className="mt-6 pt-12">
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-1 md:gap-24 items-center text-center">
                    <div>
                      {" "}
                      <div className={`${headingStyles.primaryCenter}`}>
                        {" "}
                        CREATING AN{" "}
                        <span className={headingStyles.gradient}>
                          IMPACT
                        </span>{" "}
                        THAT MATTERS{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                  <DividerBlueCenter />
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>
          <div className="mt-8">
            <Testimonials />
          </div>
          {/* Call to Action Section */}
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mb-10  mt-[7vh]">
            <div className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] rounded-3xl p-8 text-center sm:p-16 md:px-24 md:py-20 lg:px-28">
              <div className="max-w-2xl mx-auto">
                <h2
                  className={`${headingStyles.primaryCenter} ${headingStyles.white}`}
                >
                  READY TO START?
                </h2>{" "}
              </div>
              <DividerWhiteCenter />

              <div className="flex flex-col justify-center gap-4 mt-8 sm:flex-row sm:items-center sm:gap-5">
                <a
                  className={`inline-flex items-center justify-center bg-white ${bodyTextStyles.cta} text-indigo-700 shadow-sm transition-all duration-150 rounded-xl px-8 py-4 hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`}
                  href="/contact"
                >
                  Get in Touch
                </a>
                <a
                  className={`inline-flex items-center justify-center bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] ${bodyTextStyles.cta} text-white shadow-sm ring-1 ring-inset ring-white transition-all duration-150 rounded-xl px-8 py-4 hover:bg-indigo-800`}
                  href="/about"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
