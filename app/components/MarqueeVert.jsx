import { cn } from "@/lib/utils";
import { Marquee } from "./Marquee";

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "cursor-pointer overflow-hidden rounded-xl border",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <img className=" w-full h-full object-cover " alt="" src={img} />
    </figure>
  );
};

export default function MarqueeVert({ items = [] }) {
  // Calculate indices for three rows
  const firstRow = items.slice(0, Math.floor(items.length / 3));
  const secondRow = items.slice(
    Math.floor(items.length / 3),
    Math.floor((2 * items.length) / 3)
  );
  const thirdRow = items.slice(Math.floor((2 * items.length) / 6));

  return (
    <div className="relative flex h-[30vh] md:h-[80vh]  w-full md:w-[100%] flex-row items-center justify-center overflow-hidden rounded-lg  bg-[#2e2e5300] ">
      <Marquee pauseOnHover vertical className="[--duration:60s]">
        {firstRow.map((item, index) => (
          <ReviewCard key={index} {...item} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="[--duration:60s]">
        {secondRow.map((item, index) => (
          <ReviewCard key={index} {...item} />
        ))}
      </Marquee>
      <Marquee pauseOnHover vertical className="[--duration:60s]">
        {thirdRow.map((item, index) => (
          <ReviewCard key={index} {...item} />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white dark:from-background"></div>
    </div>
  );
}
