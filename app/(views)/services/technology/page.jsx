"use client";
import Reveal from "app/components/Reveal";
import HoverCard3 from "app/components/HoverCard3";
import MarqueeHori from "app/components/MarqueeHori";
import Button from "app/components/Button";
import IconCloud from "app/components/LogoCloud";
import CalltoAction from "app/sections/CTA";
import Security from "app/components/security";
import ServiceBeyond from "app/components/ServiceBeyond";
import PartnershipFeatures from "app/components/PartnershipFeatures";
import LandingPageInner from "app/sections/LandingPageInner";
import SectionTextRightDesc from "app/sections/SectionTextRightDesc";
import Link from "next/link";
const logos = [
  {
    name: "ISO",
    url: "/DataProtection/iso.jpg",
  },
  {
    name: "DPA",
    url: "/DataProtection/dpa.jpg",
  },
  {
    name: "GDPR",
    url: "/DataProtection/gdpr.jpg",
  },
  {
    name: "PrivacyActi",
    url: "/DataProtection/PrivacyAct.jpg",
  },
];
const slugs = [
  "oracle",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

const accredit = [
  { img: "/accredit/ACCA.jpg" },
  { img: "/accredit/CIMA.jpg" },
  { img: "/accredit/CMA.jpg" },
  { img: "/accredit/GPTW.jpg" },
  { img: "/accredit/CPA.jpg" },

  { img: "/accredit/GPTW-WOMEN.jpg" },
];

const serviceBorders = [
  {
    title: "A True Extension",
    description:
      "Our dynamic team is an extension of yours. adopting your workflows, systems and norms. We become a part of you. ",
  },
  {
    title: "Continuous Collaboration",
    description:
      "We hold weekly updates and monthly service reviews, tracked through both qualitative and quantitative measures. This ensures ongoing alignment, space for continuous improvement and a collaborative environment where your goals are always prioritized.",
  },
];

const serviceBorders2 = [
  {
    title: "Face to Face Encounters",
    description:
      "We regularly host clients in our offices and make visits to their locations as well. This face-to-face interaction strengthens connections.",
  },
  {
    title: "CEO - Led Commitment",
    description:
      "With direct access to our CEO, your concerns and priorities are always at the forefront. We're dedicated to providing a level of personalized service that goes beyond the ordinary.",
  },
];

const sec = [
  {
    title: "Access Controls",
    description:
      "We've implemented multi-layered access controls to protect against unauthorized access",
  },
  {
    title: "Audits & Assessments",
    description:
      "We proactively monitor our security posture through regular audits and vulnerability assessments",
  },
  {
    title: "24/7 IT Support",
    description:
      " Our dedicated team provides round-the-clock support to ensure your systems are always running smoothly.",
  },
];

const FinanceAccounting = () => {
  return (
    <div className="w-full">
      <LandingPageInner
        subtitle="TECHNOLOGY"
        titleBeforeBlue="FROM"
        blueTitle=" BLUEPRINT "
        titleAfterBlue="TO BREAKTHROUGH"
        description=" Your tech partner for every stage.
        "
        ImgUrl="/service-images/tech.jpg"
      />
      <SectionTextRightDesc
        description={
          <>
            We partner with leading enterprises to drive the future of smart and
            scalable product development. <br />
            Whether it’s reimagining infrastructure or crafting connected
            products, we focus on delivering tailored, high-impact solutions.
            <br />
            With proven engineering leadership, we provide comprehensive,
            end-to-end digital and product engineering solutions that
            consistently unlock new levels of value and position businesses at
            the forefront of industry innovation.
            <br /> By blending our technical depth with a tailored combination
            of advanced technology and human expertise, our engineers enable
            enterprises to innovate with confidence and execute with excellence.
            This refined focus, backed by strategic insight, positions us as not
            just a service provider, but as a partner in your journey to market
            leadership, supporting businesses from across industries in
            achieving long-term success through engineering ingenuity.
          </>
        }
        component={
          <div className="max-w-[100vw] w-[100vw] md:max-w-[50vw] md:w-[40vw] my-8 md:m-6 pt-[5vh]  ">
            <div
              className={
                ("group cursor-pointer overflow-hidden relative card rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                "bg-[url('/tech-Images/tech-desc.png')] bg-cover aspect-square")
                // Preload hover image
              }
            ></div>
          </div>
        }
      />

      <section className="bg-white dark:bg-gray-900 pt-[5vh] md:pt-[10vh] ">
        <div className=" px-4 mx-auto  lg:px-6">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-2  px-[5vw]">
            <HoverCard3
              title={
                <div>
                  <span className="text-white font-bold transition-all duration-300 ease-in-out group-hover:translate-x-2">
                    Flexible and Scalable
                  </span>
                  <br />
                  <span className="text-white font-medium text-[2.5vw] md:text-[1vw]   transition-all duration-300 ease-in-out group-hover:translate-x-2">
                    We've got you covered from single projects to entire teams
                    dedicated to you.{" "}
                  </span>
                </div>
              }
              description={
                <Link href={"/contact"}>
                  <div>
                    <span className="text-white font-medium transition-all duration-300 ease-in-out group-hover:translate-x-2">
                      Learn More
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 25 25"
                      className="w-5 h-5 fill-current "
                    >
                      <path
                        d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                        data-name="Right"
                      />
                    </svg>
                  </div>
                </Link>
              }
              img={"/tech-images/Flexible-Scalable.jpg"}
            />
            <HoverCard3
              title={
                <div>
                  <span className="text-white font-bold transition-all duration-300 ease-in-out group-hover:translate-x-2">
                    World-Class Expertise
                  </span>
                  <br />
                  <span className="text-white text-[2.5vw] md:text-[1vw]   font-medium transition-all duration-300 ease-in-out group-hover:translate-x-2">
                    Our engineers are highly specialized with experience across
                    global high-impact projects{" "}
                  </span>
                </div>
              }
              description={
                <Link href={"/contact"}>
                  <div>
                    <span className="text-white font-medium transition-all duration-300 ease-in-out group-hover:translate-x-2">
                      Learn More
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 25 25"
                      className="w-5 h-5 fill-current "
                    >
                      <path
                        d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                        data-name="Right"
                      />
                    </svg>
                  </div>
                </Link>
              }
              img={"/tech-images/world.jpg"}
            />
            <HoverCard3
              title={
                <div>
                  <span className="text-white font-bold transition-all duration-300 ease-in-out group-hover:translate-x-2">
                    CTO Level Compliance
                  </span>
                  <br />
                  <span className="text-white font-medium text-[2.5vw] md:text-[1vw]   transition-all duration-300 ease-in-out group-hover:translate-x-2">
                    Every line of code is aligned with security standards, best
                    practices, and strategic goals.{" "}
                  </span>
                </div>
              }
              description={
                <Link href={"/contact"}>
                  <div>
                    <span className="text-white font-medium transition-all duration-300 ease-in-out group-hover:translate-x-2">
                      Learn More
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 25 25"
                      className="w-5 h-5 fill-current "
                    >
                      <path
                        d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                        data-name="Right"
                      />
                    </svg>
                  </div>
                </Link>
              }
              img={"/tech-images/CTO-level.jpg"}
            />
            <HoverCard3
              title={
                <div>
                  <span className="text-white font-bold transition-all duration-300 ease-in-out group-hover:translate-x-2">
                    Optimized for High-Stakes Environments
                  </span>
                  <br />
                  <span className="text-white font-medium text-[2.5vw] md:text-[1vw] transition-all duration-300 ease-in-out group-hover:translate-x-2">
                    Our teams are built to handle intensity without compromising
                    quality.{" "}
                  </span>
                </div>
              }
              description={
                <Link href={"/contact"}>
                  <div>
                    <span className="text-white font-medium transition-all duration-300 ease-in-out group-hover:translate-x-2">
                      Learn More
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 25 25"
                      className="w-5 h-5 fill-current "
                    >
                      <path
                        d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                        data-name="Right"
                      />
                    </svg>
                  </div>
                </Link>
              }
              img={"/tech-images/high-stakes.jpg"}
            />
            <HoverCard3
              title={
                <div>
                  <span className="text-white font-bold transition-all duration-300 ease-in-out group-hover:translate-x-2">
                    Effortless Collaboration
                  </span>
                  <br />
                  <span className="text-white font-medium text-[2.5vw] md:text-[1vw] transition-all duration-300 ease-in-out group-hover:translate-x-2">
                    Whether you need us to lead, support, or collaborate, we
                    ensure smooth, efficient processes that drive results{" "}
                  </span>
                </div>
              }
              description={
                <Link href={"/contact"}>
                  <div>
                    <span className="text-white font-medium transition-all duration-300 ease-in-out group-hover:translate-x-2">
                      Learn More
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 25 25"
                      className="w-5 h-5 fill-current "
                    >
                      <path
                        d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                        data-name="Right"
                      />
                    </svg>
                  </div>
                </Link>
              }
              img={"/tech-images/effortless-collab.jpg"}
            />
          </div>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4  px-[5vw]"></div>
      </section>

      <div className="pt-[5vh] md:pt-[10vh]">
        <PartnershipFeatures />
      </div>

      <section>
        <div className="max-w-screen-xl mx-auto pb-8 px-4 pt-[5vh] md:pt-[10vh] lg:px-6">
          <div className="mx-auto-sm text-center mb-8 lg:mb-16">
            <div className="font-GTAmerica text-4xl md:px-5 md:text-[7vw] md:leading-[7vw]  lg:text-[4.6vw]  m font-bold tracking-normal text-black ">
              <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                TOP TIER
              </span>{" "}
              TALENT
            </div>
            <div className="font-arial text-sm md:text-base xl:text-xl text-black">
              Driven by our company values our experienced specialists guarantee
              clients access to top-tier talent with a strong emphasis on
              building lasting relationships
            </div>
          </div>
          <div className="container mx-auto max-w-5xl flex gap-12 flex-wrap items-start justify-center md:justify-between">
            <div className="grid gap-4 justify-items-center text-center md:flex-1">
              <div className="rounded-full border-4 border-[#0c0cc9] p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-14 h-14"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
                  <path d="M14 3v5h5M16 13H8M16 17H8M10 9H8" />
                </svg>
              </div>
              <h3 className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent font-GTAmerica font-bold text-2xl md:text-[1.8vw] pb-3">
                CERTIFIED
              </h3>
              <div className="font-arial text-sm md:text-base xl:text-xl  text-black">
                Every member of our team holds a relevant finance certification.
              </div>
            </div>
            <div className="grid gap-4 justify-items-center text-center md:flex-1">
              <div className="rounded-full border-4 border-[#0c0cc9] p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-14 h-14"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                </svg>
              </div>
              <h3 className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent font-GTAmerica font-bold text-2xl md:text-[1.8vw] pb-3">
                DRIVEN
              </h3>{" "}
              <div className="font-arial text-sm md:text-base xl:text-xl  text-black">
                {" "}
                Our relentless pursuit of excellence is contagious
              </div>
            </div>
            <div className="grid gap-4 justify-items-center text-center md:flex-1">
              <div className="rounded-full border-4 border-[#0c0cc9] p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-14 h-14"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent font-GTAmerica font-bold text-2xl md:text-[1.8vw] pb-3">
                EXPERTLY TRAINED
              </h3>{" "}
              <div className="font-arial text-sm md:text-base xl:text-xl  text-black">
                With regular training to ensure they are always at the top of
                their game.
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
                SECURING
              </span>{" "}
              YOUR INTERESTS
            </div>
            <div className="font-arial text-sm md:text-base xl:text-xl mt-2 text-black">
              We have a comprehensive system with controls that protect your
              data with the utmost diligence.
            </div>
          </div>
          <div className="mx-auto mt-[-4vh] m-10">
            <Security features={sec} />
          </div>
          <div className="font-arial text-sm md:text-base text-center xl:text-xl mt-2 text-black pb-5">
            We strictly adhere to all applicable laws and regulations in every
            region we operate.
          </div>

          <div className="w-full pt-[2vh]">
            <div className="flex w-full flex-col items-center justify-center px-4 md:px-20">
              <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-x-6 ">
                {logos.map((logo, key) => (
                  <img
                    key={key}
                    src={logo.url}
                    className="h-[15vh] md:h-[20vh]  w-full object-contain"
                    alt={`${logo.name}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="max-w-screen-xl mx-auto pt-[5vh] md:pt-[10vh] lg:px-6">
          <div className="mx-auto-sm text-center mb-8 lg:mb-16">
            <div className="font-GTAmerica text-4xl md:px-5 md:text-[7vw] md:leading-[7vw]  lg:text-[4.6vw]  font-bold tracking-normal text-black text-center  ">
              SERVICE{" "}
              <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                BEYOND BORDERS
              </span>
            </div>
            <div className="font-arial text-sm md:text-base xl:text-xl mt-2 text-black">
              Experience a new level of partnership where professionalism meets
              accessibility. No red tape, just results. Our client-first
              philosophy drives everything we do, from concierge-level service
              to personalized attention. You'll work with real people who are
              committed to your success. Your dedicated relationship manager
              will ensure your needs are met promptly and efficiently.{" "}
            </div>
          </div>
          <div className="mx-auto ">
            <div className="flex mx-auto justify-center ">
              <ServiceBeyond features={serviceBorders} />
            </div>
            <div className="flex justify-center ">
              <ServiceBeyond features={serviceBorders2} />
            </div>
            <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5"></div>
          </div>
        </div>
      </section>

      <section>
        <div className=" max-w-screen-xl mx-auto px-4 pt-[5vh] md:pt-[10vh] pb-[5vh]  md:pb-[10vh]">
          <div className="mx-auto-sm text-center  ">
            <div className="font-GTAmerica text-4xl md:px-5 md:text-[7vw] md:leading-[7vw]  lg:text-[4.6vw]  font-bold tracking-normal text-black text-center  ">
              THE POWER OF{" "}
              <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                PROVEN PROCESSES
              </span>{" "}
            </div>
            <div className="font-arial text-sm md:text-base xl:text-xl mt-2 text-black">
              We are equipped with the right tools for the right job
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6 relative">
            <div className="md:w-2/3 lg:w-1/2 mt-12 text-gray-100"></div>
            <div className="grid divide-x divide-y divide-[0000ff] bg-transparent overflow-hidden rounded-xl border-[blue-500] text-blue-600 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
              {[
                {
                  title: "5-step Transition Plan",
                  description:
                    "Our structured onboarding ensures a seamless integration, so you can hit the ground running",
                },
                {
                  title: "Business Continuity Plan",
                  description:
                    "Our BCP is designed to protect your business from disruptions and ensure continuity.",
                },
                {
                  title: "State-of-the-art office",
                  description:
                    "Our office space offers the perfect blend of functionality and prestige",
                },
                {
                  title: "In-house training and development",
                  description:
                    "Our dedicated training teams ensure your team is equipped with the latest skills through ongoing development",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative transition hover:z-[1] hover:shadow-2xl  hover:shadow-gray-600/10   "
                >
                  <div className="relative space-y-8 py-12 px-8">
                    <div className="space-y-2">
                      <h5 className="font-GTAmerica font-bold text-xl md:text-[2vw] md:leading-[2.3vw]  bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                        {item.title}
                      </h5>
                      <div className="font-arial text-sm md:text-base xl:text-xl mt-2 text-black">
                        {item.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CalltoAction
        title="READY TO DELIVER FROM DAY ONE"
        description="Get in touch to learn more about our services and how we can help you grow your business."
      ></CalltoAction>
    </div>
  );
};

export default FinanceAccounting;
