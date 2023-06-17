import React from "react";
import "../../src/components/style.css";
import project from "../assets/images/project-1.jpg";
export default function RecentProjects() {
  return (
    <section className="section project" id="project" aria-label="project">
      <div className="container">
        <h2 className="h2 section-title">Our Recent Projects</h2>

        <p className="section-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <ul className="grid-list">
          <li>
            <div className="project-card">
              <figure
                className="card-banner img-holder"
                style={{ width: 332, height: 456 }}
              >
                <img
                  src={project}
                  loading="lazy"
                  alt="Designing a better cinema experience"
                  className="img-cover"
                ></img>
              </figure>

              <div className="card-content">
                <p className="card-subtitle">SEO Optimization</p>

                <h3 className="h3">
                  <a href="#" className="card-title">
                    Designing a better cinema experience
                  </a>
                </h3>

                <a href="#" className="btn btn-primary">
                  View Details
                </a>
              </div>
            </div>
          </li>

          <li>
            <div className="project-card">
              <figure
                className="card-banner img-holder"
                style={{ width: 332, height: 456 }}
              >
                <img
                  src={project}
                  width="510"
                  height="700"
                  loading="lazy"
                  alt="Designing a better cinema experience"
                  className="img-cover"
                ></img>
              </figure>

              <div className="card-content">
                <p className="card-subtitle">SEO Optimization</p>

                <h3 className="h3">
                  <a href="#" className="card-title">
                    Designing a better cinema experience
                  </a>
                </h3>

                <a href="#" className="btn btn-primary">
                  View Details
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="project-card">
              <figure
                className="card-banner img-holder"
                style={{ width: 332, height: 456 }}
              >
                <img
                  src={project}
                  width="510"
                  height="700"
                  loading="lazy"
                  alt="Designing a better cinema experience"
                  className="img-cover"
                ></img>
              </figure>

              <div className="card-content">
                <p className="card-subtitle">SEO Optimization</p>

                <h3 className="h3">
                  <a href="#" className="card-title">
                    Designing a better cinema experience
                  </a>
                </h3>

                <a href="#" className="btn btn-primary">
                  View Details
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
