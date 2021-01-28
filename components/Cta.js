/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useRef } from "react";

export default function Cta() {
  const inputEl = useRef(null);

  const [message, setMessage] = useState("");

  const subscribe = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();

    if (error) {
      setMessage(error);

      return;
    }

    inputEl.current.value = "";
    setMessage("Success! 🎉 You are now subscribed to the newsletter.");
  };

  return (
    <section className="CTA flex flex-ai-c flex-jc-c" data-scroll-section>
      <div className="container container--pall">
        <div className="c-inner">
          <h1>Get access to member only perks</h1>
          <p>
            Sign up to our newsletter to get access to FREE! training resources
            and a chance to win a 2 months free gym pass. Don't misss out
          </p>
          <div className="input-container">
            <form onSubmit={subscribe}>
              <label htmlFor="email-input">Email Address</label>
              <input
                aria-label="Email for newsletter"
                id="email-input"
                name="email"
                placeholder="you@awesome.com"
                ref={inputEl}
                type="email"
                className="input"
              />
              <div
                style={{
                  margin: ".5rem 0",
                  color: "white",
                  textShadow: "0 2px 0 black",
                }}
              >
                {message ||
                  `We only send emails when new content is posted. No spam.`}
              </div>
              <button type="submit" className="flex flex-ai-c flex-jc-c button">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
