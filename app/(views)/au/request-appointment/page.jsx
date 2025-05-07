"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Button from "app/components/Button";
import Container from "app/sections/Container";
import GrowWithoutLimits from "app/components/GrowWithoutLimits";

const RequestAppointment = () => {
  const [state, handleSubmit] = useForm("YOUR_FORM_ID"); // Replace with your actual Formspree form ID

  return (
    <div>
      <head>
        <title> Request an Appointment </title>
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
                  Request an <span className="text-white">Appointment</span>
                </h2>
                <div className="w-40 h-[2px] bg-white mt-8 mx-auto"></div>
              </div>

              {/* Contact Content */}
              <div className="flex items-stretch justify-center">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Contact Details */}
                  <div className="h-full pr-6">
                    <p className="mt-3 mb-12 text-lg text-white text-center md:text-left ">
                      Please fill out the form below to request an appointment.
                      We will get back to you as soon as possible.
                    </p>
                    <ul className="mb-6 md:mb-0 space-y-6 md:space-y-4">
                      <li className="flex items-start space-x-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded text-white md:mr-[-12px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-6 w-6"
                          >
                            <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                            <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                          </svg>
                        </div>{" "}
                        <div className="flex justify-start pt-2">
                          <Button type="submit" disabled={state.submitting}>
                            {state.submitting ? "Sending..." : "Send Message"}
                          </Button>
                        </div>
                        <div className="ml-4 mb-4">
                          <h3 className="mb-2 text-lg font-medium leading-6 text-white">
                            Address
                          </h3>
                          <div className="text-white">
                            Level 1, 735 High Street,
                            <br />
                            Epping VIC 3076
                          </div>
                        </div>
                      </li>
                      <li className="flex items-start space-x-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded  text-gray-50">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-6 w-6"
                          >
                            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                          </svg>
                        </div>
                        <div className="ml-4 mb-4">
                          <h3 className="mb-2 text-lg font-medium leading-6 text-white">
                            Contact
                          </h3>
                          <p className="text-white">TP:+61 29 1919737</p>
                          <p className="text-white">
                            Mail: info@hconnectint.com
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* Contact Form */}
                  <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                    {state.succeeded ? (
                      <div className="text-black text-2xl text-center font-arial bg-white rounded p-10">
                        Thanks for your message! We'll get back to you soon.
                      </div>
                    ) : (
                      <>
                        <h2 className="mb-4 text-3xl tracking-wide font-bold text-white font-GTAmerica">
                          Request an Appointment
                        </h2>
                        <form onSubmit={handleSubmit} id="contactForm">
                          <div className="mb-6">
                            <div className="mx-0 mb-1 sm:mb-4">
                              <input
                                type="text"
                                name="firstName"
                                id="firstName"
                                autoComplete="given-name"
                                placeholder="First Name *"
                                className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                                required
                              />
                              <ValidationError
                                prefix="First Name"
                                field="firstName"
                                errors={state.errors}
                                className="text-red-500 text-sm"
                              />
                            </div>
                          </div>
                          <div className="mb-6">
                            <div className="mx-0 mb-1 sm:mb-4">
                              <input
                                type="text"
                                name="lastName"
                                id="lastName"
                                autoComplete="family-name"
                                placeholder="Last Name *"
                                className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                                required
                              />
                              <ValidationError
                                prefix="Last Name"
                                field="lastName"
                                errors={state.errors}
                                className="text-red-500 text-sm"
                              />
                            </div>
                          </div>
                          <div className="mb-6">
                            <div className="mx-0 mb-1 sm:mb-4">
                              <input
                                type="tel"
                                name="telephone"
                                id="telephone"
                                autoComplete="tel"
                                placeholder="Telephone"
                                className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                              />
                              <ValidationError
                                prefix="Telephone"
                                field="telephone"
                                errors={state.errors}
                                className="text-red-500 text-sm"
                              />
                            </div>
                          </div>
                          <div className="mb-6">
                            <div className="mx-0 mb-1 sm:mb-4">
                              <input
                                type="email"
                                id="email"
                                name="email"
                                autoComplete="email"
                                placeholder="Email *"
                                className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                                required
                              />
                              <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                                className="text-red-500 text-sm"
                              />
                            </div>
                          </div>
                          <div className="mb-6">
                            <div className="mx-0 mb-1 sm:mb-4">
                              <input
                                type="text"
                                name="companyName"
                                id="companyName"
                                placeholder="Company Name"
                                className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                              />
                              <ValidationError
                                prefix="Company Name"
                                field="companyName"
                                errors={state.errors}
                                className="text-red-500 text-sm"
                              />
                            </div>
                          </div>
                          <div className="mb-6">
                            <div className="mx-0 mb-1 sm:mb-4">
                              <input
                                type="text"
                                name="jobTitle"
                                id="jobTitle"
                                placeholder="Job Title"
                                className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                              />
                              <ValidationError
                                prefix="Job Title"
                                field="jobTitle"
                                errors={state.errors}
                                className="text-red-500 text-sm"
                              />
                            </div>
                          </div>
                          <div className="mb-6">
                            <div className="mx-0 mb-1 sm:mb-4">
                              <input
                                type="url"
                                name="website"
                                id="website"
                                placeholder="Website"
                                className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                              />
                              <ValidationError
                                prefix="Website"
                                field="website"
                                errors={state.errors}
                                className="text-red-500 text-sm"
                              />
                            </div>
                          </div>
                          <div className="flex justify-start pt-2">
                            <Button
                              text={"Request Appointment"}
                              type="submit"
                              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50"
                            >
                              {state.submitting
                                ? "Sending..."
                                : "Request Appointment"}
                            </Button>
                          </div>
                        </form>
                      </>
                    )}
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

export default RequestAppointment;
