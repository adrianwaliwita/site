import Container from "app/sections/Container";
import MarqueeVert from "app/components/MarqueeVert";
import { Card } from "app/components/Card";
import Footer from "app/sections/Footer";
import GrowWithoutLimits from "../../../components/GrowWithoutLimits";
import CaseStudy from "../../../components/CaseStudy";
import SectionTextRight from "../../../sections/SectionTextRight";
import SectionTextLeft from "../../../sections/SectionTextLeft";

const AccountsPayable = () => {
  return (
    <div>
      <section className="flex flex-wrap flex-col-reverse sm:flex-row">
        {/* Text Content */}
        <div className="w-full sm:w-8/12  ">
          <div className="container mx-auto lg:px-20 h-[400px] md:h-dvh ">
            <div className="container px-4 flex flex-col justify-center items-center h-full lg:mt-0 ">
              <div className="w-full text-center md:text-left ">
                <div className="text-2xl lg:text-3xl tracking-widest font-GTAmerica font-bold">
                  ACCOUNTS PAYABLE
                  <span className="bg-gradient-to-bl from-[#27253c] to-[#0000ff] bg-clip-text text-transparent">
                    .
                  </span>
                  <div className="flex justify-center md:justify-start w-full">
                    <div className="w-40 h-[2px] bg-gradient-to-bl from-[#27253c] to-[#0000ff] my-4"></div>
                  </div>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-[6vw] font-GTAmerica font-bold text-center md:text-left">
                  ADD{" "}
                  <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                    STRATEGIC VALUE
                  </span>{" "}
                  <br /> TO YOUR AP FUNCTION
                </h1>
                <p className="text-base sm:text-lg font-arial mt-7 text-center md:text-left">
                  Accounts Payable (AP) solutions designed for improved cash
                  flow, enhanced compliance, and a more streamlined workflow.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <img
          src="https://mrwallpaper.com/images/hd/colorful-finance-reports-and-charts-sjfl27ehdupf10xz.jpg"
          alt="Finance Reports"
          className="w-full sm:h-screen sm:w-4/12 object-cover hidden md:block"
        />
      </section>
      <SectionTextRight
        blueTitle="TRANSFORMED"
        titleBeforeBlue="AP"
        titleAfterBlue={null}
        description="As the role of the CFO evolves from a purely financial
      function to a strategic driver of innovation and growth, AP
      has emerged as a strategic lever driving profit and
      progress. In a time of volatile supply chains and
      fluctuating demand, a streamlined AP process enhances
      financial resilience and is essential to build strong
      supplier relationships."
      />
      <SectionTextLeft
        blueTitle="TAILORED"
        titleBeforeBlue={null}
        titleAfterBlue=" AP SOLUTIONS"
        description="As the role of the CFO evolves from a purely financial
    function to a strategic driver of innovation and growth, AP
    has emerged as a strategic lever driving profit and
    progress. In a time of volatile supply chains and
    fluctuating demand, a streamlined AP process enhances
    financial resilience and is essential to build strong
    supplier relationships."
      />
    </div>
  );
};

export default AccountsPayable;
