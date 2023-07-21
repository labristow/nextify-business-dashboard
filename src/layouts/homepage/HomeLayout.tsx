import React, { useEffect } from "react";
import Partners from "./Partners";
import Footer from "./Footer";
import HomeNavbar from "@/components/navbar/HomeNavbar";
import Lenis from "@studio-freight/lenis";
import SocialTestimonials from "./SocialTestimonials";

function HomeLayout({ children }: { children: JSX.Element }) {
  useEffect(() => {
    document.querySelector("body")?.classList.add("custom__scrollbar");
    const lenis = new Lenis({
      duration: 3,
    });

    // lenis.on("scroll", (e) => {
    //   console.log(e);
    // });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <React.Fragment>
      <HomeNavbar />
      {children}
      <Partners />
      <SocialTestimonials />
      <Footer />
    </React.Fragment>
  );
}

export default HomeLayout;
