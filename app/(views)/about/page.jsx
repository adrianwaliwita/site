"use client";
import Head from "next/head";
import CTA from "app/sections/CTA";
import SectionTextRight from "app/sections/SectionTextRight";
import SectionTextRightBlue from "app/sections/SectionTextRightBlue";
import AwardWinning from "app/components/AwardWinning";
import Meta from "app/components/Meta";

import SectionTextLeftBlue from "app/sections/SectionTextLeftBlue";
import HoverCard from "app/components/HoverCard";
import HoverCard2 from "app/components/HoverCard2";
import HoverCard4 from "app/components/HoverCard4";
import MarqueeHori from "app/components/MarqueeHori";
import { cn } from "@/lib/utils";
import { headingStyles, bodyTextStyles } from "app/constants/FontStyles";
import { DividerBlueCenter } from "app/components/Divider";

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

const metadata = {
  title: "About H Connect International | Your Outsourcing Partner",
  description:
    "As a leading outsourcing company, we're all about making an impact. Find out how our client-first philosophy provides absolute value creation for your business.",
};

const AboutClient = () => {
  return (
    <>
      <>
        <head>
          <title>About Us </title>
          <meta
            name="description"
            content="As a leading outsourcing company, we're all about making an impact. Find out how our client-first philosophy provides absolute value creation for your business."
          />
        </head>
      </>{" "}
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

                  <h1 className={headingStyles.LargeHeading}>
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
          <div className="w-full max-w-8xl mt-[4vh] mb-[15vh] md:mb-0   ">
            <MarqueeHori items={progressImages} />
          </div>
        </section>

        <div className="py-[5vh] md:pt-[8vh] "></div>

        <section className="  bg-white h-[30vh] flex items-end xl:mb-[10vh]">
          <div className=" text-black flex flex-col items-center justify-center  md:px-[10vw] ">
            <div className="text-center space-y-6 ">
              <div className="text-3xl md:text-[3.5vw] font-GTAmerica font-bold text-center md:text-left w-[100%] md:w-[100%]">
                WE ARE{" "}
                <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                  H CONNECT INTERNATIONAL
                </span>{" "}
              </div>
              <div className="font-arial text-sm md:text-base xl:py-[5vh] mt-4 mb-4 text-black">
                A leader in transforming business operations for the better
                through people, process, and technical brilliance. We champion
                growth and innovation through expert advice, dedicated back-end
                teams, and outsourced operations. From planning to execution, we
                offer guidance and support across all business functions.
              </div>
              <div className="text-3xl md:text-[3.5vw] font-GTAmerica font-bold text-center md:text-right w-[100%] md:w-[100%]">
                WE ARE A{" "}
                <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text  text-transparent">
                  TRUE EXTENSION
                </span>{" "}
                OF YOUR BUSINESS
              </div>
            </div>
          </div>
        </section>

        <div className=" md:pt-0 ">
          <SectionTextRight
            blueTitle={"ROOTED IN LEGACY"}
            titleAfterBlue={
              <>
                {" "}
                <br />
                FUTURE FOCUSED{" "}
              </>
            }
            description={
              <div
                className={`space-y-4  ${bodyTextStyles.descriptionLeft} md:pb-[10vh]`}
              >
                <div>
                  As a Hirdaramani Group venture, we are backed by one of Sri
                  Lanka&apos;s most reputed conglomerates, boasting a legacy of
                  over 100 years across diversified industries, including
                  luxury, leisure, apparel, and energy.
                </div>
                <div>
                  With a strong foundation, we remain focused on creating the
                  future with bold thinking and transformative approaches.
                </div>
              </div>
            }
            component={
              <div>
                <div className="max-w-[100vw] w-[100vw] md:max-w-[50vw] md:w-[40vw]  px-[2vw] ">
                  <div
                    className={cn(
                      "group cursor-pointer overflow-hidden relative card rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 ",
                      "bg-[url('/future-legacy.jpg')] bg-cover aspect-square"
                    )}
                  ></div>
                </div>
              </div>
            }
          ></SectionTextRight>
        </div>

        <div className="">
          <SectionTextLeftBlue
            whiteTitle={
              <>
                <div
                  className={`${headingStyles.primaryLeft} ${headingStyles.white}`}
                >
                  ABSOLUTE VALUE
                  <div className="text-2xl lg:text-3xl tracking-widest font-GTAmerica font-bold my-[2vh] text-white">
                    - EVERY STEP OF THE WAY
                  </div>
                </div>
              </>
            }
            description={
              <div
                className={`space-y-4 w-[90%]  ${bodyTextStyles.descriptionLeft} ${bodyTextStyles.white}`}
              >
                <div>
                  By combining people, process, and technical expertise we
                  optimize efficiency, reduce costs, and drive tangible results.
                  Our focus on absolute value means every interaction is a step
                  toward your long-term success.
                </div>
              </div>
            }
            component={
              <div>
                <div className="max-w-[100vw] w-[100vw] md:max-w-[50vw] md:w-[40vw]  px-[2vw] ">
                  <div
                    className={cn(
                      "group cursor-pointer overflow-hidden relative card rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 ",
                      "bg-[url('/absolute.jpg')] bg-cover aspect-square"
                    )}
                  ></div>
                </div>
              </div>
            }
          ></SectionTextLeftBlue>
        </div>
        <section>
          <div className="max-w-screen-xl mx-auto pt-[5vh] md:pt-[10vh] lg:px-6">
            <div className="mx-auto-sm text-center mb-8 lg:mb-16">
              <div className={headingStyles.primaryCenter}>
                <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                  REAL PEOPLE.
                </span>{" "}
                REAL RESULTS. <DividerBlueCenter />
              </div>
              <div className={bodyTextStyles.descriptionCenter}>
                Driven by our company values our experienced specialists
                guarantee clients access to top-tier talent with a strong
                emphasis on building lasting relationships
              </div>
            </div>
            <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
              {[
                {
                  name: "Deshaka Perera",
                  position: "CEO",
                  img: "/team/1.jpg",
                  email: "deshaka.perera@hconnectint.com",
                  linkedin:
                    "https://www.linkedin.com/in/deshaka-perera-3102011b/",
                },
                {
                  name: "Arshad Booso",
                  position: "Head of Industry Specific Services",
                  img: "/team/2.jpg",
                  email: "arshad.booso@hconnectint.com",
                  linkedin: "https://www.linkedin.com/in/arshadbooso/",
                },
                {
                  name: "Shachithra Gunesekara",
                  position: "Head of People & Culture",
                  img: "/team/3.jpg",
                  email: "shachithra.gunesekara@hconnectint.com",
                  linkedin:
                    "https://www.linkedin.com/in/shachithra-gunasekara-33879272/",
                },
                {
                  name: "Pasindu Liyanage",
                  position: "Lead - IT & Compliance",
                  img: "/team/4.jpg",
                  email: "pasindu.liyanage@hconnectint.com",
                  linkedin:
                    "https://www.linkedin.com/in/pasindu-sajith-liyanage/",
                },
                {
                  name: "Natali Jayatilaka",
                  position: "Lead - Sales & Marketing",
                  img: "/team/5.jpg",
                  email: "natali.jayatilaka@hconnectint.com",
                  linkedin:
                    "https://www.linkedin.com/in/natali-jayatilaka-412bab190/",
                },

                {
                  name: "Mariam Husni",
                  position: "Manager Operations - Paraplanning",
                  img: "/team/9.jpg",
                  email: "mariam.husni@hconnectint.com",
                  linkedin:
                    "https://www.linkedin.com/in/mariam-husni-b20583b9/",
                },
              ].map((teamMember, index) => (
                <div
                  key={index}
                  className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700"
                >
                  <a href="#">
                    <img
                      className="w-full h-[30vh] object-cover rounded-lg sm:rounded-none sm:rounded-l-lg team-img"
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
                          href={teamMember.linkedin}
                          className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          href={`mailto:${teamMember.email}`}
                          className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pt-[5vh] md:pt-[10vh]">
          <SectionTextLeftBlue
            whiteTitle={
              <>
                <div
                  className={`${headingStyles.primaryLeft} ${headingStyles.white}`}
                >
                  OUR PURPOSE
                </div>
              </>
            }
            description={
              <div
                className={`space-y-4  ${bodyTextStyles.descriptionLeft} ${bodyTextStyles.white}`}
              >
                <div>
                  To make a meaningful impact through absolute value creation,
                  embodying our client-first philosophy
                </div>
              </div>
            }
            component={
              <div>
                <div className="max-w-[100vw] w-[100vw] md:max-w-[50vw] md:w-[40vw]  px-[2vw] ">
                  <div
                    className={cn(
                      "group cursor-pointer overflow-hidden relative card rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                      "bg-[url('/about/purpose-3.jpg')] bg-cover aspect-square"
                    )}
                  ></div>
                </div>
              </div>
            }
          ></SectionTextLeftBlue>
        </section>

        <section className="bg-white dark:bg-gray-900 pt-[5vh] md:pt-[5vh]">
          <div className="px-4 mx-auto  lg:pt-16 lg:px-6">
            <div className="mx-auto-sm text-center mb-8 ">
              <p className={headingStyles.primaryCenter}>
                OUR
                <span className={headingStyles.gradient}> VALUES</span>{" "}
              </p>
              <div className="w-40 h-[2px] bg-gradient-to-bl from-[#27253c] to-[#0000ff] my-[2vh] mx-auto"></div>
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4  px-[1vw]">
              <HoverCard4
                title={"Believe We Can"}
                description={
                  <div>
                    <span className="text-white font-medium transition-all duration-300 ease-in-out group-hover:translate-x-2">
                      We celebrate those <br /> who persevere
                    </span>
                  </div>
                }
                img={"/values/we-can.jpg"}
              />
              <HoverCard4
                title={"Create the Future"}
                description={
                  <div>
                    <span className="text-white font-medium transition-all duration-300 ease-in-out group-hover:translate-x-2">
                      We are driven by <br /> a pioneering spirit
                    </span>
                  </div>
                }
                img={"/values/future.jpg"}
              />
              <HoverCard4
                title={"Keep it Moving"}
                description={
                  <div>
                    <span className="text-white font-medium transition-all duration-300 ease-in-out group-hover:translate-x-2">
                      We embrace agility <br /> and momentum
                    </span>
                  </div>
                }
                img={"/values/moving.jpg"}
              />
              <HoverCard4
                title={"Make Things Better"}
                description={
                  <div>
                    <span className="text-white font-medium transition-all duration-300 ease-in-out group-hover:translate-x-2">
                      We aim to make a lasting <br /> impact on our lives and
                      others.
                    </span>
                  </div>
                }
                img={"/values/better.jpg"}
              />
              <HoverCard4
                title={"Stronger Together"}
                description={
                  <div>
                    <span className="text-white font-medium transition-all duration-300 ease-in-out group-hover:translate-x-2">
                      We believe in the
                      <br /> power of &rdquo;We&rdquo;
                    </span>
                  </div>
                }
                img={"/values/together.jpg"}
              />
            </div>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4  px-[5vw]"></div>
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
                <div className="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 gap-2">
                  <HoverCard2
                    title={"Stronger Together"}
                    description={
                      '"To us, challenges are best tackled as a team"'
                    }
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
                    description={`"Our doors are open to all team members' ideas and perspectives."`}
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
        <div className="mt-[5vh]"></div>
        <AwardWinning />

        <section>
          <div className="max-w-screen-xl mx-auto pt-[5vh] md:pt-[10vh] lg:px-6">
            <div className="mx-auto-sm text-center mb-8 lg:mb-16">
              <div className={headingStyles.primaryCenter}>
                <span className={headingStyles.gradient}>CHANGE</span> STARTS
                WITH US{" "}
              </div>

              <div className="font-arial text-sm md:text-base xl:text-xl mt-2 text-black">
                We are committed to making a difference one step at a time,
                investing in a better future for our communities and the planet.
                We&apos;re here to do more than generate income—we&apos;re here
                to make a lasting impact on:
              </div>
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4  px-[5vw]">
              <HoverCard
                title={"Our People"}
                description={
                  <div>
                    We are focused on creating a workplace that is safe,
                    inclusive, and reflects the diversity of the communities we
                    serve with:
                    <ul>
                      <li>
                        <strong>•</strong> Diversity, Equity, and Inclusion
                        (DEI) Programs
                      </li>
                      <li>
                        <strong>•</strong> Employee Well-being Programs
                      </li>
                      <li>
                        <strong>•</strong> Leadership Training Initiatives
                      </li>
                    </ul>
                  </div>
                }
                img={"/sustainability/people.jpg"}
              />
              <HoverCard
                title={"Our Environment"}
                description={
                  <div>
                    We&apos;re committed to reducing our environmental footprint
                    and promoting sustainable practices with:
                    <ul>
                      <li>
                        <strong>•</strong> Waste Reduction and Recycling
                        Programs
                      </li>
                      <li>
                        <strong>•</strong> Environmental Conservation Campaigns
                      </li>
                      <li>
                        <strong>•</strong> Ocean Clean Up Initiatives
                      </li>
                    </ul>
                  </div>
                }
                img={"/sustainability/env.jpg"}
              />{" "}
              <HoverCard
                title={"Our Community"}
                description={
                  <div>
                    We are dedicated to giving back to our community and
                    positively impacting the lives of those around us through:
                    <ul>
                      <li>
                        <strong>•</strong> Donation Drives
                      </li>
                      <li>
                        <strong>•</strong> Uplifting Programs
                      </li>
                      <li>
                        <strong>•</strong> Food Distribution
                      </li>
                      <li>
                        <strong>•</strong> Annual Christmas Charity
                      </li>
                    </ul>
                  </div>
                }
                img={"/sustainability/com.jpg"}
              />
            </div>
          </div>
          <div className="font-GTAmerica font-bold text-sm md:text-[2vw] xl:text-[1.6vw] mt-[5vw] text-black text-center">
            FOLLOW THIS{" "}
            <a
              href="https://sustainability.hirdaramani.com"
              className="text-[#0000ff] underline"
            >
              LINK
            </a>{" "}
            TO SEE OUR GROUP’S SUSTAINABILITY INITIATIVES
          </div>
        </section>

        <div className="pt-[5vh] md:pt-[10vh]">
          <CTA
            title={"CONNECT WITH US TODAY"}
            href={"/contact"}
            text={"Get in touch"}
          ></CTA>
        </div>
      </div>
    </>
  );
};

export default AboutClient;
