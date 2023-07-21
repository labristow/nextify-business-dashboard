import { SVGS } from "@/assets/SVGS";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { useEffect, useState } from "react";

function Footer() {
  gsap.registerPlugin(ScrollTrigger);
  const [year] = useState(new Date().getFullYear());
  useEffect(() => {
    const bigText = document.querySelector("#footer-big-text");
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: bigText,
        start: "top bottom",
        scrub: 2,
      },
    });
    tl.fromTo(
      bigText,
      { x: 100 },
      {
        x: -250,
        duration: 3,
      }
    );
  }, []);

  return (
    <footer className="w-full min-h-[80vh] bg-gray-950">
      <div className="footer-top">
        <div className="h-[40vh] w-full flex items-center justify-center">
          <div className="w-full px-5 lg:px-0 lg:w-[400px] flex flex-col items-center">
            <p className="text-sm text-white">We welcome you to join us.</p>
            <h5 className="text-4xl font-semibold text-white">
              Start your journey
            </h5>
            <div className="w-full flex flex-col items-center gap-5 my-5">
              <input
                placeholder="Enter your email..."
                type="email"
                className="bg-white w-full px-4 outline-none border border-transparent focus:border-gray-300 duration-500 bg-opacity-10 focus:bg-opacity-20 text-white h-14 lg:h-12 rounded-xl"
              />
              <button className="bg-gray-300 flex-shrink-0 hover:bg-white bg-opacity- text-sm h-12 rounded-xl px-4 duration-500">
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
        <div className="w-full px-5 lg:px-20 py-10 flex justify-center border-t border-gray-900">
          <div className="w-[600px] flex flex-col items-center">
            <h3 className="text-white text-center text-2xl lg:text-3xl font-tertiary font-light">
              Do you have a question? or you need more information on how we can
              help,contact us:
            </h3>

            <h3 className="text-white text-2xl mt-10 flex items-center font-tertiary font-light">
              hello@nextify.shop{" "}
              <span className="rotate-[225deg] block">
                <SVGS.LinkArrowIcon />
              </span>
            </h3>
            <h3 className="text-white text-2xl mt-0 flex items-center font-tertiary font-light">
              +234 (0) 814 833 1698
            </h3>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-10 px-5 lg:px-0">
        <div className="footer-base w-full lg:w-[600px] rounded-xl lg:rounded-full bg-gray-900 min-h-20 lg:h-20 flex flex-col lg:flex-row items-center justify-between px-10 py-5 lg:py-0 border-t border-gray-900">
          <p className="text-lg font-thin text-gray-200 hover:text-white duration-500 cursor-pointer">
            © All rights reserved {year}
          </p>
          <p className="text-lg font-thin text-gray-200 hover:text-white duration-500 cursor-pointer flex items-center gap-x-5">
            <span>Instagram</span> <span>Facebook</span> <span>Twitter</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
