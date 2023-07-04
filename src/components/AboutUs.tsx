import React from "react";

export default function AboutUs() {
  return (
    <section className="section about" id="about" aria-label="about">
      <div className="container">
        <div
          className="about-banner img-holder"
          style={{ "--width": 1200, "--height": 1200 } as React.CSSProperties}
        >
          <img
            src={
              "https://res.cloudinary.com/dlvfsbqkn/image/upload/v1688497020/SteveBrains/Group_8_wgopkk.png"
            }
            width="830"
            height="910"
            loading="lazy"
            alt="about banner"
            className="img-cover"
          ></img>
        </div>

        <div className="about-content">
          <h2 className="h2 section-title">About Us</h2>

          <p className="section-text">
            Empowering businesses, igniting innovation: We not only deliver
            exceptional software solutions, but also embark on our own projects,
            fueling our entrepreneurial spirit and driving positive change in
            various industries. From client collaborations to in-house ventures,
            we are dedicated to pushing boundaries and making a lasting impact
            through our innovative ideas and unwavering passion.
          </p>

          <h3 className="h3">Who We Are</h3>

          <p className="section-text">
            At our core, we are a diverse and talented group of developers
            scattered across the world, each residing in different cities but
            united by our passion for crafting exceptional software solutions.
            Our virtual collaboration transcends geographical boundaries as we
            seamlessly work together, leveraging our collective expertise to
            deliver cutting-edge products that drive innovation and transform
            industries. With a global network of brilliant minds, we possess the
            unique ability to harness the power of technology and turn ideas
            into reality.
          </p>

          <h3 className="h3">Our Success</h3>

          <ul className="about-list">
            <li className="about-item">
              {/* <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon> */}

              <p className="section-text">
                With a track record of accomplishment, we are proud to have
                successfully completed two groundbreaking products, leaving two
                satisfied clients in our wake. These milestones stand as a
                testament to our unwavering commitment to excellence and our
                ability to deliver software solutions that exceed expectations.
              </p>
            </li>

            {/* <li className="about-item">
          
              <p className="section-text">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </li> */}

            {/* <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon> */}
            {/* <li className="about-item">
                <p className="section-text">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classNameical Latin literature.
                </p>
              </li> */}
          </ul>

          <h3 className="h3">Our Mission</h3>

          <p className="section-text">
            At SteveBrains, our mission is to empower businesses with the
            transformative potential of technology. We strive to be the
            catalysts of growth, innovation, and success in an ever-evolving
            digital landscape. By leveraging our deep expertise and staying at
            the forefront of technological advancements, we develop innovative
            software solutions that solve complex challenges, streamline
            processes, and unlock new opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}
