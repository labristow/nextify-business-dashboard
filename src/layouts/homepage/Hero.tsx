import { Power3, gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import HeroImg1 from "@/assets/images/login-hero-hero.avif";
import HeroImg2 from "@/assets/images/register-bg-image.jpg";
import { splitWordsToCharacters } from "@/utils/splitWords";
import CaretRightArrow from "@/components/arrow/CaretRightArrow";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const titleRef = useRef<any>();
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      "#title-split",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.04,
        ease: Power3.easeInOut,
      }
    ).fromTo(
      "#subtitle-text",
      {
        visibility: "hidden",
        opacity: 0,
        y: 50,
      },
      {
        visibility: "visible",
        opacity: 1,
        y: 0,
        stagger: 0.02,
      },
      0.4
    );
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-images-container",
        start: "top 70%",
        end: "top 30%",
        // scrub: 3,
      },
    });
    tl.fromTo(
      "#hero-image-1-cover",
      {
        width: "100%",
      },
      {
        width: "0%",
        duration: 1.5,
        ease: "none",
      }
    )
      .fromTo(
        "#hero-image-1",
        {
          scaleX: "1.1",
        },
        {
          scaleX: "1",
          ease: "none",
          duration: 1.5,
        },
        0
      )
      .fromTo(
        "#hero-image-2-cover",
        {
          width: "100%",
        },
        {
          width: "0%",
          duration: 1.5,
          ease: "none",
        },
        0
      )
      .fromTo(
        "#hero-image-2",
        {
          scaleX: "1.1",
        },
        {
          scaleX: "1",
          ease: "none",
          duration: 1.5,
        },
        0
      );
  }, []);

  return (
    <React.Fragment>
      <div className="w-full h-screen flex flex-col justify-center">
        <div className="px-5 lg:px-32 pt-16">
          <h2
            ref={titleRef}
            className="text-3xl lg:text-8xl font-secondary font-semibold"
          >
            <div className="h-auto lg:h-24 overflow-hidden flex items-center">
              {splitWordsToCharacters("Launch")}
            </div>
            <div className="h-auto lg:h-24 overflow-hidden flex items-center text-orange-400">
              {splitWordsToCharacters("Your Online Store")}
            </div>
            <div className="h-auto lg:h-28 overflow-hidden flex items-center">
              {splitWordsToCharacters("in Just 5 Minutes.")}
            </div>
          </h2>
          <h4 className="text-2xl my-5">
            <div className="hidden lg:flex items-center">
              <span id="subtitle-text" className="block">
                {splitWordsToCharacters(
                  "Unlock the exciting world of ecommerce by launching your online",
                  "subtitle-text"
                )}
              </span>
            </div>
            <div className="hidden lg:flex items-center">
              <span id="subtitle-text" className="block">
                {splitWordsToCharacters(
                  "store effortlessly in just 5 minutes.",
                  "subtitle-text"
                )}
              </span>
            </div>
            <span className="flex lg:hidden">
              Unlock the exciting world of ecommerce by launching your online,
              store effortlessly in just 5 minutes.
            </span>
          </h4>

          <div className="flex flex-wrap lg:flex-nowrap items-center gap-2 lg:gap-5">
            <Link href={"/register"} className="w-full lg:w-auto">
              <button className="w-full lg:w-auto h-[70px] px-8 group rounded-xl font-medium bg-primary-blue text-white flex items-center justify-center">
                Get started now <CaretRightArrow color="white" />
              </button>
            </Link>
            <Link href={"/login"} className="w-full lg:w-auto">
              <button className="w-full lg:w-auto h-[70px] px-8 group rounded-xl font-medium bg-gray-200 text-gray-900 flex items-center justify-center">
                Explore more <CaretRightArrow />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full lg:min-h-screen hero-images-container">
        <div className="grid px-5 lg:grid-cols-11 gap-10">
          <div className="lg:col-span-6">
            <div className="w-full overflow-hidden hero-image-1-wrapper relative">
              <div
                id="hero-image-1-cover"
                className="w-full h-full bg-white absolute z-20 right-0 top-0"
              ></div>
              <Image
                src={HeroImg1}
                alt=""
                id="hero-image-1"
                className="relative z-10"
              />
            </div>
            {/* Embrace limitless possibilities as our platform empowers
              businesses to swiftly establish online stores within minutes. Say
              goodbye to complexities and hello to seamless setup. Witness your
              business soar with us. */}
          </div>
          <div className="lg:col-span-5 lg:h-[100vh]">
            <h5 className="text-xl w-full lg:pr-24 text-justify leading-8 ...">
              Start anywhere and scale your business to the rest of the world
              with our robust solution that help improve your sales and
              credibility to customers, with ecommerce website you can easily
              customise to suit your brand.
            </h5>
            <div className="w-full hidden lg:block mt-12 overflow-hidden hero-image-2-wrapper relative">
              <div
                id="hero-image-2-cover"
                className="w-full h-full bg-white absolute z-20 right-0 top-0"
              ></div>
              <Image
                src={HeroImg2}
                alt=""
                id="hero-image-2"
                className="relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Hero;
