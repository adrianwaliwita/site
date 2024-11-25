"use client";

import Button from "app/components/Button";
import Container from "../../sections/Container";
import GrowWithoutLimits from "../../components/GrowWithoutLimits";

const Contact = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <img
        src="/blue-waves-abstract.jpg"
        decoding="async"
        data-nimg="1"
        className="w-full h-full object-cover absolute inset-0 pointer-events-none"
        loading="lazy"
        style={{ color: "transparent" }}
      />
      <div className="  relative max-w-7xl mx-auto p-16  ">
        <section
          className="rounded-xl"
          id="contact"
          style={{
            background: "rgba(255, 255, 255, 0)",
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
            backdropFilter: "blur(9px)",
            WebkitBackdropFilter: "blur(9px)", // Safari compatibility
            borderRadius: "10px",
            border: "1px solid rgba(255, 255, 255, 0.18)",
          }}
        >
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            {/* Contact Heading */}
            <div className="mb-4 text-center">
              <h2 className="text-white font-GTAmerica text-4xl sm:text-5xl md:text-[6vw] font-bold">
                GET IN <span className="text-white">TOUCH</span>
              </h2>
              <div className="w-40 h-[2px] bg-white mt-8 mx-auto"></div>
            </div>

            {/* Contact Content */}
            <div className="flex items-stretch justify-center">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Contact Details */}
                <div className="h-full pr-6">
                  <p className="mt-3 mb-12 text-lg text-white ">
                    Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut
                    scelerisque sagittis ante, ac tincidunt sem venenatis ut.
                  </p>
                  <ul className="mb-6 md:mb-0 space-y-6 md:space-y-4">
                    <li className="flex items-start space-x-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-white">
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
                      </div>
                      <div className="ml-4 mb-4">
                        <h3 className="mb-2 text-lg font-medium leading-6 text-white">
                          Our Address
                        </h3>
                        <p className="text-white">
                          1230 Maecenas Street Donec Road
                        </p>
                        <p className="text-white">New York, USA</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded text-white">
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
                          <path d="M15 7a2 2 0 0 1 2 2"></path>
                          <path d="M15 3a6 6 0 0 1 6 6"></path>
                        </svg>
                      </div>
                      <div className="ml-4 mb-4">
                        <h3 className="mb-2 text-lg font-medium leading-6 text-white">
                          Contact
                        </h3>
                        <p className="text-white">Mobile: +1 (123) 456-7890</p>
                        <p className="text-white">Mail: tailnext@gmail.com</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
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
                          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                          <path d="M12 7v5l3 3"></path>
                        </svg>
                      </div>
                      <div className="ml-4 mb-4">
                        <h3 className="mb-2 text-lg font-medium leading-6 text-white">
                          Working hours
                        </h3>
                        <p className="text-white">
                          Monday - Friday: 08:00 - 17:00
                        </p>
                        <p className="text-white">
                          Saturday &amp; Sunday: 08:00 - 12:00
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Contact Form */}
                <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                  <h2 className="mb-4 text-3xl tracking-wide font-bold text-white font-GTAmerica">
                    Ready to Get Started?
                  </h2>
                  <form id="contactForm">
                    <div className="mb-6">
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label
                          htmlFor="name"
                          className="pb-1 text-xs uppercase tracking-wider"
                        ></label>
                        <input
                          type="text"
                          id="name"
                          autoComplete="given-name"
                          placeholder="Your name"
                          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                        />
                      </div>
                    </div>
                    <div className="mb-6">
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label
                          htmlFor="email"
                          className="pb-1 text-xs uppercase tracking-wider"
                        ></label>
                        <input
                          type="email"
                          id="email"
                          autoComplete="email"
                          placeholder="Your email"
                          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                        />
                      </div>
                    </div>
                    <div className="mb-6">
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label
                          htmlFor="message"
                          className="pb-1 text-xs uppercase tracking-wider"
                        ></label>
                        <textarea
                          id="message"
                          rows="5"
                          placeholder="Your message"
                          className="w-full rounded-md border border-gray-400 p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                        ></textarea>
                      </div>
                    </div>
                    <div className="flex justify-start pt-2">
                      <Button />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Add padding to ensure no overlap */}
      <div className="pb-16"></div>
    </div>
  );
};

export default Contact;
