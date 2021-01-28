/* eslint-disable react/prop-types */
import React from "react";
import Image from "next/image";

export default function Membership() {
  return (
    <section className="membership" data-scroll-section>
      <div className="container container--pall">
        <h1>View our plans</h1>
        <p className="m-desc">
          Get started today and recieve 25% off your first two months!
        </p>
        <div className="m-wrapper">
          <Mcard
            title="starter"
            price="$20/"
            perks="Get access to the entire gym"
          />
          <Mcard
            title="silver"
            price="$50/"
            perks="Get access to the gym"
            perksTwo="Group fitness classes"
          />
          <Mcard
            title="Gold"
            price="$100/"
            perks="Get access to the gym"
            perksTwo="Group fitness classes"
            perksThree="Private personal coaching"
          />
        </div>
      </div>
    </section>
  );
}

function Mcard({ title, perks, perksTwo, perksThree, price }) {
  return (
    <div className="m-card">
      <div className="m-title">
        <Image
          src="/dumbbell.svg"
          width={44}
          height={44}
          alt="started dumbell images"
        />
        <div style={{ marginBottom: "1rem", marginTop: "1rem" }}>
          <h4>
            {price}
            <span>month</span>
          </h4>
        </div>
        <h3>{title}</h3>
      </div>
      <div className="m-perks">
        <p>{perks}</p>
        <p>{perksTwo}</p>
        <p>{perksThree}</p>
      </div>
      <div className="bottom">
        <a href="/" className="btn">
          Get started
        </a>
      </div>
    </div>
  );
}
