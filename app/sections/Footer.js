const Footer = () => {
  return (
    <footer className="bg-[#000000]">
      <div className=" mx-auto p-0 md:p-8 xl:px-0">
        <div className="mx-auto max-w-7xl px-6 pb-10 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div>
                <a href="/">
                  <div className="flex items-center  space-x-2 text-2xl font-medium">
                    <span>
                      <img
                        src="/hci-white.png"
                        alt="AI Logo"
                        className="w-60 ml-[-1.5rem] mb-[-1.5rem] "
                      />
                    </span>
                  </div>
                </a>
              </div>
              <div className="max-w-md pr-16 text-md text-gray-400">
                Tailored solutions for a transforming world.{" "}
              </div>
              <div className="flex space-x-2">
                <a
                  href=""
                  target="_blank"
                  className="text-gray-200 hover:text-gray-200"
                >
                  <span className="sr-only">Linkedin</span>
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-8 col-span-2 mt-0">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                <div>
                  <h3 className="text-md font-semibold leading-6 text-white">
                    Our Solutions
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <a
                        href="/services/finance-and-accounting"
                        className="text-md leading-6 text-gray-300 hover:text-gray-50"
                      >
                        Finance and Accounting
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services/technology"
                        className="text-md leading-6 text-gray-300 hover:text-gray-50"
                      >
                        Technology
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services/consultancy-and-projects"
                        className="text-md leading-6 text-gray-300 hover:text-gray-50"
                      >
                        Consulting and Projects
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services/australian-finance-and-accounting"
                        className="text-md leading-6 text-gray-300 hover:text-gray-50"
                      >
                        Australian Accounting and Financial Services
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services/admin-support"
                        className="text-md leading-6 text-gray-300 hover:text-gray-50"
                      >
                        Admin Support
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services/digital-marketing"
                        className="text-md leading-6 text-gray-300 hover:text-gray-50"
                      >
                        Digital Marketing
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services/remote-teams"
                        className="text-md leading-6 text-gray-300 hover:text-gray-50"
                      >
                        Human Resources
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="mt-10 md:mt-0">
                  <h3 className="text-md font-semibold leading-6 text-white">
                    Company
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <a
                        href="/about"
                        className="text-md leading-6 text-gray-300 hover:text-gray-50"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="/join-us"
                        className="text-md leading-6 text-gray-300 hover:text-gray-50"
                      >
                        Careers
                      </a>
                    </li>
                    <li>
                      <a
                        href="/contact"
                        className="text-md leading-6 text-gray-300 hover:text-gray-50"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <div>
                  <h3 className="text-md font-semibold leading-6 text-white">
                    Resources
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <a
                        href="/pricing"
                        className="text-md leading-6 text-gray-300 hover:text-gray-50"
                      >
                        Newsletters
                      </a>
                    </li>
                    <li>
                      <a
                        href="/blog"
                        className="text-md leading-6 text-gray-300 hover:text-gray-50"
                      >
                        Case studies
                      </a>
                    </li>
                    <li>
                      <a
                        href="/casestudies"
                        className="text-md leading-6 text-gray-300 hover:text-gray-50"
                      >
                        Articles
                      </a>
                    </li>
                    <li>
                      <a
                        href="/terms"
                        className="text-md leading-6 text-gray-300 hover:text-gray-50"
                      >
                        Blogs
                      </a>
                    </li>
                    <li>
                      <a
                        href="/privacy"
                        className="text-md leading-6 text-gray-300 hover:text-gray-50"
                      >
                        Policies
                      </a>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
          <div className="mt-16 border-t border-gray-100/30 pt-8 sm:mt-20 lg:mt-24">
            <div className="text-md text-center text-white mx-auto">
              Copyright © 2024. All rights reserved. <br></br>
            </div>
            <div className="text-md text-center text-sm pt-2 text-gray-400 mx-auto">
              This website and its content are the property of H Connect
              International and are protected by applicable copyright laws.
              Unauthorized use, reproduction, or distribution is strictly
              prohibited. By accessing this site, you agree to our Terms of Use,
              Privacy Policy, and Data Protection Agreement (DPA). H Connect
              International is committed to safeguarding your personal data in
              compliance with applicable data protection regulations. For more
              information, please refer to our policy documents or contact us
              directly.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
