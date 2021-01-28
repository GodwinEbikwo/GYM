import React, { useState, useEffect } from "react";
import NC from "./NC";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  const navbarStyles = {
    position: "sticky",
    height: "80px",
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.5)",
    textAlign: "center",
    transition: "top 0.4s",
    backdropFilter: " saturate(180%) blur(8px)",
  };

  return (
    <div
      style={{ ...navbarStyles, top: visible ? "0" : "-60px", zIndex: "999" }}
    >
      <NC />
    </div>
  );
};

export default Navbar;

export function debounce(func, wait, immediate) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
