import { SVGS } from "@/assets/SVGS";
import axios from "axios";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import comments from "@/mock/comments.json";
import HeaderOne from "./HeaderOne";

const style = {
  // display: "flex",
  width: "100%",
  // height: "100%",
  maxWidth: "100%",
  maxHeight: "100%",
  // placeItems: "center",
  // margin: "0px",
  // padding: "16px",
  listStyleType: "none",
  opacity: 1,
  overflow: "hidden",
  WebkitMaskImage:
    "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)",
};
interface Comment {
  name: string;
  username: string;
  message: string;
}

function SocialTestimonials() {
  const commentSectionRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [testimonials, setTestimonials] = useState<Comment[]>([]);
  useEffect(() => {
    setWidth(window.innerWidth);
    setTestimonials(comments);
  }, []);

  useEffect(() => {
    // const row = document.querySelector(".comment-section");
    const commentSection = commentSectionRef.current;
    if (commentSection) {
      let duration;
      if (width <= 380) {
        duration = 8;
      } else {
        duration = 45;
      }
      var tl = gsap.timeline();
      tl.fromTo(
        commentSection,
        {
          xPercent: 0.5,
        },
        {
          ease: "none",
          duration: duration,
          xPercent: -100,
          // repeat: -1,
        }
      );
      commentSection.addEventListener("mouseover", () => {
        tl.pause();
      });
      commentSection.addEventListener("mouseout", () => {
        tl.play();
      });
    }
  }, []);

  return (
    <div className="w-full h-auto py-20 lg:py-0 lg:h-[80vh] flex flex-col justify-center items-center bg-black">
      <HeaderOne
        title="Testimonials"
        subTitle="Here are what our patnered businesses have to say"
      />
      <div
        style={style}
        className="comment-card-container w-full flex justify-start items-start gap-x-8 px-44_ pt-20"
      >
        <div ref={commentSectionRef} className="comment-section flex-shrink-0 w-full flex justify-start items-start gap-x-8">
          {Array(2)
            .fill("")
            .map((__: any, index: number) => (
              <div className="flex justify-start items-start gap-x-8">
                {testimonials.map(
                  ({ name, username, message }: Comment, id: number) => (
                    <div
                      key={id}
                      className={`group comment-car bg-gray-800 hover:bg-gray-200 duration-500 flex flex-col justify-between flex-shrink-0 w-[480px] h-[250px] shadow px-8 py-10 rounded-xl`}
                    >
                      <div className="message">
                        <p className="text-lg text-gray-300 group-hover:text-gray-600">
                          {message}
                        </p>
                      </div>
                      <div className="author-details flex items-center justify-between">
                        <div className="profile flex items-center gap-x-2">
                          <div className="w-12 h-12 text-gray-300 rounded-full bg-gray-600 group-hover:bg-gray-400"></div>
                          <div className="details">
                            <h5 className="font-semibold text-[16px] text-gray-500">
                              {name}
                            </h5>
                            <p className="-mt-1 text-sm text-gray-500">
                              @{username}
                            </p>
                          </div>
                        </div>
                        <div className="rounded-full">
                          <SVGS.TwitterIcon />
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default SocialTestimonials;
