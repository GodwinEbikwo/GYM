import React from "react";
// import Image from "next/image";

export default function Team() {
  return (
    <section className="Team" data-scroll-section>
      <div className="container container--pall">
        <div className="team__wrapper">
          <div className="text__text">
            <span>Private coaching</span>
            <h1>Meet our trainers</h1>
            <p className="team__desc">
              All our personal trainers have over 7 years of experience
              combined. Each trainer specializes in strength and mobility
              workouts.
            </p>
          </div>

          <div className="text__text">
            <span>Free Trail</span>
            <h1>7 day trail</h1>
            <p className="team__desc">
              You can work with a trainer for up to 7 days for free in order to
              see if they are a good fit for you.
            </p>
          </div>

          <div className="team__card">
            <img
              src="/02.jpg"
              // width={1920}
              // height={2880}
              alt="images of trainer"
              className="team__img"
            />
            <p>Sarah</p>
          </div>

          <div className="team__card">
            <img
              loading="lazy"
              src="/services.jpg"
              // width={1920}
              // height={2880}
              alt="images of trainer"
              className="team__img"
            />
            <p>Musa</p>
          </div>

          <div className="team__card">
            <img
              loading="lazy"
              src="/03.jpg"
              // width={1920}
              // height={2880}
              alt="images of trainer"
              className="team__img"
            />
            <p>Tobi</p>
          </div>

          <div className="team__card">
            <img
              loading="lazy"
              src="/04.jpg"
              // width={1920}
              // height={2880}
              alt="images of trainer"
              className="team__img"
            />
            <p>Dan</p>
          </div>
        </div>
      </div>
    </section>
  );
}
