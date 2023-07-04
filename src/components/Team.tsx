// <!DOCTYPE html>
// <html>

// <head>
//     <meta charset="utf-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Untitled</title>
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css">
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
//     <link rel="stylesheet" href="style.css">
// </head>

import "../assets/css/teamStyles.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
// import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
export default function Team() {
  const data = [
    {
      name: "Sreenivas K",
      url: "https://res.cloudinary.com/dlvfsbqkn/image/upload/v1688497335/SteveBrains/image_7_1_vukupy.png",
      etc: "Funder and CEO",
      mail: "sreenivas@stevebrains.com",
    },

    {
      name: "Pavan Kalyan",
      url: "https://res.cloudinary.com/dlvfsbqkn/image/upload/v1688497430/SteveBrains/1ca8f733-7d77-4f7f-bf4c-408315c8fd76_2_yjdejy.png",
      etc: "-",
      mail: "Software Developer",
    },
    {
      name: "Shaistha sulthana",
      url: "https://res.cloudinary.com/dlvfsbqkn/image/upload/v1688497692/SteveBrains/Group_7_anklhc.png",
      etc: "-",
      mail: "Software Developer",
    },
    {
      name: "Rajashekar",
      url: "https://res.cloudinary.com/dlvfsbqkn/image/upload/v1688498005/SteveBrains/PHOTO-2023-06-19-19-39-20_2_kj71r4.png",
      etc: "Full Stack Developer",
      mail: "15+ years Experience",
    },
    {
      name: "Naveen Kumar",
      url: "https://res.cloudinary.com/dlvfsbqkn/image/upload/v1688498139/SteveBrains/b9c7beff-0f99-49c5-996a-aa1a72477419_2_2_eak5vr.png",
      etc: "",
      mail: "Software Engineer",
    },
    {
      name: "Vinay",
      url: "https://res.cloudinary.com/dlvfsbqkn/image/upload/v1688498232/SteveBrains/image_16_e5gu0o.png",
      etc: "",
      mail: "HR Operations",
    },
  ];
  return (
    <>
      <section className="section container " id="team" aria-label="contact">
        <div className="intro">
          <h2 className="text-center h2 section-title">Team </h2>
          <p className="text-center">
            Like lines of code interwoven, our team of developers brings digital
            dreams to life. Together, we debug the world one byte at a time.
          </p>
          <div className="team-card-container ">
            {data.map((person, index) => (
              <div className="team-card" key={index}>
                <div className="team-card-photo">
                  <img src={person.url} alt={person.name} />
                </div>
                <h3 className="team-card-name">{person.name}</h3>
                <p>{person.etc}</p>
                <p>{person.mail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

//  <div className="team-boxed">
//    <div className="container">
//  <div className="intro">
//    <h2 className="text-center">Team </h2>
//    <p className="text-center">
//      Nunc luctus in metus eget fringilla. Aliquam sed justo ligula.
//      Vestibulum nibh erat, pellentesque ut laoreet vitae.
//    </p>
//  </div>
//      <div className="row people">
//        <div className="card">
//          <div className="box">
//            <img
//              className="rounded-circle"
//              src="https://res.cloudinary.com/dkzahegxw/image/upload/v1686642569/samples/people/smiling-man.jpg"
//            ></img>
//            <h3 className="name">Ben Johnson</h3>
//            <p className="title">Musician</p>
//            <p className="description">
//              Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
//              Praesent aliquam in tellus eu gravida. Aliquam varius finibus est,
//              et interdum justo suscipit id. Etiam dictum feugiat tellus, a
//              semper massa.{" "}
//            </p>
//            <div className="social">
//              <a href="#">
//                <i className="fa fa-facebook-official"></i>
//              </a>
//              <a href="#">
//                <i className="fa fa-twitter"></i>
//              </a>
//              <a href="#">
//                <i className="fa fa-instagram"></i>
//              </a>
//            </div>
//          </div>
//        </div>
//        <div className="card">
//          <div className="box">
//            <img
//              className="rounded-circle"
//              src="https://res.cloudinary.com/dlvfsbqkn/image/upload/v1688496802/SteveBrains/image_7_vcgpe4.png"
//            ></img>
//            <h3 className="name">Emily Clark</h3>
//            <p className="title">Artist</p>
//            <p className="description">
//              Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
//              Praesent aliquam in tellus eu gravida. Aliquam varius finibus est,
//              et interdum justo suscipit id. Etiam dictum feugiat tellus, a
//              semper massa.{" "}
//            </p>
//            <div className="social">
//              <a href="#">
//                <i className="fa fa-facebook-official"></i>
//              </a>
//              <a href="#">
//                <i className="fa fa-twitter"></i>
//              </a>
//              <a href="#">
//                <i className="fa fa-instagram"></i>
//              </a>
//            </div>
//          </div>
//        </div>
//        <div className="card">
//          {/* <div className="box"> */}
//          <img className="rounded-circle" src="assets/img/3.jpg"></img>
//          <h3 className="name">Carl Kent</h3>
//          <p className="title">Stylist</p>
//          <p className="description">
//            Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
//            Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, et
//            interdum justo suscipit id. Etiam dictum feugiat tellus, a semper
//            massa.{" "}
//          </p>
//          <div className="social">
//            <a href="#">
//              <i className="fa fa-facebook-official"></i>
//            </a>
//            <a href="#">
//              <i className="fa fa-twitter"></i>
//            </a>
//            <a href="#">
//              <i className="fa fa-instagram"></i>
//            </a>
//          </div>
//          {/* </div> */}
//        </div>
//      </div>
//    </div>
//  </div>;
