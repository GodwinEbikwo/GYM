import React from "react";

export default function Footer() {
  return (
    <section className="footer" data-scroll-section>
      <div className="container container--pall">
        <div className="f-grid">
          <div className="f-left">
            <h2>Clubhouse fitness</h2>
            <p>Luxury fitness and spa located in lifecamp abuja</p>
            <a className="link" href="/">
              0701 809 2709
            </a>
            <a className="link" href="/">
              fitness@clubhouse.com
            </a>
          </div>

          <div className="f-middle">
            <h2>Contact us</h2>
            <a className="link" href="/">
              Contact
            </a>
            <a className="link" href="/">
              Support
            </a>
            <a className="link" href="/">
              Sponsorships
            </a>
            <a className="link" href="/">
              Enquires and Bookings
            </a>
          </div>

          <div className="f-right">
            <h2>Membership</h2>
            <a className="link" href="/">
              Pricing
            </a>
            <a className="link" href="/">
              Plans
            </a>
            <a className="link" href="/">
              FAQ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
