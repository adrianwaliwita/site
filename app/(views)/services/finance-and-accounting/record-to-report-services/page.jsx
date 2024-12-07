import { Card } from "app/components/Card";
import SectionTextRight from "../../../../sections/SectionTextRight";
import SectionTextRightLong from "../../../../sections/SectionTextRightLong";

import SectionTextLeft from "../../../../sections/SectionTextLeft";
import LandingPageInner from "../../../../sections/LandingPageInner";
import CTA from "../../../../sections/CTA";
import { headingStyles, bodyTextStyles } from "app/constants/FontStyles";
import { cn } from "@/lib/utils";

const RecordToReport = () => {
  return (
    <div>
      <LandingPageInner
        subtitle="RECORD TO REPORT SERVICES"
        blueTitle="UPGRADE"
        titleAfterBlue="YOUR RECORD-TO-REPORT CAPABILITIES"
        description=" Our proven frameworks and expert team deliver a faster, error-free financial close, every time."
        ImgUrl="/R2R.jpg"
      />

      <SectionTextRightLong
        blueTitle={<> ACCELERATE </>}
        titleBeforeBlue={<>SIMPLIFY AND </>}
        titleAfterBlue={<>R2R </>}
        description={
          <div className={`space-y-4  ${bodyTextStyles.descriptionLeft}`}>
            <div>
              The modern <strong>CFO </strong> operates in a complex landscape
              characterized by rapid technological advancements, evolving
              regulations, and the increasing demand for data-driven insights.
              Legacy systems, manual processes, and disparate data sources often
              hinder the ability to deliver timely, accurate, and strategic
              financial information.
            </div>
            <div>
              To overcome these challenges, CFOs must prioritize the
              transformation of their record-to-report functions, leveraging
              technology and talent to drive efficiency, improve compliance, and
              support data-driven decision-making. Leveraging our proven R2R
              solutions and frameworks, we design tailored processes to
              streamline your operations and deliver deeper insights. Our unique
              blend of design thinking and deep-rooted finance expertise ensures
              that our solutions are not only efficient but also aligned with
              your strategic goals.
            </div>
          </div>
        }
        component={
          <div className="max-w-[60vw] w-[60vw] md:max-w-[40vw] md:w-[40vw] px-[2vw] ">
            <div
              className={cn(
                "group cursor-pointer overflow-hidden relative card rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 mt-[7vh] ",
                "bg-[url('/F&A-services/RecRep.jpg')] bg-cover bg-center h-[80vh]" // Changed aspect ratio
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

export default RecordToReport;
