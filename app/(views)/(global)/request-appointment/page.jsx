"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Button from "app/components/Button";
import Head from "next/head"; // Import Next.js Head component

const RequestAppointment = () => {
  const [state, handleSubmit] = useForm("xkgrzoyo"); // Replace with your actual Formspree form ID

  // Define the glassmorphism style to be reused
  const glassmorphismStyle = {
    background: "rgba(255, 255, 255, 0)",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
    backdropFilter: "blur(9px)",
    WebkitBackdropFilter: "blur(9px)",
    borderRadius: "10px",
    border: "1px solid rgba(255, 255, 255, 0.18)",
    color: "white",
  };

  // Common input field classes
  const inputClasses =
    "mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 text-white placeholder-white placeholder-opacity-70 caret-white";

  return (
    <>
      <Head>
        <title>Request an Appointment</title>
      </Head>
      <div className="relative min-h-[185vh] md:min-h-[200vh] flex items-center pt-[10vh]">
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
            style={glassmorphismStyle}
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
                <div className="grid md:grid-cols-1 gap-8">
                  {/* Contact Details */}
                  <div className="h-full">
                    <p className="mt-3 px-10 text-lg text-white text-center md:text-left">
                      Please fill out the form below to request an appointment.
                      We will get back to you as soon as possible.
                    </p>
                  </div>

                  {/* Contact Form */}
                  <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                    {state.succeeded ? (
                      <div className="text-black text-2xl text-center font-arial bg-white rounded p-10">
                        Thanks for your message! We&apos;ll get back to you
                        soon.{" "}
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} id="contactForm">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* First Column */}
                          <div>
                            <div className="mx-0 mb-1 sm:mb-4">
                              <input
                                type="text"
                                name="firstName"
                                id="firstName"
                                autoComplete="given-name"
                                placeholder="First Name *"
                                className={inputClasses}
                                required
                                style={glassmorphismStyle}
                              />
                              <ValidationError
                                prefix="First Name"
                                field="firstName"
                                errors={state.errors}
                                className="text-red-500 text-sm"
                              />
                            </div>
                            <div className="mx-0 mb-1 sm:mb-4">
                              <input
                                type="tel"
                                name="telephone"
                                id="telephone"
                                autoComplete="tel"
                                placeholder="Telephone *"
                                className={inputClasses}
                                required
                                style={glassmorphismStyle}
                              />
                              <ValidationError
                                prefix="Telephone"
                                field="telephone"
                                errors={state.errors}
                                className="text-red-500 text-sm"
                              />
                            </div>
                            <div className="mx-0 mb-1 sm:mb-4">
                              <input
                                type="text"
                                name="companyName"
                                id="companyName"
                                placeholder="Company Name *"
                                className={inputClasses}
                                required
                                style={glassmorphismStyle}
                              />
                              <ValidationError
                                prefix="Company Name"
                                field="companyName"
                                errors={state.errors}
                                className="text-red-500 text-sm"
                              />
                            </div>
                            <div className="mx-0 mb-1 sm:mb-4">
                              <input
                                type="text"
                                name="website"
                                id="website"
                                placeholder="Website"
                                className={inputClasses}
                                style={glassmorphismStyle}
                              />
                              <ValidationError
                                prefix="Website"
                                field="website"
                                errors={state.errors}
                                className="text-red-500 text-sm"
                              />
                            </div>
                          </div>

                          {/* Second Column */}
                          <div>
                            <div className="mx-0 mb-1 sm:mb-4">
                              <input
                                type="text"
                                name="lastName"
                                id="lastName"
                                autoComplete="family-name"
                                placeholder="Last Name *"
                                className={inputClasses}
                                required
                                style={glassmorphismStyle}
                              />
                              <ValidationError
                                prefix="Last Name"
                                field="lastName"
                                errors={state.errors}
                                className="text-red-500 text-sm"
                              />
                            </div>
                            <div className="mx-0 mb-1 sm:mb-4">
                              <input
                                type="email"
                                id="email"
                                name="email"
                                autoComplete="email"
                                placeholder="Email *"
                                className={inputClasses}
                                required
                                style={glassmorphismStyle}
                              />
                              <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                                className="text-red-500 text-sm"
                              />
                            </div>
                            <div className="mx-0 mb-1 sm:mb-4">
                              <input
                                type="text"
                                name="jobTitle"
                                id="jobTitle"
                                placeholder="Job Title *"
                                className={inputClasses}
                                required
                                style={glassmorphismStyle}
                              />
                              <ValidationError
                                prefix="Job Title"
                                field="jobTitle"
                                errors={state.errors}
                                className="text-red-500 text-sm"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Services and Products Sections */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                          {/* Services Section */}
                          <div className="bg-gray-100 bg-opacity-10 p-4 rounded-lg">
                            <h3 className="text-white font-semibold mb-4">
                              SERVICES
                            </h3>
                            <div className="space-y-2">
                              <div className="flex items-center">
                                <input
                                  type="checkbox"
                                  id="seo"
                                  name="services"
                                  value="SEO"
                                  className="mr-2"
                                />
                                <label
                                  htmlFor="seo"
                                  className="text-white text-sm"
                                >
                                  SEARCH ENGINE OPTIMIZATION (SEO)
                                </label>
                              </div>
                              <div className="flex items-center">
                                <input
                                  type="checkbox"
                                  id="social"
                                  name="services"
                                  value="SOCIAL"
                                  className="mr-2"
                                />
                                <label
                                  htmlFor="social"
                                  className="text-white text-sm"
                                >
                                  SOCIAL MEDIA OPTIMIZATION
                                </label>
                              </div>
                              <div className="flex items-center">
                                <input
                                  type="checkbox"
                                  id="ppc"
                                  name="services"
                                  value="PPC"
                                  className="mr-2"
                                />
                                <label
                                  htmlFor="ppc"
                                  className="text-white text-sm"
                                >
                                  PAY PER CLICK MARKETING (PPC)
                                </label>
                              </div>
                              <div className="flex items-center">
                                <input
                                  type="checkbox"
                                  id="metasearch"
                                  name="services"
                                  value="METASEARCH"
                                  className="mr-2"
                                />
                                <label
                                  htmlFor="metasearch"
                                  className="text-white text-sm"
                                >
                                  METASEARCH MARKETING
                                </label>
                              </div>
                              <div className="flex items-center">
                                <input
                                  type="checkbox"
                                  id="yandex"
                                  name="services"
                                  value="YANDEX"
                                  className="mr-2"
                                />
                                <label
                                  htmlFor="yandex"
                                  className="text-white text-sm"
                                >
                                  YANDEX ADVERTISING
                                </label>
                              </div>
                              <div className="flex items-center">
                                <input
                                  type="checkbox"
                                  id="digital"
                                  name="services"
                                  value="DIGITAL"
                                  className="mr-2"
                                />
                                <label
                                  htmlFor="digital"
                                  className="text-white text-sm"
                                >
                                  DIGITAL MARKETING CONSULTANCY
                                </label>
                              </div>
                              <div className="flex items-center">
                                <input
                                  type="checkbox"
                                  id="content"
                                  name="services"
                                  value="CONTENT"
                                  className="mr-2"
                                />
                                <label
                                  htmlFor="content"
                                  className="text-white text-sm"
                                >
                                  CONTENT DEVELOPMENT
                                </label>
                              </div>
                              <div className="flex items-center">
                                <input
                                  type="checkbox"
                                  id="webanalytics"
                                  name="services"
                                  value="WEBANALYTICS"
                                  className="mr-2"
                                />
                                <label
                                  htmlFor="webanalytics"
                                  className="text-white text-sm"
                                >
                                  WEB ANALYTICS
                                </label>
                              </div>
                              <div className="flex items-center">
                                <input
                                  type="checkbox"
                                  id="email"
                                  name="services"
                                  value="EMAIL"
                                  className="mr-2"
                                />
                                <label
                                  htmlFor="email"
                                  className="text-white text-sm"
                                >
                                  E-MAIL MARKETING
                                </label>
                              </div>
                              <div className="flex items-center">
                                <input
                                  type="checkbox"
                                  id="factsheet"
                                  name="services"
                                  value="FACTSHEET"
                                  className="mr-2"
                                />
                                <label
                                  htmlFor="factsheet"
                                  className="text-white text-sm"
                                >
                                  HOTEL FACT SHEET DEVELOPMENT
                                </label>
                              </div>
                              <div className="flex items-center">
                                <input
                                  type="checkbox"
                                  id="webdev"
                                  name="services"
                                  value="WEBDEV"
                                  className="mr-2"
                                />
                                <label
                                  htmlFor="webdev"
                                  className="text-white text-sm"
                                >
                                  WEB DEVELOPMENT
                                </label>
                              </div>
                              <div className="flex items-center">
                                <input
                                  type="checkbox"
                                  id="hospitality"
                                  name="services"
                                  value="HOSPITALITY"
                                  className="mr-2"
                                />
                                <label
                                  htmlFor="hospitality"
                                  className="text-white text-sm"
                                >
                                  HOSPITALITY MARKETING
                                </label>
                              </div>
                              <div className="flex items-center">
                                <input
                                  type="checkbox"
                                  id="othersvc"
                                  name="services"
                                  value="OTHER"
                                  className="mr-2"
                                />
                                <label
                                  htmlFor="othersvc"
                                  className="text-white text-sm"
                                >
                                  OTHER
                                </label>
                              </div>
                            </div>
                          </div>

                          {/* Products Section */}
                          <div className="bg-gray-100 bg-opacity-10 p-4 rounded-lg">
                            <h3 className="text-white font-semibold mb-4">
                              PRODUCTS
                            </h3>
                            <div className="space-y-2">
                              <div className="flex items-center">
                                <input
                                  type="checkbox"
                                  id="hotel"
                                  name="products"
                                  value="HOTEL"
                                  className="mr-2"
                                />
                                <label
                                  htmlFor="hotel"
                                  className="text-white text-sm"
                                >
                                  ONLINE HOTEL VOUCHER SYSTEM
                                </label>
                              </div>
                              <div className="flex items-center">
                                <input
                                  type="checkbox"
                                  id="ecommerce"
                                  name="products"
                                  value="ECOMMERCE"
                                  className="mr-2"
                                />
                                <label
                                  htmlFor="ecommerce"
                                  className="text-white text-sm"
                                >
                                  SHOPPING CART / E-COMMERCE STORE
                                </label>
                              </div>
                              <div className="flex items-center">
                                <input
                                  type="checkbox"
                                  id="invoicing"
                                  name="products"
                                  value="INVOICING"
                                  className="mr-2"
                                />
                                <label
                                  htmlFor="invoicing"
                                  className="text-white text-sm"
                                >
                                  ONLINE PAYMENTS / INVOICING SYSTEM
                                </label>
                              </div>

                              <div className="flex items-center">
                                <input
                                  type="checkbox"
                                  id="hospitalityeye"
                                  name="products"
                                  value="HOSPITALITYEYE"
                                  className="mr-2"
                                />
                                <label
                                  htmlFor="hospitalityeye"
                                  className="text-white text-sm"
                                >
                                  HOSPITALITY
                                </label>
                              </div>
                              <div className="flex items-center">
                                <input
                                  type="checkbox"
                                  id="otherprod"
                                  name="products"
                                  value="OTHER"
                                  className="mr-2"
                                />
                                <label
                                  htmlFor="otherprod"
                                  className="text-white text-sm"
                                >
                                  OTHER
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Comments Section */}
                        <div className="mt-6">
                          <textarea
                            id="comments"
                            name="comments"
                            rows="6"
                            placeholder="Your message"
                            className={inputClasses}
                            required
                            style={glassmorphismStyle}
                          ></textarea>
                          <ValidationError
                            prefix="Comments"
                            field="comments"
                            errors={state.errors}
                            className="text-red-500 text-sm"
                          />
                        </div>

                        {/* reCAPTCHA and Submit */}
                        <div className="mt-6">
                          <div className="mb-4">
                            <p className="text-white text-sm">
                              * Required Fields
                            </p>
                          </div>

                          <div className="flex justify-start pt-2">
                            <Button
                              text={"SUBMIT"}
                              type="submit"
                              className="bg-red-500 text-white py-2 px-10 rounded hover:bg-red-600 transition-colors duration-300 disabled:opacity-50"
                            >
                              {state.submitting ? "Sending..." : "SUBMIT"}
                            </Button>
                          </div>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="pb-16"></div>
      </div>
    </>
  );
};

export default RequestAppointment;
