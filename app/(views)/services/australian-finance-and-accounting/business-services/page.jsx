import ServiceBeyond from "app/components/ServiceBeyond";
import CTA from "app/sections/CTA";
import PartnershipFeatures from "app/components/PartnershipFeatures";
import MarqueeHoriLogoSingle from "app/components/MarqueeHoriLogoSingle";

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

const suite = [
  { img: "/suite-logo/fuse.png" },
  { img: "/suite-logo/fyi.png" },
  { img: "/suite-logo/cas360.png" },
  { img: "/suite-logo/xero.png" },
  { img: "/suite-logo/simple360.png" },
];

const serviceBorders = [
  {
    title: "Virtual Assistant",
    description:
      "We handle all your admin tasks including scheduling appointments, managing emails, data entry, and more",
  },
  {
    title: "Data & Document Management",
    description:
      "We maintain accurate company records, oversee statutory compliance, manage data across systems, and ensure document organization and confidentiality",
  },
];

const serviceBorders2 = [
  {
    title: "Compliance Monitoring",
    description:
      "We monitor compliance with corporate regulations and ASIC requirements, assisting with regulatory document preparation, submission, regulatory changes, and timely fee payments",
  },
  {
    title: "Software Implementation",
    description:
      "We help implement the right software for your business with expert guidance and training, boosting efficiency and accuracy",
  },
];
const serviceBorders3 = [
  {
    title: "Invoicing Management",
    description:
      "We generate, track, and manage accurate invoices using Xero to ensure timely payments and compliance",
  },
  {
    title: "Data Validation and Verification",
    description:
      "We verify data accuracy against source documents and external systems, resolving discrepancies to maintain data integrity",
  },
];
const serviceBorders4 = [
  {
    title: "Data Cleansing",
    description:
      "We perform regular audits to identify and correct data errors, inconsistencies, and duplicates, ensuring data quality and consistency across platforms like Xero",
  },
];

const BusinessServices = () => {
  return (
    <div className="">
      <section className="">
        <div className="max-w-screen-xl mx-auto pt-[15vh] md:pt-[15vh]  lg:px-6">
          <div className="mx-auto-sm text-center mb-8 lg:mb-16">
            <div className="font-GTAmerica text-4xl md:px-5 md:text-[7vw] md:leading-[7vw]  lg:text-[4.6vw] font-bold tracking-normal text-black  ">
              BUSINESS{" "}
              <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                SERVICES
              </span>
            </div>
            <div className="font-arial text-sm md:text-base xl:text-xl mt-2 text-black px-4 md:px-0">
              We handle your firm’s administrative needs, including document
              processing, client database maintenance, and support for
              accountants and directors, as well as ASIC and ATO tasks. Our
              assistance with practice management frees up time and resources
              for high-value, strategic functions, enabling your firm to focus
              on expanding your impact and growing your client base
            </div>
          </div>
          <div className="mx-auto ">
            <div className="flex mx-auto justify-center ">
              <ServiceBeyond features={serviceBorders} />
            </div>
            <div className="flex justify-center ">
              <ServiceBeyond features={serviceBorders2} />
            </div>
            <div className="flex justify-center ">
              <ServiceBeyond features={serviceBorders3} />
            </div>
            <div className="flex justify-center ">
              <ServiceBeyond features={serviceBorders4} />
            </div>
            <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5"></div>
          </div>
        </div>
        <div className="pt-[5vh] md:pt-[10vh] ">
          <PartnershipFeatures />
        </div>
      </section>
      <section className="max-w-screen-xl mx-auto pt-[5vh] md:pt-[5vh]  lg:px-6 ">
        <div className="mx-auto ">
          <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
            <section>
              <div className="max-w-screen-xl mx-auto  px-4  lg:px-6 mt-[4vh]">
                <div className="mx-auto-sm text-center mb-8 lg:mb-16">
                  <div className="font-GTAmerica text-4xl md:px-5 md:text-[7vw] md:leading-[7vw]  lg:text-[4.6vw]  font-bold tracking-normal text-black ">
                    OUR{" "}
                    <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                      COMPREHENSIVE
                    </span>{" "}
                    SUITE
                  </div>
                  <div className="font-arial text-sm md:text-base xl:text-xl mt-2 text-black px-4 md:px-0 ">
                    We are equipped with the right tools for the right job
                  </div>
                  <div className="mt-[5vh]"></div>
                  <MarqueeHoriLogoSingle items={suite}> </MarqueeHoriLogoSingle>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <div className=" pt-[5vh] md:pt-[10vh]">
        <CTA
          title="READY TO DELIVER FROM DAY ONE"
          description="Get in touch to learn more about our services and how we can help you grow your business."
          href={"/contact"}
          text={"Get in touch"}
        ></CTA>
      </div>
    </div>
  );
};

export default BusinessServices;
