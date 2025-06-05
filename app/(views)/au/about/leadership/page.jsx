"use client";
import CTA from "app/sections/CTA";

import SectionTextLeftBlue from "app/sections/SectionTextLeftBlue";

import { cn } from "@/lib/utils";
import { headingStyles, bodyTextStyles } from "app/constants/FontStyles";
import { DividerBlueCenter } from "app/components/Divider";

const Leadership = () => {
  return (
    <>
      <div className="w-full pt-[15vh] md:pt-[5vh]">
        <div className="py-[5vh] md:pt-[8vh] "></div>

        <section>
          <div className="max-w-screen-xl mx-auto pt-[5vh] md:pt-[10vh] lg:px-6">
            <div className="mx-auto-sm text-center mb-8 lg:mb-16">
              <div className={headingStyles.primaryCenter}>
                <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                  REAL PEOPLE.
                </span>{" "}
                REAL RESULTS. <DividerBlueCenter />
              </div>
              <div className={bodyTextStyles.descriptionCenter}>
                Driven by our company values our experienced specialists
                guarantee clients access to top-tier talent with a strong
                emphasis on building lasting relationships
              </div>
            </div>
            <div className="grid gap-8 px-10 mb-6 lg:mb-16 md:grid-cols-2">
              {[
                {
                  name: "Deshaka Perera",
                  position: "CEO",
                  img: "/team/1.webp",
                  email: "deshaka.perera@hconnectint.com",
                  linkedin:
                    "https://www.linkedin.com/in/deshaka-perera-3102011b/",
                },
                {
                  name: "Arshad Booso",
                  position: "Head of Industry Specific Services",
                  img: "/team/2.webp",
                  email: "arshad.booso@hconnectint.com",
                  linkedin: "https://www.linkedin.com/in/arshadbooso/",
                },
                {
                  name: "Shachithra Gunesekara",
                  position: "Head of People & Culture",
                  img: "/team/3.webp",
                  email: "shachithra.gunesekara@hconnectint.com",
                  linkedin:
                    "https://www.linkedin.com/in/shachithra-gunasekara-33879272/",
                },
                {
                  name: "Pasindu Liyanage",
                  position: "Head of IT & Compliance",
                  img: "/team/4.webp",
                  email: "pasindu.liyanage@hconnectint.com",
                  linkedin:
                    "https://www.linkedin.com/in/pasindu-sajith-liyanage/",
                },
                {
                  name: "Natali Jayatilaka",
                  position: "Head of Sales & Marketing",
                  img: "/team/5.webp",
                  email: "natali.jayatilaka@hconnectint.com",
                  linkedin:
                    "https://www.linkedin.com/in/natali-jayatilaka-412bab190/",
                },
                // {
                //   name: "Udesh Wickramarathne",
                //   position: "Head of Australian F&A Services",
                //   img: "/team/13.webp",
                //   email: "udesh.wickramarathne@hconnectint.com",
                //   linkedin:
                //     "https://www.linkedin.com/in/udesh-wickramarathne-123020194/",
                // },
              ].map((teamMember, index) => (
                <div
                  key={index}
                  className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700"
                >
                  <a href="#">
                    <img
                      className="w-full h-[30vh] object-cover rounded-lg sm:rounded-none sm:rounded-l-lg team-img"
                      src={teamMember.img}
                      alt={`${teamMember.name} Avatar`}
                    />
                  </a>
                  <div className="p-5">
                    <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">{teamMember.name}</a>
                    </h3>
                    <span className="text-gray-500 dark:text-gray-400">
                      {teamMember.position}
                    </span>
                    <div className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                      {teamMember.description}
                    </div>{" "}
                    <ul className="flex space-x-4 sm:mt-0">
                      <li>
                        <a
                          href={teamMember.linkedin}
                          className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          href={`mailto:${teamMember.email}`}
                          className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div className="">
          <SectionTextLeftBlue
            whiteTitle={
              <>
                <div
                  className={`${headingStyles.primaryLeft} ${headingStyles.white}`}
                >
                  ABSOLUTE VALUE
                  <div className="text-2xl lg:text-3xl tracking-widest font-GTAmerica font-bold my-[2vh] text-white">
                    - EVERY STEP OF THE WAY
                  </div>
                </div>
              </>
            }
            description={
              <div
                className={`space-y-4 w-[90%]  ${bodyTextStyles.descriptionLeft} ${bodyTextStyles.white}`}
              >
                <div>
                  Our leadership drives absolute value across every part of the
                  business – from top talent and best-in-class processes to
                  client relationships, security, compliance, and financial
                  efficiency. It’s a people-led approach, guided by strong
                  leadership, with one goal in mind: delivering maximum value
                  for our clients at every touchpoint.
                </div>
              </div>
            }
            component={
              <div>
                <div className="max-w-[100vw] w-[100vw] md:max-w-[50vw] md:w-[40vw]  px-[2vw] ">
                  <div
                    className={cn(
                      "group cursor-pointer overflow-hidden relative card rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 ",
                      "bg-[url('/absolute.webp')] bg-cover aspect-square"
                    )}
                  ></div>
                </div>
              </div>
            }
          ></SectionTextLeftBlue>
        </div>

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

export default Leadership;
