import { Card } from "app/components/Card";
import SectionTextRight from "app/sections/SectionTextRight";
import SectionTextLeft from "app/sections/SectionTextLeft";
import LandingPageInner from "app/sections/LandingPageInner";
import CTA from "app/sections/CTA";
import { cn } from "@/lib/utils";
import { headingStyles, bodyTextStyles } from "app/constants/FontStyles";
import { DividerBlueCenter } from "app/components/Divider";

import SectionTextLeftBlue from "app/sections/SectionTextLeftBlue";

const AccountsPayable = () => {
  return (
    <div>
      <div className="pt-[5vh] md:pt-[10vh]">
        <LandingPageInner
          subtitle="ACCOUNTS PAYABLE"
          titleBeforeBlue="ADD"
          blueTitle=" STRATEGIC VALUE "
          titleAfterBlue="TO YOUR AP FUNCTION"
          description=" Accounts Payable (AP) solutions designed for improved cash
          flow, enhanced compliance, and a more streamlined workflow."
          ImgUrl="https://mrwallpaper.com/images/hd/colorful-finance-reports-and-charts-sjfl27ehdupf10xz.jpg"
        />
      </div>
      <SectionTextRight
        blueTitle={<> TRANSFORMED </>}
        titleBeforeBlue={<>AP </>}
        titleAfterBlue={null}
        description={
          <div className={`space-y-4  ${bodyTextStyles.descriptionLeft}`}>
            <div>
              As the role of the CFO evolves from a purely financial function to
              a strategic driver of innovation and growth, AP has emerged as a
              strategic lever driving profit and progress.
            </div>
            <div>
              In a time of volatile supply chains and fluctuating demand, a
              streamlined AP process enhances financial resilience and is
              essential to build strong supplier relationships.{" "}
            </div>
          </div>
        }
        component={
          <div>
            <div className="max-w-[100vw] w-[100vw] md:max-w-[50vw] md:w-[40vw]  px-[2vw]  ">
              <div
                className={cn(
                  "group cursor-pointer overflow-hidden relative card rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 ",
                  "bg-[url('/ap-inner-services/AP-2.jpg')] bg-cover aspect-square"
                )}
              ></div>
            </div>
          </div>
        }
      />
      <div className="mb-[-5vh] md:mb-0"></div>

      <SectionTextLeft
        blueTitle={<>TAILORED</>}
        titleBeforeBlue={null}
        titleAfterBlue={
          <>
            {" "}
            AP <br /> SOLUTIONS
          </>
        }
        description="As the role of the CFO evolves from a purely financial
    function to a strategic driver of innovation and growth, AP
    has emerged as a strategic lever driving profit and
    progress. In a time of volatile supply chains and
    fluctuating demand, a streamlined AP process enhances
    financial resilience and is essential to build strong
    supplier relationships."
        component={
          <div>
            <div className="max-w-[100vw] w-[100vw] md:max-w-[50vw] md:w-[40vw]  px-[2vw]  ">
              <div
                className={cn(
                  "group cursor-pointer overflow-hidden relative card rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 ",
                  "bg-[url('/ap-inner-services/AP-3.jpg')] bg-cover aspect-square"
                )}
              ></div>
            </div>
          </div>
        }
      />

      <div className="md:mb-[10vh]"></div>

      <CTA
        title="READY FOR THAT UPGRADE?"
        description="Elevate your financial insights and streamline compliance with our Record-to-Report solutions. Achieve faster closes, ensure accuracy, and empower your team to make data-driven decisions with confidence for sustainable growth."
        href={"/contact"}
        text={"Get in touch"}
      ></CTA>
    </div>
  );
};

export default AccountsPayable;
