"use client";
import CTA from "app/sections/CTA";
import SectionTextRight from "app/sections/SectionTextRight";
import AwardWinning from "app/components/AwardWinning";

import SectionTextLeftBlue from "app/sections/SectionTextLeftBlue";
import HoverCard from "app/components/HoverCard";
import HoverCard2 from "app/components/HoverCard2";
import HoverCard4 from "app/components/HoverCard4";
import MarqueeHori from "app/components/MarqueeHori";
import { cn } from "@/lib/utils";
import { headingStyles, bodyTextStyles } from "app/constants/FontStyles";
import { DividerBlueCenter } from "app/components/Divider";

const progressImages = [
  { img: "/about/1.jpg" },
  { img: "/about/2.jpg" },
  { img: "/about/3.jpg" },
  { img: "/about/4.jpg" },
  { img: "/about/5.jpg" },
  { img: "/about/6.jpg" },
  { img: "/about/7.jpg" },
];
const accredit = [
  { img: "/accredit/ACCA.jpg" },
  { img: "/accredit/CIMA.jpg" },
  { img: "/accredit/CMA.jpg" },
  { img: "/accredit/GPTW.jpg" },
  { img: "/accredit/CPA.jpg" },

  { img: "/accredit/GPTW-WOMEN.jpg" },
];

const AwardsPartnerships = () => {
  return (
    <>
      <div className="w-full pt-[15vh] md:pt-[10vh]">
        <div className="mt-[5vh]"></div>
        <AwardWinning />

        <div className="pt-[5vh] md:pt-[10vh]">
          <CTA
            title={"CONNECT WITH US TODAY"}
            href={"/contact"}
            text={"Get in touch"}
          ></CTA>
        </div>
      </div>
    </>
  );
};

export default AwardsPartnerships;
