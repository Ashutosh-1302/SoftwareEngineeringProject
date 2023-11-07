"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const MENU_LIST = [
  {
    idx: 1,
    text: "About",
    href: "#about",
  },
  {
    idx: 2,
    text: "Login",
    href: "/loginPage",
  },
  {
    idx: 3,
    text: "Why Recruit us?",
    href: "#WhyUS",
  },
  {
    idx: 4,
    text: "Process",
    href: "#process",
  },
  {
    idx: 5,
    text: "Contact Us",
    href: "/",
  },
];

const corousalImage = [
  "/images/img1.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
];

function CoverPage() {
  let i = 0;

  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    startSlider();
  }, []);

  const startSlider = () => {
    setInterval(() => {
      handleOnNextClick();
    }, 5000);
  };

  const handleOnNextClick = () => {
    i = (i + 1) % corousalImage.length;
    setCurrentIndex(i);
    // slideRef.current.classList.add('fade-anim');
    slideRef.current?.classList.add("fade-anim");
  };

  const handleOnPrevClick = () => {
    i = (currentIndex + corousalImage.length - 1) % corousalImage.length;
    setCurrentIndex(i);
    slideRef.current.classList.add("fade-anim");
  };
  return (
    <>
      <div className="fixed top-0 z-50">
        <div className="">
          <div className=" mx-auto z-50 bg-[#2c0707]  p-1 flex justify-between w-screen">
            <div className="flex pb-2 pt-2">
              <div className="w-fit h-fit pt-2 mx-1 sm:m-0 sm:pt-0 sm:w-18 sm:h-12 pl-6 pr-1">
                <Image
                  width={50}
                  height={50}
                  alt="NIT Patna"
                  src="/images/logo.png"
                  className="sm:pb-1"
                />
              </div>
              <div className="font-serif font-extrabold text-lg sm:text-2xl p-1 sm:p-2 flex items-center min-h-14 text-white">
                Training and Placement Cell
              </div>
            </div>

            <div className="hidden lg:block h-10 pr-10">
              <div className="flex flex-row items-center pt-4 ">
                {MENU_LIST.map((menu) => (
                  <a href={menu.href} key={menu.idx}>
                    <a className="text-white hover:bg-[#67101075] self-center p-3 rounded-md text-l font-semibold hover:text-yellow-200">
                      {menu.text}
                    </a>
                  </a>
                ))}
              </div>
            </div>
            <div className="flex lg:hidden ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className=" inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <main>
        {/* Corousal start */}
        <div ref={slideRef} className="w-full select-none relative">
          <div className="aspect-w-16 aspect-h-7">
            <img src={corousalImage[currentIndex]} alt="" />
            <div className="absolute top-3/4 ">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150">
                <path
                  fill="#820000"
                  fillOpacity="1"
                  d="M0,64L1440,140L1440,320L0,320Z"
                ></path>
              </svg>
            </div>
            <div className="absolute top-3/4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150">
                <path
                  fill="#ffff"
                  fillOpacity="1"
                  d="M0,64L1445,150L1440,320L0,320Z"
                ></path>
              </svg>
            </div>
          </div>
          <div className="absolute top-1/4 flex w-full justify-between items-center"></div>
          <div className="absolute top-1/2 transform -translate-y-1.2 flex w-full px-3 justify-between items-center">
            <button onClick={handleOnPrevClick} type="button">
              {/* <ChevronDoubleLeftIcon className="w-7 h-7 text-white bg-gray-800 rounded-full p-1" /> */}
            </button>
            <button onClick={handleOnNextClick} type="button">
              {/* <ChevronDoubleRightIcon className="w-7 h-7 text-white bg-gray-800 rounded-full p-1" /> */}
            </button>
          </div>
          <div className="absolute top-3 right-0 bg-yellow-300 px-2 flex font-bold rounded-l-lg p-1 animate-bounce">
            <a className="" href="/Brochure2022_NIT-Patna.pdf " download>
              Download Brochure and Proforma{" "}
            </a>
            {/* <DocumentDownloadIcon className="h-7 w-7 p-1 " /> */}
          </div>
        </div>
      </main>
    </>
  );
}

export default CoverPage;
