import React from "react";

export default function Services() {
  interface service {
    title: string;
    icon: string;
    description: string;
  }

  const Services: service[] = [
    {
      title: "Brand Website Development",
      icon: "",
      description: "we Build websites for your brand",
    } as service,
    {
      title: "",
      icon: "",
      description: "",
    } as service,
    {
      title: "",
      icon: "",
      description: "",
    } as service,
    {
      title: "",
      icon: "",
      description: "",
    } as service,
    {
      title: "",
      icon: "",
      description: "",
    } as service,
  ];
  return (
    <section className="section service" id="service" aria-label="service">
      <div className="container">
        <h2 className="h2 section-title">Services We Provided</h2>

        <p className="section-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </p>

        <ul className="grid-list">
          {Services.map((service) => {
            return (
              <li>
                <div className="service-card">
                  <div
                    className="card-icon"
                    style={{ backgroundColor: "#13c4a1" }}
                  >
                    {/* <div style={{color: "red"}}>Hello Style!</h1> */}
                    {/* <ion-icon name="chatbox"></ion-icon> */}
                  </div>

                  <h3 className="h3">
                    <a href="#" className="card-title">
                      SEO Optimization
                    </a>
                  </h3>

                  <p className="card-text">
                    Sed ut perspiciatis unde omnis iste natus error sit tatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque
                    ipsa quae.
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
