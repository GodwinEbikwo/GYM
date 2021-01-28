/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { SmoothScrollContext } from "@/utils/SmoothScroll";

export default function NC() {
  const { scroll } = useContext(SmoothScrollContext);

  const goToAbout = (event) => {
    event.preventDefault();
    scroll && scroll.scrollTo("#about");
  };
  const goToServices = (event) => {
    event.preventDefault();
    scroll && scroll.scrollTo("#services");
  };
  const goToWork = (event) => {
    event.preventDefault();
    scroll && scroll.scrollTo("#work");
  };

  const goToFAQ = (event) => {
    event.preventDefault();
    scroll && scroll.scrollTo("#faq");
  };
  return (
    <div className="dheader">
      <nav className="container container--pall flex flex-jc-sb flex-ai-c">
        <Link href="/">
          <a className="dheader__logo">
            <Image src="/logo.svg" width={141} height={35} alt="titan-logo" />
          </a>
        </Link>

        <div className="dheader__links hide-for-mobile">
          <a href="#about" onClick={goToAbout}>
            About
          </a>
          <a href="#services" onClick={goToServices}>
            Services
          </a>
          <a href="#work" onClick={goToWork}>
            Contact
          </a>
          <a href="#contact" onClick={goToFAQ}>
            FAQ's
          </a>
          <a href="#contact" className="btn">
            Download App
          </a>
        </div>
      </nav>
    </div>
  );
}
