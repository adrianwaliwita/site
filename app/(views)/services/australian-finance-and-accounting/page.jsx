"use client";

import HoverCard3 from "app/components/HoverCard3";
import MarqueeHori from "app/components/MarqueeHori";
import MarqueeHoriLogo from "app/components/MarqueeHoriLogo";
import MarqueeHoriLogoSingle from "app/components/MarqueeHoriLogoSingle";

import CTA from "app/sections/CTA";
import PartnershipFeatures from "app/components/PartnershipFeatures";
import SecuringInterests from "app/components/SecuringInterests";
import TopTierTalentAus from "app/components/TopTierTalentAus";
import ServiceBeyondBorders from "app/components/ServiceBeyondBorders";
import ProvenProcesses from "app/components/ProvenProcesses";

import { headingStyles, bodyTextStyles } from "app/constants/FontStyles";
import {
  DividerBlueCenter,
  DividerBlueLeft,
  DividerWhiteLeft,
  DividerWhiteCenter,
} from "app/components/Divider";

const suite = [
  { img: "/suite-logo/oracle.png" },
  { img: "/suite-logo/sap.png" },
  { img: "/suite-logo/oracle-hyperion.png" },
  { img: "/suite-logo/acumatica.png" },
  { img: "/suite-logo/fathom.png" },
  { img: "/suite-logo/maxio.png" },
  { img: "/suite-logo/microsoft-dynamic.png" },
  { img: "/suite-logo/monday.png" },
  { img: "/suite-logo/myob.png" },
  { img: "/suite-logo/power-bi.png" },
  { img: "/suite-logo/qb.png" },
  { img: "/suite-logo/sage.png" },
  { img: "/suite-logo/salesforce.png" },
  { img: "/suite-logo/stripe.png" },
  { img: "/suite-logo/reckon.png" },
  { img: "/suite-logo/accurri.png" },
  { img: "/suite-logo/ACL.png" },
];

const accredit = [
  { img: "/AUS-Services/6.jpg" },
  { img: "/AUS-Services/7.jpg" },
  { img: "/AUS-Services/8.jpg" },
  { img: "/AUS-Services/9.jpg" },
  { img: "/AUS-Services/10.jpg" },
  { img: "/AUS-Services/11.jpg" },
  { img: "/AUS-Services/12.jpg" },
];

