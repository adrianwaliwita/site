"use client";

import CalltoAction from "app/sections/CTA";
import Security from "app/components/security";
import ServiceBeyond from "app/components/ServiceBeyond";
import PartnershipFeatures from "app/components/PartnershipFeatures";
import LandingPageInner from "app/sections/LandingPageInner";
import SectionTextRightDesc from "app/sections/SectionTextRightDesc";

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

const AS = [
  {
    title: "Customer Service Support",
    description:
      "Provide comprehensive customer service support through email, phone, and other designated channels, ensuring prompt and professional resolution of client",
  },
  {
    title: "Order Processing & Status Updates",
    description:
      " Manage the order processing lifecycle, including order intake, data entry, status updates, and clear communication with clients to maintain transparency throughout the fulfillment",
  },
  {
    title: "Help Desk Support",
    description:
      " Offer efficient technical support by fielding inquiries, troubleshooting issues with established protocols, and resolving client-reported problems professionally.",
  },
];
const AS2 = [
  {
    title: "Bookkeeping",
    description:
      " Maintain accurate financial records, including invoicing, expense tracking, and reconciliation, to support financial reporting and analysis.",
  },
  {
    title: "Document Creation & Editing",
    description:
      " Draft professional documents such as reports, presentations, and proposals, adhering to designated style guides and client specifications",
  },
  {
    title: "Risk Management Services",
    description:
      "  Equip your clients with the tools to identify, assess, and effectively mitigate financial, operational, and strategic risks.",
  },
];
const AS3 = [
  {
    title: "Data Cleansing & Verification",
    description:
      " Enhance data accuracy and organization by performing data entry, cleaning, and verification tasks.",
  },
  {
    title: "Financial Statement Preparation",
    description:
      " Leverage our expertise to create accurate and reliable financial statements for your clients, ensuring they adhere to all applicable accounting standards.",
  },
];

const FinanceAccounting = () => {
  return (
    <div className="w-full">
      <LandingPageInner
        subtitle="ADMINISTRATIVE SUPPORT"
        titleBeforeBlue=""
        blueTitle=" EVERYDAY "
        titleAfterBlue="
        MADE EASIER"
        description=" Experience the power effortless admin has on your business"
        ImgUrl="/service-images/admin.jpg"
      />

      <SectionTextRightDesc
        description={
          <>
            Our dedicated team of administrative professionals can work with
            businesses of all sizes across any industry to help overcome the
            challenges of increasing workloads, rising costs, and the need for
            greater efficiency. We efficiently deliver comprehensive, end-to-end
            solutions that free up your time and resources to focus on strategic
            initiatives. Whether you require assistance with back-office tasks,
            customer support, or document management, our tailored solutions can
            help you achieve greater productivity and streamline your
            operations. We adapt to your changing needs and anticipate your
            requirements, ensuring the smooth running of your daily operations.
            By combining our expertise with productivity tools and a
            personalized approach, we enable you to optimize your administrative
            processes, improve overall efficiency, and scale faster.
          </>
        }
        component={
          <div className="max-w-[100vw] w-[100vw] md:max-w-[50vw] md:w-[40vw] my-8 md:m-6 pt-[5vh]  ">
            <div
              className={
                ("group cursor-pointer overflow-hidden relative card rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                "bg-[url('/admin-desc.jpg')] bg-cover aspect-square")
                // Preload hover image
              }
            ></div>
          </div>
        }
      />

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
                      <div className="text-base text-black font-arial max-w-xs relative z-10 ">
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
