"use client";
import LandingPageInner from "../../../../sections/LandingPageInner";

import SectionTextRight from "../../../../sections/SectionTextRight";
const AccountsRecievable = () => {
  return (
    <div className="">
      <LandingPageInner
        subtitle="ACCOUNTS RECEIVABLE"
        titleBeforeBlue="ADD"
        blueTitle=" STRATEGIC VALUE "
        titleAfterBlue="TO YOUR AP FUNCTION"
        description=" Accounts Payable (AP) solutions designed for improved cash
          flow, enhanced compliance, and a more streamlined workflow."
        ImgUrl="https://mrwallpaper.com/images/hd/colorful-finance-reports-and-charts-sjfl27ehdupf10xz.jpg"
      />

      <SectionTextRight
        title="AP"
        blueTitle="TRANSFORMED"
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

export default AccountsRecievable;