const AusFinance = () => {
  return (
    <div className="w-full pt-[10vh] md:pt-[10vh]">
      <section className="flex flex-col items-center w-full ">
        {/* Content Section */}
        <div className="w-full px-[5vw] pt-[5vh]  text-center">
          <div className="container mx-auto h-full sm:p-10">
            <header className="flex flex-col justify-center items-center">
              <div className="px-4 ">
                {/* Title Section */}
                <div>
                  <div className="text-lg md:text-[2vw] lg:text-[1.5vw] tracking-widest font-GTAmerica font-bold">
                    AUSTRALIAN FINANCE & ACCOUNTING
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
                  A STRATEGIC PARTNER IN <br />
                  <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                    AUSTRALIAN F&A
                  </span>
                  <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                    <br />
                  </span>{" "}
                </h1>

                {/* Description */}
                <div className="mt-[3vh]">
                  {" "}
                  <DividerBlueCenter />
                </div>

                <div
                  className={`${bodyTextStyles.descriptionCenterAus} mb-[-4vh]`}
                >
                  We have established a dedicated department focused on
                  supporting accounting firms, business accountants, and
                  financial planners in Australia. Our expert team has partnered
                  with some of Australia&apos;s largest firms, delivering
                  solutions that reduce costs, save time, and enable growth. By
                  providing a full range of services, we position ourselves as a
                  true composite partner, ensuring our clients receive
                  comprehensive, customized support that aligns perfectly with
                  their business goals.{" "}
                </div>
              </div>
            </header>
          </div>
        </div>{" "}
        {/* Marquee Section */}
      </section>

      <section>
        <div className=" mx-auto  px-4 pt-[5vh]  md:pt-[5vh] lg:px-6">
          <div className="mx-auto-sm text-center mb-8 lg:mb-16">
            <div className="font-GTAmerica text-4xl md:px-5 md:text-[7vw] md:leading-[7vw]  lg:text-[4.6vw]  font-bold tracking-normal text-black text-center">
              OUR{" "}
              <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                SOLUTIONS
              </span>{" "}
            </div>
            <DividerBlueCenter />

            <div className={bodyTextStyles.descriptionCenter}>
              We expertly navigate regional nuances across Australia to ensure
              full compliance in every state.
            </div>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4  px-[5vw]">
            <HoverCard3
              title={"Accounting and Tax"}
              description={
                <a href="/services/australian-finance-and-accounting/accounting-and-tax">
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
                </a>
              }
              img={"/AUS-Services/accounting-tax.jpg"}
            />
            <HoverCard3
              title={"Audit & Assurance"}
              description={
                <a href="/services/australian-finance-and-accounting/audit-and-assurance">
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
                </a>
              }
              img={"/AUS-Services/audit-assurance.jpg"}
            />
            <HoverCard3
              title={"Business Services"}
              description={
                <a href="/services/australian-finance-and-accounting/business-services">
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
                </a>
              }
              img={"/AUS-Services/Business-Services.jpg"}
            />
            <HoverCard3
              title={"SMSF"}
              description={
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
              }
              img={"/AUS-Services/SMSF.jpg"}
            />
            <HoverCard3
              title={"Paraplanning"}
              description={
                <a href="/services/australian-finance-and-accounting/paraplanning">
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
                </a>
              }
              img={"/AUS-Services/Paraplanning.jpg"}
            />
          </div>
        </div>
      </section>
      <section>
        <div className=" mx-auto  px-4 pt-[5vh]  md:pt-[10vh] lg:px-6">
          <div className="mx-auto-sm text-center mb-8 lg:mb-16">
            <div className="font-GTAmerica text-4xl md:px-5 md:text-[7vw] md:leading-[7vw]  lg:text-[4.6vw]  font-bold tracking-normal text-black text-center">
              NATIONWIDE{" "}
              <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                REACH
              </span>{" "}
            </div>
            <DividerBlueCenter />
            <div className={bodyTextStyles.descriptionCenter}>
              We expertly navigate regional nuances across Australia to ensure
              full compliance in every state.
            </div>
          </div>
          <MarqueeHoriLogoSingle items={accredit}> </MarqueeHoriLogoSingle>
        </div>
      </section>

      <div className="pt-[5vh] md:pt-[10vh] ">
        <PartnershipFeatures />
      </div>

      <TopTierTalentAus />

      <section
        className="relative h-[50vh] w-full bg-fixed bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/AUS-Services/cpa-zec.png')",
        }}
      ></section>

      <SecuringInterests></SecuringInterests>

      <ServiceBeyondBorders></ServiceBeyondBorders>

      <section>
        <div className=" max-w-screen-xl mx-auto px-4 pt-[5vh] md:pt-[10vh] pb-[5vh]  md:pb-[10vh]">
          <div className="mx-auto-sm text-center  ">
            <div className={headingStyles.primaryCenter}>
              OUR{" "}
              <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                COMPREHENSIVE
              </span>{" "}
              SUITE
            </div>
            <div className=" lg:mb-[-1vh]">
              {" "}
              <DividerBlueCenter />
            </div>
            <div className={bodyTextStyles.descriptionCenter}>
              We are equipped with the right tools for the right job
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6 relative">
            <div className=" flex justify-center ">
              <div className=" justify-center">
                <div className="pt-[3vh]">
                  <MarqueeHoriLogo items={suite}> </MarqueeHoriLogo>
                </div>

                {/* <IconCloud
                  iconSlugs={["react", "typescript"]}
                  customPngIcons={[
                    { src: "/suite-logo/oracle.png" },
                    { src: "/suite-logo/sap.png" },
                    { src: "/suite-logo/oracle-hyperion.png" },
                    { src: "/suite-logo/acumatica.png" },
                    { src: "/suite-logo/fathom.png" },
                    { src: "/suite-logo/maxio.png" },
                    { src: "/suite-logo/microsoft-dynamic.png" },
                    { src: "/suite-logo/monday.png" },
                    { src: "/suite-logo/myob.png" },
                    { src: "/suite-logo/power-bi.png" },
                    { src: "/suite-logo/qb.png" },
                    { src: "/suite-logo/sage.png" },
                    { src: "/suite-logo/salesforce.png" },
                    { src: "/suite-logo/stripe.png" },
                    { src: "/suite-logo/xero.png" },
                  ]}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProvenProcesses></ProvenProcesses>

      <CTA
        title="READY TO DELIVER FROM DAY ONE"
        description="Get in touch to learn more about our services and how we can help you grow your business."
        href={"/contact"}
        text={"Get in touch"}
      ></CTA>
    </div>
  );
};

export default AusFinance;