import React from "react";
import '../../src/components/style.css'
import banner from '../assets/images/hero-banner.png'
export default function Home() {
  return (
    <section className="section hero" id="home" aria-label="hero">
      <div className="container">

        <div className="hero-content">

          <p className="hero-subtitle">InnoHub Marketing Agency</p>

          <h1 className="h1 hero-title">We are available for marketing</h1>

          <p className="hero-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporthem incididunt ut labore et
            dolore magna
            aliqua.
          </p>

          <a href="#" className="btn btn-primary">Get Started</a>

        </div>

        <figure className="hero-banner">
          {/* <Image src="./assets/images/hero-banner.png" width="720" height="673" alt="hero banner" className="w-100"> */}
          <img src={banner} alt="hero banner" className="w-100" />
        </figure>

      </div>
    </section>
  )
}