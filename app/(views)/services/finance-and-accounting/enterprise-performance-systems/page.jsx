"use client";
import LandingPageInner from "../../../../sections/LandingPageInner";
import CTA from "app/sections/CTA";

import SectionTextRight from "app/sections/SectionTextRight";
import SectionTextLeft from "app/sections/SectionTextLeft";
import { headingStyles, bodyTextStyles } from "app/constants/FontStyles";
import { cn } from "@/lib/utils";
import SectionTextRightLong from "app/sections/SectionTextRightLong";

const InvoiceToCash = () => {
  return (
    <div className="">
      <LandingPageInner
        subtitle="EPM"
        titleBeforeBlue=""
        blueTitle=" ENTERPRISE 
           "
        titleAfterBlue="PERFORMANCE 
        MANAGEMENT (EPM)"
        description=" We maximize the value of your finance function by driving sustainable growth, 
        optimizing cash flow, and enhancing governance.
        "
        ImgUrl="/fa-services/epm.jpg"
      />
      <SectionTextRightLong
        blueTitle={<> NEURAL NETWORK </>}
        titleBeforeBlue={<>THE </>}
        titleAfterBlue={<>OF BUSINESS </>}
        description={
          <div className={`space-y-4  ${bodyTextStyles.descriptionLeft}`}>
            <div>
              The economic landscape is rapidly evolving, with inflation, supply
              chain disruptions, and other factors demanding greater agility and
              predictive capabilities from FP&A leaders. There is an urgent need
              for firms to shift their planning, forecasting, and performance
              management processes to from reactive to proactive.
            </div>
            <div>
              We transform EPM into a neural business unit, providing the
              precise predictive insights from static MIS to help you make
              decisions. Our approach begins with establishing a robust EPM
              Center of Excellence (CoE), followed by the integration of
              predictive intelligence into your reporting, financial planning
              and analysis, and enterprise performance management. Our
              deep-rooted EPM expertise, combined with cutting-edge digital and
              analytics capabilities, enables us to uncover actionable insights.
              Our consultancy approach leverages proven transformation
              frameworks to deliver world-class EPM solutions, tailor made for
              you.
            </div>
          </div>
        }
        component={
          <div className="max-w-[60vw] w-[60vw] md:max-w-[40vw] md:w-[40vw] px-[2vw] ">
            <div
              className={cn(
                "group cursor-pointer overflow-hidden relative card rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 mt-[7vh] ",
                "bg-[url('/epm-desc.jpg')] bg-cover bg-center h-[80vh]" // Changed aspect ratio
              )}
            />
          </div>
        }
      />

      <CTA
        title="READY FOR THAT UPGRADE?"
        description="Elevate your financial insights and streamline compliance with our Record-to-Report solutions. Achieve faster closes, ensure accuracy, and empower your team to make data-driven decisions with confidence for sustainable growth."
        href={"/contact"}
        text={"Get in touch"}
      ></CTA>
    </div>
  );
};

export default InvoiceToCash;
