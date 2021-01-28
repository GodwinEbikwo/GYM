import React from "react";
// import Image from "next/image";

export default function Services() {
  return (
    <section className="Services" data-scroll-section>
      <div className="container container--pall">
        <div className="services-container">
          <div className="service">
            <span>Services</span>
            <h1>What we offer</h1>
            <ol className="list">
              <li>Group fitness clasess</li>
              <li>Personal Trainer Sessions</li>
              <li>Indoor pool</li>
              <li>Steam room and sauna</li>
              <li>Basketball Court</li>
              <li>Open 24/7</li>
            </ol>

            <div style={{ marginTop: "1.5rem", marginBottom: "1.5rem" }}>
              <a href="/" className="btn">
                find out more →
              </a>
            </div>
          </div>

          <div className="service-img">
            <img
              src="/hero.jpg"
              // width={640}
              // height={426}
              alt="services images"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
