import React from "react";
import "../../src/components/style.css";
import banner from "../assets/images/hero-banner.png";
export default function Home() {
  return (
    <section className="section hero" id="home" aria-label="hero">
      <div className="container">
        <div className="hero-content">
          <p className="hero-subtitle">SteveBrains</p>

          <h1 className="h1 hero-title">Let us Build your Business.</h1>

          <p className="hero-text">
            At SteveBrains, we believe that a well-designed website is more than
            just an online presence. It's a powerful tool that connects you with
            your target audience, showcases your brand identity, and drives
            tangible results.
          </p>

          {/* <a href="#" className="btn btn-primary">
            Get Started
          </a> */}
        </div>

        <figure className="hero-banner">
          {/* <Image src="./assets/images/hero-banner.png" width="720" height="673" alt="hero banner" className="w-100"> */}
          <img src={banner} alt="hero banner" className="w-100" />
        </figure>
      </div>
    </section>
  );
}
