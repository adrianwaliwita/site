// app/page.jsx
"use client";
import Footer from "./sections/Footer";
import GridPattern from "./components/GridPattern";
import Image from "next/image";
import { Card } from "./components/Card";
import Container from "./sections/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cn } from "@/lib/utils";
import GrowWithoutLimits from "./components/GrowWithoutLimits";

import { useEffect } from "react";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import Reveal from "./components/Reveal";
import MarqueeVert from "./components/MarqueeVert";
import MarqueeHori from "./components/MarqueeHori";
import HyperText from "./components/HyperText";
import Button from "./components/Button";

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
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useGSAP(() => {
    gsap.from(
      ".scroll-move",
      {
        scrollTrigger: {
          trigger: ".scroll-move",
          start: "top 80%",
          end: "top 30%",
          scrub: true,
          // Uncomment to debug
          // markers: true,
        },
        opacity: 0,
        x: 300,
        duration: 1,
      },
      { scope: ".scroll-move" }
    ); // Add scope for proper cleanup
  });

  return (
    <div>
      {/* Main Content Section */}
      <Container className="max-w-7xl lg:max-w-[180rem] flex flex-wrap md:h-dvh w-[100%]  overflow-x-clip relative">
        {/* First column */}
        <div className="flex items-center text-center md:text-left w-full p-10 md:w-2/3 lg:w-1/2 px-5 md:px-[5%] lg:px-[5%] order-2 md:order-1">
          <div className="max-w-full md:w-full mb-8">
            <h1 className="text-6xl md:text-[7vw] font-GTAmerica font-bold ">
              <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                SCALE
              </span>{" "}
              WITH CONFIDENCE
            </h1>
            <p className="font-arial text-sm py-3 md:py-5 md:text-lg leading-normal text-gray-500 lg:text-lg xl:text-lg">
              Our world-class operating model and top-tier talent enable
              agility, resilience, and efficiency. We provide tailored solutions
              for a transforming world.
            </p>
            <Button />
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

      <Container>
        <section>
          <div className="px-8 pt-24 mx-auto mt-[-100px]">
            <div className="flex flex-col">
              {/* Starts component */}
              <div className="mt-6 pt-12">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-24 items-center">
                  {/* Marquee comes first on mobile */}
                  <div className="h-full w-full order-first md:order-none">
                    <MarqueeVert items={progressImages} />
                  </div>
                  <div>
                    <p className="font-GTAmerica font-bold text-6xl md:text-7xl mt-8 tracking-normal text-balance">
                      A{" "}
                      <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                        PATH
                      </span>{" "}
                      TO PROGRESS{" "}
                    </p>

                    <p className="text-base mt-4 text-gray-700 text-balance">
                      We are a leading provider of BPO services, recognized for
                      delivering a comprehensive range of solutions, including
                      finance and accounting, procurement, technology, and
                      marketing as a service. Our team is committed to
                      innovation and excellence and continues to set new
                      standards in the outsourcing industry. We build lasting
                      partnerships through exceptional service and tailored
                      solutions that meet the unique needs of our global
                      partners. By embracing industry best practices and
                      leveraging cutting-edge technologies, our team drives
                      optimal performance and sustainable growth for every
                      client. We are H Connect International, a trusted partner
                      for businesses worldwide, empowering them to thrive in an
                      ever-evolving market.
                    </p>
                    <hr className="mx-w-7 my-6 border-gray-200 sm:mx-auto lg:my-8" />

                    <div className="mt-6 text-xs font-medium grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-2 text-gray-950">
                      <div className="inline-flex items-center gap-2 text-xs text-gray-700">
                        <span className="text-gray-950 font-medium text-sm">
                          Clear data visibility
                        </span>
                      </div>
                      <div className="inline-flex items-center gap-2 text-xs text-gray-700">
                        <span className="text-gray-950 font-medium text-sm">
                          Reduced external factors
                        </span>
                      </div>
                      <div className="inline-flex items-center gap-2 text-xs text-gray-700">
                        <span className="text-gray-950 font-medium text-sm">
                          Enhanced stability
                        </span>
                      </div>
                      <div className="inline-flex items-center gap-2 text-xs text-gray-700">
                        <span className="text-gray-950 font-medium text-sm">
                          Accelerated times
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Ends component 1 */}
            </div>
          </div>
        </section>
      </Container>

      <Container>
        <section>
          <div className="">
            <div className="px-8 pb-24 mx-auto mb-[-50px]  bg-white">
              <div className="flex flex-col">
                {/* Starts component */}
                <div className="mt-6 pt-12">
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-1 md:gap-24 items-center text-center">
                    {/* Marquee comes first on mobile */}

                    <div>
                      <p className="font-GTAmerica font-bold text-6xl md:text-7xl mt-8 tracking-normal text-balance ">
                        <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                          GROWTH
                        </span>{" "}
                        WITHOUT LIMITS{" "}
                      </p>

                      <p className="text-base mt-4 text-gray-700 text-balance">
                        We are a leading provider of BPO services, recognized
                        for delivering a comprehensive range of solutions,
                        including finance and accounting, procurement,
                        technology, and marketing as a service. Our team is
                        committed to innovation and excellence and continues to
                        set new standards in the outsourcing industry.
                      </p>
                    </div>
                  </div>
                  <GrowWithoutLimits> </GrowWithoutLimits>
                </div>
                {/* Ends component 1 */}
              </div>
            </div>
          </div>
        </section>
      </Container>

      <div className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] ">
        <Container>
          <section>
            <div className="px-8 py-24 mx-auto">
              <div className="flex flex-col">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-24 items-center md:flex-row-reverse md:px-[2vw] xl:px-[5vw]">
                  <div>
                    <p className="font-GTAmerica text-white font-bold text-6xl md:text-7xl mt-8 tracking-normal text-balance">
                      <span className="bg-gradient-to-bl from-[#ffffff] to-[#ffffff] bg-clip-text text-transparent">
                        CEO'S
                      </span>{" "}
                      MESSAGE{" "}
                    </p>
                    <p className="text-base mt-4 text-white text-balance">
                      “We do what we say, no excuses. Our relationships are
                      built on trust earned by delivering on our promises time
                      and time again. That’s the kind of company and the kind of
                      people we are.”
                    </p>
                  </div>
                  <div className="h-full">
                    <MarqueeVert items={progressImages} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Container>
      </div>
      <div className="">
        <div className="px-8 pb-24 mx-auto mb-[-50px]  bg-white">
          <div className="flex flex-col">
            {/* Starts component */}
            <div className="mt-6 pt-12">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-1 md:gap-24 items-center text-center">
                {/* Marquee comes first on mobile */}

                <div>
                  <p className="font-GTAmerica font-bold text-6xl md:text-7xl mt-8 tracking-normal text-balance ">
                    <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                      ACCREDITED
                    </span>{" "}
                    BY THE BEST{" "}
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
                <MarqueeHori> </MarqueeHori>
              </div>
            </div>
            {/* Ends component 1 */}
          </div>
        </div>
      </div>

      <Container>
        <div className="">
          <div className="px-8 pb-24 mx-auto mb-[-50px] mt-[-30px]  bg-white">
            <div className="flex flex-col">
              {/* Starts component */}
              <div className="mt-6 pt-12">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-1 md:gap-24 items-center text-center">
                  {/* Marquee comes first on mobile */}

                  <div>
                    <p className="font-GTAmerica font-bold text-6xl md:text-7xl mt-8 tracking-normal text-balance ">
                      CREATING AN{" "}
                      <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                        IMPACT
                      </span>{" "}
                      THAT MATTERS
                    </p>

                    <p className="text-base mt-4 text-gray-700 text-balance">
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
              <div className="border p-7 rounded-xl bg-image1  bg-[length:300%] bg-center drop-shadow-md border-neutral-800/50 col-span-2 flex flex-col gap-y-10 justify-between">
                <div className="absolute inset-0 bg-[#08007cb1] opacity-50 rounded-xl z-[-1]"></div>

                <div className="flex flex-col gap-y-3.5">
                  <p className="font-bold text-xl text-white">
                    Efficient customer support
                  </p>
                  <p className="font-medium text-white">
                    The customer support team at our service is incredibly
                    responsive and helpful. They went above and beyond to assist
                    me with my issue.
                  </p>
                </div>
                <div className="flex flex-col">
                  <img
                    src="https://randomuser.me/api/portraits/women/43.jpg"
                    alt="Emily Smith"
                    className="h-10 w-10"
                  />
                  <p className="pt-2 text-sm font-semibold text-white">
                    Emily Smith
                  </p>
                  <p className="text-sm font-medium text-slate-100/70">
                    Marketing Manager at ABC Company
                  </p>
                </div>
              </div>
              <div className="border p-7 rounded-xl bg-neutral-900 drop-shadow-md border-neutral-800/50 col-span-3 flex flex-col gap-y-10 justify-between">
                <div className="flex flex-col gap-y-3.5">
                  <p className="font-bold text-xl text-white">
                    Excellent product features
                  </p>
                  <p className="font-medium text-white">
                    The features offered by our service are outstanding. They
                    have greatly improved our workflow and efficiency.
                  </p>
                </div>
                <div className="flex flex-col">
                  <img
                    src="https://randomuser.me/api/portraits/men/34.jpg"
                    alt="Michael Johnson"
                    className="h-10 w-10"
                  />
                  <p className="pt-2 text-sm font-semibold text-white">
                    Michael Johnson
                  </p>
                  <p className="text-sm font-medium text-slate-100/70">
                    CEO at XYZ Corporation
                  </p>
                </div>
              </div>
              <div className="border p-7 rounded-xl bg-neutral-900 drop-shadow-md border-neutral-800/50 col-span-3 flex flex-col gap-y-10 justify-between">
                <div className="flex flex-col gap-y-3.5">
                  <p className="font-bold text-xl text-white">
                    Seamless integration process
                  </p>
                  <p className="font-medium text-white">
                    Integrating our systems with our service was smooth and
                    hassle-free. The support team guided us through every step
                    of the process.
                  </p>
                </div>
                <div className="flex flex-col">
                  <img
                    src="https://randomuser.me/api/portraits/women/71.jpg"
                    alt="Sarah Brown"
                    className="h-10 w-10"
                  />
                  <p className="pt-2 text-sm font-semibold text-white">
                    Sarah Brown
                  </p>
                  <p className="text-sm font-medium text-slate-100/70">
                    CTO at XYZ Corporation
                  </p>
                </div>
              </div>
              <div className="border p-7 rounded-xl bg-image1  bg-[length:300%] bg-center drop-shadow-md border-neutral-800/50 col-span-2 flex flex-col gap-y-10 justify-between">
                <div className="absolute inset-0 bg-[#08007cb1] opacity-50 rounded-xl z-[-1]"></div>
                <div className="flex flex-col gap-y-3.5">
                  <p className="font-bold text-xl text-white">
                    Reliable service uptime
                  </p>
                  <p className="font-medium text-white">
                    Our service has consistently maintained high uptime,
                    ensuring that our operations run smoothly without any
                    disruptions.
                  </p>
                </div>
                <div className="flex flex-col">
                  <img
                    src="https://randomuser.me/api/portraits/men/71.jpg"
                    alt="James White"
                    className="h-10 w-10"
                  />
                  <p className="pt-2 text-sm font-semibold text-white">
                    James White
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
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] rounded-3xl p-8 text-center sm:p-16 md:px-24 md:py-20 lg:px-28">
          <div className="max-w-2xl mx-auto">
            <h2 className="  font-bold tracking-wide font-GTAmerica text-white sm:text-5xl md:text-7xl">
              READY TO START?
            </h2>
          </div>
          <div className="flex flex-col justify-center gap-4 mt-8 sm:flex-row sm:items-center sm:gap-5">
            <a
              className="inline-flex items-center justify-center bg-white text-lg font-semibold text-indigo-700 shadow-sm transition-all duration-150 rounded-xl px-8 py-4 hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              href="/pricing"
            >
              Get in Touch
            </a>
            <a
              className="inline-flex items-center justify-center bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] text-lg font-semibold text-white shadow-sm ring-1 ring-inset ring-white transition-all duration-150 rounded-xl px-8 py-4 hover:bg-indigo-800"
              href="/book-a-demo"
            >
              Learn More
            </a>
          </div>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-medium text-white mt-8">
            <li className="inline-flex items-center gap-2">
              <svg
                aria-hidden="true"
                className="h-5 w-5 shrink-0 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z" />
              </svg>
              Optimized translation output
            </li>
            <li className="inline-flex items-center gap-2">
              <svg
                aria-hidden="true"
                className="h-5 w-5 shrink-0 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z" />
              </svg>
              Seamless integration with existing workflows
            </li>
            <li className="inline-flex items-center gap-2">
              <svg
                aria-hidden="true"
                className="h-5 w-5 shrink-0 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z" />
              </svg>
              Support for 100+ languages
            </li>
          </ul>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
