"use client";
import React, { useState, useRef, useRouter } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { HoveredLink, Menu, MenuItem, ProductItem } from "app/components/Menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
export default function NavbarMain() {
  const { scrollY } = useScroll();
  const [scrollingDown, setScrollingDown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastY = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const delta = latest - lastY.current;
    if (Math.abs(delta) > 5) {
      setScrollingDown(delta > 0);
    }
    lastY.current = latest;
  });

  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar
        className={cn("top-0", scrollingDown ? "hidden" : "visible")}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
    </div>
  );
}

function Navbar({ className, isMobileMenuOpen, setIsMobileMenuOpen }) {
  const [active, setActive] = useState(null);

  const handleMobileMenuItemClick = () => {
    setIsMobileMenuOpen(false);
    setActive(null);
  };

  return (
    <>
      {/* Desktop Menu */}
      <div
        className={cn(
          "fixed top-10 inset-x-0 shadow-lg mx-auto z-50 hidden md:block ",
          className
        )}
      >
        <Menu setActive={setActive}>
          <MenuItem active={active} href="/" item="Home" />
          <MenuItem href="/about" active={active} item="About" />

          <MenuItem
            setActive={setActive}
            href="/services"
            active={active}
            item="Services"
          >
            <div className="text-sm grid grid-cols-2 gap-6 p-4 max-w-4xl mx-auto">
              <ProductItem
                title="Finance & Accounting"
                description="Discover our finance and accounting services."
                href="/services/finance-and-accounting"
                src="/serv/financeAcc.jpg"
              >
                <div className="flex flex-col space-y-2 ">
                  <Link
                    href="/services/finance-and-accounting/accounts-payable/"
                    className="hover:text-blue-500"
                  >
                    Accounts Payable
                  </Link>
                  <Link
                    href="/services/finance-and-accounting/invoice-to-cash/"
                    className="hover:text-blue-500"
                  >
                    Invoice to Cash
                  </Link>
                  <Link
                    href="/services/finance-and-accounting/record-to-report/"
                    className="hover:text-blue-500"
                  >
                    Record to Report
                  </Link>
                  <Link
                    href="/services/finance-and-accounting/enterprise-performance-systems/"
                    className="hover:text-blue-500"
                  >
                    Enterprise Performance Management
                  </Link>
                  <Link
                    href="/services/finance-and-accounting/finance-and-accounts-consulting/"
                    className="hover:text-blue-500"
                  >
                    Finance & Accounting Consulting
                  </Link>
                </div>
              </ProductItem>

              <ProductItem
                title="Technology"
                href="/services/technology"
                src="/serv/tech.jpg"
                description="Discover our technology services."
              />
              <ProductItem
                title="Consultancy & Projects"
                href="/services/consultancy-and-projects"
                src="/serv/projects.jpg"
                description="Discover our consultancy & projects services."
              ></ProductItem>
              <ProductItem
                title="Australian Accounting & Financial Services"
                href="/services/australian-finance-and-accounting"
                src="/serv/aus.jpg"
                description="Discover our Australian accounting & financial Services."
              >
                <div className="flex flex-col space-y-2">
                  <Link
                    href="/services/finance-and-accounting/accounts-payable/"
                    className="hover:text-blue-500"
                  >
                    Accounts Payable
                  </Link>
                  <Link
                    href="/services/finance-and-accounting/invoice-to-cash/"
                    className="hover:text-blue-500"
                  >
                    Invoice to Cash
                  </Link>
                  <Link
                    href="/services/finance-and-accounting/record-to-report/"
                    className="hover:text-blue-500"
                  >
                    Record to Report
                  </Link>
                  <Link
                    href="/services/finance-and-accounting/enterprise-performance-systems/"
                    className="hover:text-blue-500"
                  >
                    Enterprise Performance Management
                  </Link>
                  <Link
                    href="/services/finance-and-accounting/finance-and-accounts-consulting/"
                    className="hover:text-blue-500"
                  >
                    Finance & Accounting Consulting
                  </Link>
                </div>
              </ProductItem>

              <ProductItem
                title="Admin Support"
                href="/services/admin-support"
                src="/serv/admin.jpg"
                description="Discover our admin support services."
              />
              <ProductItem
                title="Digital Marketing"
                href="/services/digital-marketing"
                src="/serv/DigitalMarketing.jpg"
                description="Discover our digital marketing services."
              />
              <ProductItem
                title="Human Resources"
                href="/services/human-resources"
                src="/serv/HumanResources.jpg"
                description="Discover our human resources services."
              />
              <ProductItem
                title="Remote Teams"
                href="/services/remote-teams"
                src="/serv/remote.jpg"
                description="Discover our remote teams services."
              />
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Careers">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink
                href="/join-us"
                setActive={setActive}
                active={active}
                item="Careers"
              >
                Join Us
              </HoveredLink>
              <HoveredLink href="/life-at-hci">Life at HCI</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem href="/resources" active={active} item="Resources" />
        </Menu>
      </div>

      {/* Mobile Menu Hamburger with Side Logo */}
      <div
        className={cn(
          "fixed top-10 inset-x-0 z-50 md:hidden flex items-center px-4 bg-white shadow-lg ",
          className
        )}
      >
        <div className="w-24 h-20 ">
          <a href="/" className="inline-block">
            <img
              src="/logo/2.png"
              alt="Company Logo"
              className="h-20  w-24 object-contain" // Adjusted height
            />
          </a>
        </div>
        <div className="flex-grow"></div>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="z-60 relative"
        >
          <div className="w-16 h-12 bg-white">
            {" "}
            {/* Adjusted height */}
            <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                  isMobileMenuOpen
                    ? "rotate-45 translate-y-0"
                    : "-translate-y-1.5"
                }`}
              ></span>
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                  isMobileMenuOpen
                    ? "-rotate-45 translate-y-0"
                    : "translate-y-1.5"
                }`}
              ></span>
            </div>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-white z-40 md:hidden overflow-y-auto"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="flex flex-col space-y-6 p-6 mt-20"
            onClick={(e) => e.stopPropagation()}
          >
            <MobileSectionAccordion
              title="Home"
              href="/"
              onItemClick={handleMobileMenuItemClick}
            />
            <MobileSectionAccordion
              title="About"
              href="/about"
              onItemClick={handleMobileMenuItemClick}
            />

            <MobileSectionAccordion
              title="Services"
              href="/services"
              onItemClick={handleMobileMenuItemClick}
            >
              <div className="space-y-4">
                <ProductItemMobile
                  title="All Services"
                  href="/services"
                  description="Discover all our services."
                />
                <ProductItemMobile
                  title="Finance & Accounting"
                  href="/services/finance-and-accounting"
                  description="Discover our finance and accounting services."
                />
                <ProductItemMobile
                  title="Technology"
                  href="/services/technology"
                  description="Discover our technology services."
                />
                <ProductItemMobile
                  title="Consultancy & Projects"
                  href="/services/consultancy-and-projects"
                  description="Discover our consultancy & projects services."
                />
                <ProductItemMobile
                  title="Australian Accounting & Financial Services"
                  href="/services/australian-finance-and-accounting"
                  description="Discover our Australian accounting & financial Services."
                />
                <ProductItemMobile
                  title="Admin Support"
                  href="/services/admin-support"
                  description="Discover our admin support services."
                />
                <ProductItemMobile
                  title="Digital Marketing"
                  href="/services/digital-marketing"
                  description="Discover our digital marketing services."
                />
                <ProductItemMobile
                  title="Human Resources"
                  href="/services/human-resources"
                  description="Discover our human resources services."
                />
                <ProductItemMobile
                  title="Remote Teams"
                  href="/services/remote-teams"
                  description="Discover our remote teams services."
                />
              </div>
            </MobileSectionAccordion>

            <MobileSectionAccordion
              title="Careers"
              onItemClick={handleMobileMenuItemClick}
            >
              <ProductItemMobile
                title="Join Us"
                href="/join-us"
              ></ProductItemMobile>
              <ProductItemMobile title="Life at HCI" href="/life-at-hci">
                Life at HCI
              </ProductItemMobile>
            </MobileSectionAccordion>

            <MobileSectionAccordion
              title="Contact"
              href="/contact"
              onItemClick={handleMobileMenuItemClick}
            />
          </div>
        </div>
      )}
    </>
  );
}

function MobileSectionAccordion({ title, children, href, onItemClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (!children) {
      window.location.href = href;
      onItemClick();
    } else {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="border-b pb-2">
      <button
        onClick={handleClick}
        className="w-full text-left font-semibold text-xl flex justify-between items-center"
      >
        {title}
        {children && <span>{isOpen ? "−" : "+"}</span>}
      </button>
      {isOpen && children && (
        <div
          className="mt-4 space-y-3"
          onClick={() => {
            setIsOpen(false);
            onItemClick();
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}

function ProductItemMobile({ title, href, description }) {
  return (
    <a
      href={href}
      className="block p-3 hover:bg-gray-100 rounded-lg transition-colors"
    >
      <div className="font-medium text-lg">{title}</div>
      <div className="text-sm text-gray-600">{description}</div>
    </a>
  );
}
