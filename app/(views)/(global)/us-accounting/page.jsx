"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Button from "app/components/Button";
import Container from "app/sections/Container";
import GrowWithoutLimits from "app/components/GrowWithoutLimits";

const USAccounting = () => {
  const [state, handleSubmit] = useForm("xpwzbynw"); // Replace with your actual Formspree form ID

  return (
    <div>
      <head>
        <title> US Accounting </title>
      </head>{" "}
      <div className="relative min-h-[135vh] md:min-h-[150vh] flex items-center pt-[10vh]">
        <img
          alt="background"
          src="/blue-waves-abstract.jpg"
          decoding="async"
          data-nimg="1"
          className="w-full h-full object-cover absolute inset-0 pointer-events-none"
          loading="lazy"
          style={{ color: "transparent" }}
        />
        <div className="relative max-w-7xl mx-auto p-6">
          <section
            className="rounded-xl"
            id="contact"
            style={{
              background: "rgba(255, 255, 255, 0)",
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
              backdropFilter: "blur(9px)",
              WebkitBackdropFilter: "blur(9px)",
              borderRadius: "10px",
              border: "1px solid rgba(255, 255, 255, 0.18)",
            }}
          >
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20 md:max-w-[80vw]">
              {/* Contact Heading */}
              <div className="mb-4 text-center">
                <h2 className="text-[13vw] leading-[13vw] md:text-[8vw] lg:text-[6vw] font-GTAmerica md:leading-[7.5vw] font-bold mt-[3vh] md:mt-0 text-white">
                  US <span className="text-white">Accounting</span>
                </h2>
                <div className="w-40 h-[2px] bg-white mt-8 mx-auto"></div>
              </div>

              {/* Contact Content */}
              <div className="flex items-stretch justify-center">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Contact Details */}
                  <div className="h-full pr-6">
                    <p className="mt-3 mb-12 text-lg text-white text-center md:text-left ">
                      Explore our comprehensive US accounting services, tailored
                      to meet the unique needs of businesses operating in the
                      United States. We offer a range of solutions to help you
                      navigate the complexities of US tax laws and regulations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="pb-16"></div>
      </div>
    </div>
  );
};

export default USAccounting;
