import { headingStyles, bodyTextStyles } from "app/constants/FontStyles";
import {
  DividerBlueCenter,
  DividerBlueLeft,
  DividerWhiteLeft,
  DividerWhiteCenter,
} from "app/components/Divider";
import Security from "app/components/security";

const acc = [
  {
    title: "Access Controls",
    description:
      "We've implemented multi-layered access controls to protect against unauthorized access",
  },
  {
    title: "Audits & Assessments",
    description:
      "We proactively monitor our security posture through regular audits and vulnerability assessments",
  },
  {
    title: "24/7 IT Support",
    description:
      " Our dedicated team provides round-the-clock support to ensure your systems are always running smoothly.",
  },
];
const logos = [
  {
    name: "GPTW",
    url: "/accredit/GPTW.jpg",
  },
  {
    name: "GPTW-WOMEN",
    url: "/accredit/GPTW-WOMEN.jpg",
  },
  {
    name: "SATYN-1",
    url: "/accredit/SATYN-1.jpg",
  },
  {
    name: "SATYN-2",
    url: "/accredit/SATYN-2.jpg",
  },
];

const SecuringInterests = () => {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto pt-[5vh] md:pt-[6.2vh] lg:px-6">
        <div className="mx-auto-sm text-center mb-8 lg:mb-16">
          <div className={headingStyles.primaryCenter}>
            AN <span className={headingStyles.gradient}>AWARD-WINNING </span>{" "}
            CULTURE{" "}
          </div>
          <DividerBlueCenter />
        </div>

        <div className="w-full pt-[2vh]">
          <div className="flex w-full flex-col items-center justify-center px-4 md:px-20">
            <div className="grid grid-cols-2 gap-x-4 md:gap-x-16 md:grid-cols-4">
              {logos.map((logo, key) => (
                <img
                  key={key}
                  src={logo.url}
                  className="h-[30vh] md:h-[30vh] my-[2vh]  w-full object-contain border-[#ffffff] bg-white shadow-md rounded-md "
                  alt={`${logo.name}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuringInterests;