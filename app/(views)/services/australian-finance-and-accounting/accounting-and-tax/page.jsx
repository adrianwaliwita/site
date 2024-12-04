import ServiceBeyond from "app/components/ServiceBeyond";
import CalltoAction from "app/sections/CTA";
import PartnershipFeatures from "app/components/PartnershipFeatures";

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

const serviceBorders = [
  {
    title: "Bookkeeping",
    description:
      "We handle your financial records, maintain accurate ledgers, and ensure your accounts are always up-to-date, giving you a clear view of your financial health",
  },
  {
    title: "BAS Preparation",
    description:
      "We'll handle your BAS preparation completely with accuracy and efficiency",
  },
];

const serviceBorders2 = [
  {
    title: "Payroll Processing and Tax ",
    description:
      "We manage your payroll processing, ensuring your employees are paid accurately and on time, while also handling all tax-related obligations to keep your business compliant",
  },
  {
    title: "Coordinate Auditing:",
    description:
      "We coordinate annual audits by efficiently organizing your documents, ensuring all necessary information is provided for the auditor",
  },
];
const serviceBorders3 = [
  {
    title: "Financial Statement Preparation",
    description:
      "We prepare accurate and compliant financial statements, providing you with a clear and detailed overview of your company’s financial performance, supporting informed decision-making",
  },
  {
    title: "Individual Income Tax Preparation",
    description:
      "Whether your end client is a freelancer, self-employed, or a traditional employee, we can handle all their tax filing needs",
  },
];
const serviceBorders4 = [
  {
    title: "Company, Trust & Partnership Income Tax Return Preparation",
    description:
      "From sole proprietorships to complex partnerships and corporations, we provide business tax filings for any entity",
  },
  {
    title: "Fringe Benefits Tax (FBT) Management",
    description:
      "We manage your Fringe Benefits Tax obligations, ensuring compliance with regulations while accurately calculating and reporting benefits provided to your employees, helping you avoid penalties and streamline tax ",
  },
];

const AccountingAndTax = () => {
  return (
    <div className="">
      <section className="">
        <div className="max-w-screen-xl mx-auto pt-[15vh] md:pt-[15vh]  lg:px-6">
          <div className="mx-auto-sm text-center mb-8 lg:mb-16">
            <div className="font-GTAmerica text-4xl md:px-5 md:text-[7vw] md:leading-[7vw]  lg:text-[4.6vw] font-bold tracking-normal text-black  ">
              ACCOUNTING AND{" "}
              <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                TAX
              </span>
            </div>
            <div className="font-arial text-sm md:text-base xl:text-xl mt-2 text-black px-4 md:px-0">
              Our tailored solutions connect you with dedicated remote teams to
              optimize your workflow, complete your workload, and allow you to
              concentrate on delivering exceptional client service
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
                </div>
                <div className="flex justify-center ">
                  <div className=" justify-center"></div>
                </div>
              </div>
              <div className="w-full">
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
            </section>
          </div>
        </div>
      </section>

      <div className=" pt-[5vh] md:pt-[10vh]">
        <CalltoAction
          title="READY TO DELIVER FROM DAY ONE"
          description="Get in touch to learn more about our services and how we can help you grow your business."
        ></CalltoAction>
      </div>
    </div>
  );
};

export default AccountingAndTax;
