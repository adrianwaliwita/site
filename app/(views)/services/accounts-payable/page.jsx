import { Card } from "app/components/Card";
import SectionTextRight from "../../../sections/SectionTextRight";
import SectionTextLeft from "../../../sections/SectionTextLeft";
import LandingPageInner from "../../../sections/LandingPageInner";
import CalltoAction from "../../../sections/CTA";

const AccountsPayable = () => {
  return (
    <div>
      <LandingPageInner
        subtitle="ACCOUNTS PAYABLE"
        titleBeforeBlue="ADD"
        blueTitle=" STRATEGIC VALUE "
        titleAfterBlue="TO YOUR AP FUNCTION"
        description=" Accounts Payable (AP) solutions designed for improved cash
          flow, enhanced compliance, and a more streamlined workflow."
        ImgUrl="https://mrwallpaper.com/images/hd/colorful-finance-reports-and-charts-sjfl27ehdupf10xz.jpg"
      />

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
        component={<Card />}
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
        component={<Card />}
      />
      <CalltoAction
        title="READY FOR THAT UPGRADE?"
        description="Elevate your financial insights and streamline compliance with our Record-to-Report solutions. Achieve faster closes, ensure accuracy, and empower your team to make data-driven decisions with confidence for sustainable growth."
      />
    </div>
  );
};

export default AccountsPayable;
