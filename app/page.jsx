// app/page.jsx
"use client";

import Container from "./sections/Container";
import { cn } from "@/lib/utils";
import GrowWithoutLimits from "./components/GrowWithoutLimits";
import SectionTextRight from "./sections/SectionTextRight";
import { useEffect } from "react";

import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import MarqueeVert from "./components/MarqueeVert";
import MarqueeHori from "./components/MarqueeHori";
import Button from "./components/Button";

const progressImages = [
  { img: "/progress/1.jpg" },

  {
    img: "/progress/10.jpg",
  },
  {
    img: "/progress/2.jpg",
  },
  {
    img: "/progress/9.jpg",
  },
  {
    img: "/progress/3.jpg",
  },
  {
    img: "/progress/8.jpg",
  },
  {
    img: "/progress/4.jpg",
  },
  {
    img: "/progress/9.jpg",
  },
  {
    img: "/progress/5.jpg",
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
];

const accredit = [
  { img: "/accredit/ACCA.jpg" },
  { img: "/accredit/CIMA.jpg" },
  { img: "/accredit/CMA.jpg" },
  { img: "/accredit/GPTW.jpg" },
  { img: "/accredit/CPA.jpg" },

  { img: "/accredit/GPTW-WOMEN.jpg" },
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
      "Inclusive of initial setup, hiring, infrastructure, employee benefits, and account management.",
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
  return (
    <div>
      {/* Main Content Section */}
      <Container className="max-w-7xl pt-[10vh] md:pt-0 lg:max-w-[180rem] flex flex-wrap h-[40vh] md:h-dvh w-[100%]  overflow-x-clip relative mb-20">
        {/* First column */}
        <div className="flex items-center text-center md:text-left w-full  md:w-2/3 lg:w-1/2 px-5 md:px-[5%] lg:px-[5%] order-2 md:order-1">
          <div className="max-w-full md:w-full mb-8">
            <h1 className="text-4xl md:text-[7.5vw] font-GTAmerica md:leading-[7.5vw] font-bold mt-[3vh] md:mt-0">
              <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                SCALE
              </span>{" "}
              WITH CONFIDENCE
            </h1>
            <p className="font-arial text-sm py-3  leading-normal text-gray-700 lg:text-lg   md:text-base xl:text-xl ">
              Our world-class operating model and top-tier talent enable
              agility, resilience, and efficiency. We provide tailored solutions
              for a transforming world.
            </p>
            <Button text="Get in Touch" href="/contact" />
          </div>
        </div>

        {/* Second column - 2x2 grid */}
        <div className="hidden  md:flex items-center md:w-1/3 lg:w-1/2  justify-center  md:rotate-45 mt-10 order-1 md:order-2">
          <div className="grid grid-cols-2 grid-rows-2 gap-4 w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] lg:w-[50vw] lg:h-[50vw] md:mt-[-70%] md:mr-[-50%]">
            <div className="bg-image1 bg-[length:300%] bg-center md:w-200 pt-[100%] rounded-3xl scroll-move "></div>
            <div className="bg-image1 bg-[length:300%] bg-center md:w-full pt-[100%] rounded-3xl scroll-move"></div>
            <div className="bg-image1 bg-[length:300%] bg-center md:w-full pt-[100%] rounded-3xl"></div>
            <div className="bg-image1 bg-[length:300%] bg-center md:w-full pt-[100%] rounded-3xl"></div>
          </div>
        </div>
      </Container>

      <SectionTextRight
        titleBeforeBlue={"A"}
        blueTitle={"PATH"}
        titleAfterBlue={" TO PROGRESS"}
        description="We are a leading provider of BPO services, recognized for
        delivering a comprehensive range of solutions, including
        finance and accounting, procurement, technology, and
        marketing as a service. Our team is committed to innovation
        and excellence and continues to set new standards in the
        outsourcing industry. We build lasting partnerships through
        exceptional service and tailored solutions that meet the
        unique needs of our global partners. By embracing industry
        best practices and leveraging cutting-edge technologies, our
        team drives optimal performance and sustainable growth for
        every client. We are H Connect International, a trusted
        partner for businesses worldwide, empowering them to thrive
        in an ever-evolving market."
        component={<MarqueeVert items={progressImages} />}
      ></SectionTextRight>

      <Container>
        <section>
          <div className="">
            <div className="px-8 mx-auto  bg-white">
              <div className="flex flex-col">
                {/* Starts component */}
                <div className="mt-6 pt-12">
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-1 md:gap-24 items-center text-center">
                    {/* Marquee comes first on mobile */}

                    <div>
                      <p className="font-GTAmerica text-4xl md:px-5 md:text-[7vw] md:leading-[7vw]  lg:text-[4.6vw]  font-bold tracking-normal text-black text-center">
                        <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                          GROW
                        </span>{" "}
                        WITHOUT LIMITS{" "}
                      </p>

                      <p className="font-arial text-sm md:text-base xl:text-xl  text-black">
                        We are a leading provider of BPO services, recognized
                        for delivering a comprehensive range of solutions,
                        including finance and accounting, procurement,
                        technology, and marketing as a service. Our team is
                        committed to innovation and excellence and continues to
                        set new standards in the outsourcing industry.
                      </p>
                    </div>
                  </div>
                  <div className="pt-[5vh]">
                    <GrowWithoutLimits features={featuresData} />
                  </div>
                </div>
                {/* Ends component 1 */}
              </div>
            </div>
          </div>
        </section>
      </Container>
      <div className="pt-[5vh] md:pt-[10vh]"></div>

      <section className="px-4 sm:px-[7%] mx-auto bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] flex items-center  h:20vh md:h-[87vh] ">
        {" "}
        {/* replace with section text left with conditional rendering */}
        <div className="flex flex-col">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-8 items-center">
            <div className="order-last md:order-first">
              <p className="font-GTAmerica text-4xl md:text-[7vw] md:leading-[7vw]  lg:text-[4.6vw]  font-bold tracking-normal ">
                <span className=" text-white">CEO'S MESSAGE </span>
              </p>
              <div>
                <p className="font-arial text-sm md:text-base xl:text-xl pb-[10vh] text-white">
                  "We do what we say, no excuses. Our relationships are built on
                  trust earned by delivering on our promises time and time
                  again. That's the kind of company and the kind of people we
                  are."
                </p>
              </div>
            </div>
            <div className="h-full w-full order-first md:order-last flex justify-center">
              <div className="max-w-[100vw] w-[100vw] md:max-w-[50vw] md:w-[40vw] mt-8 md:mt-0 md:m-6">
                <div
                  className={cn(
                    "group cursor-pointer overflow-hidden relative card rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                    "bg-[url('/deshaka.jpg')] bg-cover aspect-square"
                    // Preload hover image
                  )}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Container>
        <section>
          <div className="pt-[5vh] md:pt-[10vh]">
            <div className="px-8 mx-auto  bg-white">
              <div className="flex flex-col">
                {/* Starts component */}
                <div className=" ">
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-1 md:gap-24 items-center text-center">
                    {/* Marquee comes first on mobile */}

                    <div>
                      <p className="font-GTAmerica text-4xl md:px-5 md:text-[7vw] md:leading-[7vw]  lg:text-[4.6vw]  font-bold tracking-normal text-black text-center ">
                        <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                          ACCREDITED
                        </span>{" "}
                        BY THE BEST{" "}
                      </p>

                      <p className="font-arial text-sm md:text-base xl:text-xl  text-black">
                        We are a leading provider of BPO services, recognized
                        for delivering a comprehensive range of solutions,
                        including finance and accounting, procurement,
                        technology, and marketing as a service. Our team is
                        committed to innovation and excellence and continues to
                        set new standards in the outsourcing industry.
                      </p>
                    </div>
                  </div>
                  <div className="pt-[5vh]">
                    <MarqueeHori items={accredit}> </MarqueeHori>
                  </div>
                </div>
                {/* Ends component 1 */}
              </div>
            </div>
          </div>
        </section>
      </Container>

      <Container>
        <div className="">
          <div className="px-8  mx-auto mt-[-30px]  bg-white">
            <div className="flex flex-col">
              {/* Starts component */}
              <div className="mt-6 pt-12">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-1 md:gap-24 items-center text-center">
                  {/* Marquee comes first on mobile */}

                  <div>
                    <p className="font-GTAmerica text-4xl md:px-5 md:text-[7vw] md:leading-[7vw]  lg:text-[4.6vw]  font-bold tracking-normal text-black text-center">
                      CREATING AN{" "}
                      <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                        IMPACT
                      </span>{" "}
                      THAT MATTERS
                    </p>

                    <p className="font-arial text-sm md:text-base xl:text-xl  text-black">
                      We are a leading provider of BPO services, recognized for
                      delivering a comprehensive range of solutions, including
                      finance and accounting, procurement, technology, and
                      marketing as a service. Our team is committed to
                      innovation and excellence and continues to set new
                      standards in the outsourcing industry.
                    </p>
                  </div>
                </div>
              </div>
              {/* Ends component 1 */}
            </div>
          </div>
        </div>
        <div className="bg-white">
          <section className="max-w-5xl mx-auto w-full px-10 py-10">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 w-full">
              <div className="border p-7 rounded-xl bg-image1  bg-[length:350%] bg-center drop-shadow-md border-neutral-800/50 col-span-2 flex flex-col gap-y-10 justify-between">
                <div className="absolute inset-0 bg-[#07033eb1] opacity-50 rounded-xl z-[-1]"></div>

                <div className="flex flex-col gap-y-3.5">
                  <p className="font-medium text-white">
                    It's been an amazing experience working with H Connect
                    International! The team is professional, reliable, and
                    incredibly responsive. They’ve consistently delivered
                    exceptional service, even with a vast range of demanding
                    clients. We couldn't have hoped for a better partner, and
                    with our big plans for growth, we see this as a great
                    opportunity to grow together.
                  </p>
                </div>
                <div className="flex flex-col">
                  <img
                    src="/united-states.png"
                    alt="Emily Smith"
                    className="h-10 w-10"
                  />
                  <p className="pt-2 text-sm font-semibold text-white">
                    US CLIENT
                  </p>
                  <p className="text-sm font-medium text-slate-100/70">
                    Marketing Manager at ABC Company
                  </p>
                </div>
              </div>
              <div className="border p-7 rounded-xl bg-neutral-900 drop-shadow-md border-neutral-800/50 col-span-3 flex flex-col gap-y-10 justify-between">
                <div className="flex flex-col gap-y-3.5 ">
                  <p className="font-medium text-white max-w-[70%]">
                    We engaged H Connect International to help support our
                    business with finance, payroll, and HR. We were invited to
                    their Colombo office during which the team undertook
                    comprehensive training and process mapping to really
                    understand our requirements. <br />H Connect International
                    has become an important partner, delivering consistent value
                    and helping us implement improved business processes.
                  </p>
                </div>
                <div className="flex flex-col">
                  <img
                    src="/united-states.png"
                    alt="Emily Smith"
                    className="h-10 w-10"
                  />
                  <p className="pt-2 text-sm font-semibold text-white">
                    US CLIENT
                  </p>
                  <p className="text-sm font-medium text-slate-100/70">
                    CEO at XYZ Corporation
                  </p>
                </div>
              </div>
              <div className="border p-7 rounded-xl bg-neutral-900 drop-shadow-md border-neutral-800/50 col-span-3 flex flex-col gap-y-10 justify-between">
                <div className="flex flex-col gap-y-3.5">
                  <p className="font-medium text-white max-w-[70%]">
                    We would like to extend our sincere gratitude to the team at
                    H Connect International for their help in our day-to-day
                    accounting functions. It has been 5 years since we partnered
                    with H Connect International, and it’s been a consistently
                    smooth journey. Thank you for all the support
                  </p>
                </div>
                <div className="flex flex-col">
                  <img
                    src="/united-kingdom.png"
                    alt="Sarah Brown"
                    className="h-10 w-10"
                  />
                  <p className="pt-2 text-sm font-semibold text-white">
                    UK CLIENT
                  </p>
                  <p className="text-sm font-medium text-slate-100/70">
                    CTO at XYZ Corporation
                  </p>
                </div>
              </div>
              <div className="border p-7 rounded-xl bg-image1  bg-[length:350%] bg-center drop-shadow-md border-neutral-800/50 col-span-2 flex flex-col gap-y-10 justify-between">
                <div className="absolute inset-0 bg-[#08007cb1] opacity-50 rounded-xl z-[-1]"></div>
                <div className="flex flex-col gap-y-3.5">
                  <p className="font-bold text-xl text-white">
                    Reliable service uptime
                  </p>
                  <p className="font-medium text-white">
                    We are incredibly grateful to have worked with our team at H
                    Connect International these past few years. They've been
                    consistently responsive, highly committed to delivering
                    excellent results, and always maintained fantastic
                    communication throughout every project. It's truly been a
                    pleasure partnering with them, and I look forward to
                    continuing the great work together.
                  </p>
                </div>
                <div className="flex flex-col">
                  <img
                    src="/australia.png"
                    alt="James White"
                    className="h-10 w-10"
                  />
                  <p className="pt-2 text-sm font-semibold text-white">
                    AUSTRALIAN CLIENT
                  </p>
                  <p className="text-sm font-medium text-slate-100/70">
                    COO at XYZ Corporation
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Container>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] rounded-3xl p-8 text-center sm:p-16 md:px-24 md:py-20 lg:px-28">
          <div className="max-w-2xl mx-auto">
            <h2 className="  font-GTAmerica text-4xl  md:text-[4vw] md:leading-[4vw] font-bold tracking-normal text-white text-center">
              READY TO START?
            </h2>
          </div>
          <div className="flex flex-col justify-center gap-4 mt-8 sm:flex-row sm:items-center sm:gap-5">
            <a
              className="inline-flex items-center justify-center bg-white text-lg font-semibold text-indigo-700 shadow-sm transition-all duration-150 rounded-xl px-8 py-4 hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              href="/contact"
            >
              Get in Touch
            </a>
            <a
              className="inline-flex items-center justify-center bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] text-lg font-semibold text-white shadow-sm ring-1 ring-inset ring-white transition-all duration-150 rounded-xl px-8 py-4 hover:bg-indigo-800"
              href="/about"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
