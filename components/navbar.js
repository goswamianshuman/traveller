import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import { Disclosure } from "@headlessui/react";
import { useState } from "react";

export default function Navbar() {
  const navigation = ["Host", "Features", "Pricing", "Company", "Blog"];

  const [navbar, setNavbar] = useState(false);

  const hideNav = () => {
    if (window.scrollY >= 75) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", hideNav);
  }

  return (
    <div className={navbar ? "Navbar active" : "Navbar"}>
      <nav className=" container relative flex flex-wrap items-center justify-between py-8 md:py-6 lg:py-4 max-w-7xl mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <a className="flex items-center space-x-2 text-2xl font-medium text-[#6e00fe]">
                    <span>👋🏻 heyllo</span>
                  </a>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-black rounded-md lg:hidden hover:text-voilet-500 focus:text-voilet-500 focus:outline-none dark:text-white dark:hover:text-voilet-500 dark:focus:text-voilet-500"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full transition-all ease-out delay-300 max-w-full mx-auto my-5 lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <Link key={index} href="/">
                        <a className="w-full px-4 py-2 text-center text-trueGray-900 rounded-md dark:text-white hover:bg-voilet-500/20 focus:bg-voilet-500/20 transition-colors ease-out delay-200 focus:outline-none dark:hover:bg-voilet-500/20">
                          {item}
                        </a>
                      </Link>
                    ))}

                    <a className="w-full px-6 py-2 mt-3 text-center uppercase text-white bg-voilet-600 hover:bg-voilet-700 transition-colors ease-out delay-200  rounded-md lg:ml-5">
                      Get Started
                    </a>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden  text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item " key={index}>
                <Link href="/">
                  <a className="inline-block px-4 py-2 text-base font-extralight text-trueGray-900 no-underline rounded-md dark:text-white  focus:text-voilet-500 focus:outline-none dark:hover:text-voilet-500 hover:text-voilet-600 ">
                    {menu}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <Link href="/">
            <a className="px-6 py-2 bg-voilet-500 text-white  rounded-md md:ml-5">
              Get Started
            </a>
          </Link>

          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
}
