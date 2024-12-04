import { Card } from "app/components/Card";
import SectionTextRight from "../../../../sections/SectionTextRight";
import SectionTextLeft from "../../../../sections/SectionTextLeft";
import LandingPageInner from "../../../../sections/LandingPageInner";
import CalltoAction from "../../../../sections/CTA";

const RecordToReport = () => {
  return (
    <div>
      <LandingPageInner
        subtitle="RECORD TO REPORT SERVICES"
        blueTitle="UPGRADE"
        titleAfterBlue="YOUR RECORD-TO-REPORT CAPABILITIES"
        description=" Our proven frameworks and expert team deliver a faster, error-free financial close, every time."
        ImgUrl="https://mrwallpaper.com/images/hd/colorful-finance-reports-and-charts-sjfl27ehdupf10xz.jpg"
      />

      <SectionTextRight
        blueTitle="ACCELERATE"
        titleBeforeBlue="SIMPLIFY AND"
        titleAfterBlue=" R2R"
        description={
          <>
            The modern <strong>CFO </strong> operates in a complex landscape
            characterized by rapid technological advancements, evolving
            regulations, and the increasing demand for data-driven insights.
            Legacy systems, manual processes, and disparate data sources often
            hinder the ability to deliver timely, accurate, and strategic
            financial information. To overcome these challenges, CFOs must
            prioritize the transformation of their record-to-report functions,
            leveraging technology and talent to drive efficiency, improve
            compliance, and support data-driven decision-making. Leveraging our
            proven R2R solutions and frameworks, we design tailored processes to
            streamline your operations and deliver deeper insights. Our unique
            blend of design thinking and deep-rooted finance expertise ensures
            that our solutions are not only efficient but also aligned with your
            strategic goals.
          </>
        }
        component={<Card />}
      />

      <CalltoAction
        title="READY FOR THAT UPGRADE?"
        description="Elevate your financial insights and streamline compliance with our Record-to-Report solutions. Achieve faster closes, ensure accuracy, and empower your team to make data-driven decisions with confidence for sustainable growth."
      />
    </div>
  );
};

export default RecordToReport;
