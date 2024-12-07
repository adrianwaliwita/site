"use client";
import LandingPageInner from "../../../../sections/LandingPageInner";
import CTA from "app/sections/CTA";
import { headingStyles, bodyTextStyles } from "app/constants/FontStyles";
import { cn } from "@/lib/utils";

import SectionTextRight from "app/sections/SectionTextRight";
import SectionTextLeft from "app/sections/SectionTextLeft";
import SectionTextRightLong from "app/sections/SectionTextRightLong";
const InvoiceToCash = () => {
  return (
    <div className="">
      <LandingPageInner
        subtitle="INVOICE-TO-CASH SERVICES"
        titleBeforeBlue=""
        blueTitle=" ACCELERATE  "
        titleAfterBlue="INVOICE-TO-CASH"
        description=" We optimize the accounts receivable process by creating in-depth visibility, enabling better decisions, improving user experiences, and boosting cash flow"
        ImgUrl="/F&A-services/invoCash.jpg"
      />
      <div className="pt-[5vh] md:pt-[10vh]"></div>
      <SectionTextRightLong
        blueTitle={<> PROACTIVE </>}
        titleBeforeBlue={<>FROM REACTIVE TO </>}
        titleAfterBlue={null}
        description={
          <div className={`space-y-4  ${bodyTextStyles.descriptionLeft}`}>
            <div>
              Today&apos;s demanding economic environment is leading to
              increased days sales outstanding (DSO) and a growing pile of
              past-due invoices for companies across the world. It is essential
              that CFOs visibility on real-time cash flow forecasts, revised
              credit limit strategies, and their overall cash position.
            </div>
            <div>
              However, many companies find their Accounts Receivable functions
              to be labor-intensive and overly complex, limiting agility. To
              optimize value, Accounts Receivable teams must prioritize
              functional expertise and analytics automation to streamline
              processes, optimize transactions, and unlock predictive insights
              faster. We specialize in transforming AR functions into agile,
              future-ready operations. Our teams will enable you to navigate the
              complexities of the business landscape and ehance your
              invoice-to-cash process for maximum efficiency and profitability.
            </div>
          </div>
        }
        component={
          <div className="max-w-[60vw] w-[60vw] md:max-w-[40vw] md:w-[40vw] px-[2vw] ">
            <div
              className={cn(
                "group cursor-pointer overflow-hidden relative card rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 mt-[7vh] ",
                "bg-[url('/InvoiceCash-desc.jpg')] bg-cover bg-center h-[80vh]" // Changed aspect ratio
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
