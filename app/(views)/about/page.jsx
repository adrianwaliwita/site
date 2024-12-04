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
import { cn } from "@/lib/utils";

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

const About = () => {
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
                    ABOUT US
                    <span className="bg-gradient-to-bl from-[#27253c] to-[#0000ff] bg-clip-text text-transparent">
                      .
                    </span>
                    <div className="flex justify-center w-full">
                      <div className="w-40 h-[2px] bg-gradient-to-bl from-[#27253c] to-[#0000ff] my-4"></div>
                    </div>
                  </div>
                </div>

                {/* Main Heading */}

                <h1 className="text-5xl md:text-[8vw] lg:text-[6vw]  font-GTAmerica font-bold py-[5vh]">
                  <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                    EXCEPTIONAL{" "}
                  </span>
                  TALENT. <br />
                  <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                    DYNAMIC
                  </span>{" "}
                  PERSONALITIES.
                </h1>
              </div>
            </header>
          </div>
        </div>

        {/* Marquee Section */}
        <div className="w-full max-w-8xl ">
          <MarqueeHori items={progressImages} />
        </div>
      </section>

      <section className="pt-[5vh] md:pt-[10vh]">
        <div className=" text-black flex flex-col items-center justify-center  md:px-[10vw] ">
          <div className="text-center space-y-6 ">
            <div className="text-2xl md:text-[3vw] font-GTAmerica font-bold text-center md:text-left w-[100%] md:w-[100%]">
              WE ARE{" "}
              <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                H CONNECT INTERNATIONAL
              </span>{" "}
            </div>
            <div className="font-arial text-sm md:text-base xl:text-xl mt-2 text-black">
              A leader in transforming business operations for the better
              through people, process, and technical brilliance. We champion
              growth and innovation through expert advice, dedicated back-end
              teams, and outsourced operations. From planning to execution, we
              offer guidance and support across all business functions.
            </div>
            <div className="text-2xl md:text-[3vw] font-GTAmerica font-bold text-center md:text-right w-[100%] md:w-[100%]">
              WE ARE A{" "}
              <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text  text-transparent">
                TRUE EXTENSION
              </span>{" "}
              OF YOUR BUSINESS
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 h-[100vh] mx-auto flex items-center justify-center md:pt-[10%] md:pb-[5%]">
        <div className="flex flex-col w-full">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-8 items-center ">
            <div className="h-full w-full order-first md:order-none flex justify-center">
              <div className="h-full w-full order-first md:order-last flex justify-center">
                <div className="max-w-[100vw] w-[100vw] md:max-w-[50vw] md:w-[40vw]  md:mt-0 md:m-6">
                  <div
                    className={cn(
                      "group cursor-pointer overflow-hidden relative card rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                      "bg-[url('/future-legacy.jpg')] bg-cover aspect-square"
                      // Preload hover image
                    )}
                  ></div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="font-GTAmerica text-4xlfont-GTAmerica text-4xl md:text-[7vw] md:leading-[7vw]  lg:text-[4.6vw] lg:leading-[4.6vw]   font-bold tracking-normal text-black text-left">
                ROOTED IN LEGACY
                <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent ml-[12px]">
                  <br /> FUTURE FOCUSED
                </span>
              </div>
              <div className="pr-0 sm:pr-[5vw]">
                <div className="font-arial text-sm md:text-base xl:text-xl mt-2 text-black">
                  As a Hirdaramani Group venture, we are backed by one of Sri
                  Lanka’s most reputed conglomerates, boasting a legacy of over
                  100 years across diversified industries, including luxury,
                  leisure, apparel, and energy. With a strong foundation, we
                  remain focused on creating the future with bold thinking and
                  transformative approaches.{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-[7%] mx-auto bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] flex items-center  h:20vh md:h-[87vh] ">
        {" "}
        {/* replace with section text left with conditional rendering */}
        <div className="flex flex-col">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-8 items-center">
            <div className="order-last md:order-first">
              <p className="font-GTAmerica text-4xl md:text-[7vw] md:leading-[7vw]  lg:text-[4.6vw] lg:leading-[4.6vw] font-bold tracking-normal ">
                <span className=" text-white">WE PROVIDE ABSOLUTE VALUE </span>
              </p>
              <div className="flex justify-start w-full">
                <div className="w-40 h-[2px] bg-gradient-to-bl from-[#ffffff] to-[#ffffff] my-4"></div>
              </div>
              <div className="text-2xl lg:text-3xl tracking-widest font-GTAmerica font-bold text-white">
                - EVERY STEP OF THE WAY
              </div>

              <div>
                <p className="font-arial text-sm md:text-base xl:text-xl pb-[10vh] text-white">
                  By combining people, process, and technical expertise we
                  optimize efficiency, reduce costs, and drive tangible results.
                  Our focus on absolute value means every interaction is a step
                  toward your long-term success.
                </p>
              </div>
            </div>
            <div className="h-full w-full order-first md:order-last flex justify-center">
              <div className="max-w-[100vw] w-[100vw] md:max-w-[50vw] md:w-[40vw] mt-8 md:mt-0 md:m-6">
                <div
                  className={cn(
                    "group cursor-pointer overflow-hidden relative card rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                    "bg-[url('/about/purpose-3.jpg')] bg-cover aspect-square"
                    // Preload hover image
                  )}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-screen-xl mx-auto pt-[5vh] md:pt-[10vh] lg:px-6">
          <div className="mx-auto-sm text-center mb-8 lg:mb-16">
            <div className="font-GTAmerica text-4xl md:px-5 md:text-[7vw] md:leading-[7vw]  lg:text-[4.6vw]  m font-bold tracking-normal text-black  ">
              <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                REAL PEOPLE
              </span>{" "}
              REAL RESULTS{" "}
            </div>
            <div className="font-arial text-sm md:text-base xl:text-xl mt-2 text-black">
              Driven by our company values our experienced specialists guarantee
              clients access to top-tier talent with a strong emphasis on
              building lasting relationships
            </div>
          </div>
          <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
            {[
              {
                name: "Deshaka Perera",
                position: "CEO",
                img: "/team/1.jpg",
              },
              {
                name: "Arshad Booso",
                position: "Head of BPM",
                img: "/team/2.jpg",
              },

              ,
              {
                name: "Shachithra Gunesekara",
                position: "Head of HR",
                img: "/team/3.jpg",
              },
              {
                name: "Pasindu Liyanage",
                position: "Lead - IT & Compliance",
                img: "/team/4.jpg",
              },
              {
                name: "Natali Jayatilaka",
                position: "Lead - Sales & Marketing",
                img: "/team/5.jpg",
              },
              {
                name: "Krishmilla Minoli",
                position: "Lead - Operations",
                img: "/team/6.jpg",
              },

              {
                name: "Rukshala Bulathsinghala",
                position: "Manager - Operations",
                img: "/team/7.jpg",
              },
              {
                name: "Asela Kuruppu",
                position: "Senior Accountant",
                img: "/team/8.jpg",
              },
              {
                name: "Mariam Husni",
                position: "Manager Operations - Paraplanning",
                img: "/team/9.jpg",
              },
              {
                name: "Dinithi Ranasinghe",
                position: "Accountant",
                img: "/team/10.jpg",
              },
              {
                name: "Mareene Salgado ",
                position: "Assistant Manager - Sales & Marketing",
                img: "/team/11.jpg",
              },
            ].map((teamMember, index) => (
              <div
                key={index}
                className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700"
              >
                <a href="#">
                  <img
                    className="w-full h-[30vh] object-cover rounded-lg sm:rounded-none sm:rounded-l-lg "
                    src={teamMember.img}
                    alt={`${teamMember.name} Avatar`}
                  />
                </a>
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">{teamMember.name}</a>
                  </h3>
                  <span className="text-gray-500 dark:text-gray-400">
                    {teamMember.position}
                  </span>
                  <div className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                    {teamMember.description}
                  </div>{" "}
                  <ul className="flex space-x-4 sm:mt-0">
                    <li>
                      <a
                        href="#"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                    </li>
                    {/* Additional icons go here */}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-[7%] mx-auto bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] flex items-center  md:h-[87vh] ">
        {" "}
        {/* replace with section text left with conditional rendering */}
        <div className="flex flex-col">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-8 items-center">
            <div className="order-last md:order-first">
              <p className="font-GTAmerica text-4xl md:text-[7vw] md:leading-[7vw]  lg:text-[4.6vw] lg:leading-[4.6vw]  font-bold tracking-normal ">
                <span className=" text-white">OUR PURPOSE </span>
              </p>
              <div className="flex justify-start w-full">
                <div className="w-40 h-[2px] bg-gradient-to-bl from-[#ffffff] to-[#ffffff] my-4"></div>
              </div>
              <div>
                <p className="font-arial text-sm md:text-base xl:text-xl pb-[10vh] text-white">
                  To make a meaningful impact through absolute value creation,
                  embodying our client-first philosophy
                </p>
              </div>
            </div>
            <div className="h-full w-full order-first md:order-last flex justify-center">
              <div className="max-w-[100vw] w-[100vw] md:max-w-[50vw] md:w-[40vw] mt-8 md:mt-0 md:m-6">
                <div
                  className={cn(
                    "group cursor-pointer overflow-hidden relative card rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                    "bg-[url('/about/purpose-3.jpg')] bg-cover aspect-square"
                    // Preload hover image
                  )}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-[5%] pt-[5vh] md:pt-[15vh]  mx-auto flex items-center justify-center">
        <div className="flex flex-col w-full">
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-8 items-center">
            {/* Text Section */}
            <div className="order-1 md:order-2 flex items-center">
              <div className="font-GTAmerica text-4xl md:text-[7vw] md:leading-[7vw] lg:text-[4.6vw] lg:leading-[4.6vw] font-bold tracking-normal text-black text-left">
                EVERY SINGLE DAY, <br />
                OUR TEAM CLOCKS IN WITH A
                <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent ml-[12px]">
                  PASSION
                </span>{" "}
                FOR THE WORK THEY DO
              </div>
            </div>

            {/* Card Section */}
            <div className="order-2 md:order-1 w-full">
              <div className="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 gap-8">
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
                  description={`"Our doors are open to all team member's ideas and perspectives."`}
                  img={"/people/3.jpg"}
                />
                <HoverCard2
                  title={"Continuous Improvement"}
                  description={
                    '"We collectively work towards small improvements which make a big impact over time"'
                  }
                  img={"/people/4.jpg"}
                />
                <HoverCard2
                  title={"Diversity, Equity and Inclusion"}
                  description={
                    '"We believe in diversity of people, equity in opportunities, and the inclusion of every last member"'
                  }
                  img={"/people/5.jpg"}
                />
                <HoverCard2
                  title={"Meritocracy in Action"}
                  description={
                    '"Success, growth, and opportunities are earned through hard work and results"'
                  }
                  img={"/people/6.jpg"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-screen-xl mx-auto pt-[5vh] md:pt-[10vh] lg:px-6 ">
          <div className="mx-auto-sm text-center mb-8 lg:mb-16">
            <div className="font-GTAmerica text-4xl md:px-5 md:text-[7vw] md:leading-[7vw]  lg:text-[4.6vw]  m font-bold tracking-normal text-black  ">
              <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                ACCREDITED
              </span>{" "}
              BY THE BEST{" "}
            </div>
            <div className="font-arial text-sm md:text-base xl:text-xl mt-2 text-black">
              We are a leading provider of BPO services, recognized for
              delivering a comprehensive range of solutions, including finance
              and accounting, procurement, technology, and marketing as a
              service. Our team is committed to innovation and excellence and
              continues to set new standards in the outsourcing industry.
            </div>
          </div>
          <div className="">
            <MarqueeHori items={accredit}> </MarqueeHori>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-screen-xl mx-auto pt-[5vh] md:pt-[10vh] lg:px-6">
          <div className="mx-auto-sm text-center mb-8 lg:mb-16">
            <div className="font-GTAmerica text-4xl md:px-5 md:text-[7vw] md:leading-[7vw]  lg:text-[4.6vw]  m font-bold tracking-normal text-black  ">
              <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                CHANGE
              </span>{" "}
              STARTS WITH US{" "}
            </div>
            <div className="font-arial text-sm md:text-base xl:text-xl mt-2 text-black">
              We are committed to making a difference one step at a time,
              investing in a better future for our communities and the planet.
              We're here to do more than generate income—we're here to make a
              lasting impact on:
            </div>
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
        </div>
      </section>

      <div className="pt-[5vh] md:pt-[10vh]">
        <CTA title={"CONNECT WITH US TODAY"}></CTA>
      </div>
    </div>
  );
};

export default About;
