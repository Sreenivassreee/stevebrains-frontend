import React, { useState } from "react";
import MailIcon from "@mui/icons-material/Mail";
const client = require("@mailchimp/mailchimp_marketing");
import { Container, Row, Col } from "react-bootstrap";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import Dropdown from "react-bootstrap/Dropdown";
import { fireBaseApp } from "../data/firebaseConstants";
// import { toast } from "react-toastify";

// import "react-toastify/dist/ReactToastify.css";

import { SnackbarProvider, closeSnackbar, enqueueSnackbar } from "notistack";
export default function ContactUs() {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [message, setMessage] = useState<string>();
  const [phone, setPhone] = useState<string>();
  const [subject, setSubject] = useState<string>();

  function formHandle(event: any) {
    const snackbarId = enqueueSnackbar("Loading...", {
      variant: "info",
      persist: true,
      anchorOrigin: { horizontal: "right", vertical: "bottom" },
    });
    // enqueueSnackbar(snackbarId);
    event.preventDefault();
    var today = new Date();
    const timeStamp = Date.now();

    const db = getFirestore(fireBaseApp);

    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    var tempToday = dd + "/" + mm + "/" + yyyy;

    addDoc(
      collection(
        db,
        "usersData",
        "users",
        String(yyyy),
        String(yyyy),
        String(mm),
        String(mm),
        String(dd)
      ),
      { name, email, phone, subject, message, timeStamp }
    )
      .then((x: any) => {
        closeSnackbar(snackbarId);

        if (x != null) {
          // alert("Sucessfully Submitted!");
          enqueueSnackbar("Sucessfully Submitted!", {
            variant: "success",
            autoHideDuration: 3000,
            anchorOrigin: { horizontal: "right", vertical: "bottom" },
          });
          // toast.success("Sucessfully Submitted!", {
          //   position: toast.POSITION.BOTTOM_RIGHT,
          // });
          // toast("🦄 Wow so easy!", {
          //   position: "top-right",
          //   autoClose: 5000,
          //   hideProgressBar: false,
          //   closeOnClick: true,
          //   pauseOnHover: true,
          //   draggable: true,
          //   progress: undefined,
          //   theme: "light",
          // });

          setName("");
          setEmail("");
          setMessage("");
          setSubject("");
          setPhone("");
        }
      })
      .catch((x: Error) => {
        // toast.error("Failed!", {
        //   position: toast.POSITION.BOTTOM_RIGHT,
        // });
        enqueueSnackbar("Failed try again !", {
          variant: "error",
          autoHideDuration: 3000,
          anchorOrigin: { horizontal: "right", vertical: "bottom" },
        });
        console.log("Error ::", x);
      });
  }

  return (
    <>
      <SnackbarProvider autoHideDuration={3000}>
        <div className="section contact" id="contact" aria-label="contact">
          <div className="container">
            <h2 className="h2 section-title">Let's Contact</h2>

            <p className="section-text">
              Let us connect the dots and unlock endless possibilities together.
            </p>

            <form className="contact-form" onSubmit={(e) => formHandle(e)}>
              <div className="input-wrapper">
                <input
                  type="text"
                  name="name"
                  aria-label="name"
                  placeholder="Your name"
                  value={name}
                  required
                  className="input-field"
                  onChange={(e) => setName(e.target.value)}
                ></input>

                <input
                  type="email"
                  name="email_address"
                  aria-label="email"
                  value={email}
                  placeholder="Email address"
                  required
                  className="input-field"
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>

              <div className="input-wrapper">
                <input
                  type="text"
                  name="subject"
                  value={subject}
                  aria-label="subject"
                  required
                  placeholder="Subject"
                  className="input-field"
                  onChange={(e) => setSubject(e.target.value)}
                ></input>

                <input
                  type="number"
                  name="phone"
                  aria-label="phone"
                  value={phone}
                  required
                  placeholder="Phone number"
                  className="input-field"
                  onChange={(e) => setPhone(e.target.value)}
                ></input>
              </div>

              <textarea
                name="message"
                aria-label="message"
                placeholder="Your message..."
                required
                value={message}
                className="input-field"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>

              {/* <div className="checkbox-wrapper">
              <input
                type="checkbox"
                name="terms_and_policy"
                id="terms"
                required
                className="checkbox"
              ></input>

              <label htmlFor="terms" className="label">
                Accept{" "}
                <a href="#" className="label-link">
                  Terms of Services
                </a>{" "}
                and{" "}
                <a href="#" className="label-link">
                  Privacy Policy
                </a>
              </label>
            </div> */}

              <button className="btn btn-primary">Send Message</button>
            </form>

            <ul className="contact-list">
              <li className="contact-item">
                <div className="contact-card">
                  {/* <div className="card-icon"><MailIcon /></div> */}

                  <div className="card-content">
                    <h3 className="h3 card-title">Mail</h3>
                    <p>Sreenivas K</p>

                    {/* <a href="mailto:hello@luaz.com" className="card-link">
                    Sreenivas K
                  </a> */}
                    <a
                      href="mailto:sreenivas@stevebrains.com"
                      className="card-link"
                    >
                      sreenivas@stevebrains.com
                    </a>
                  </div>
                </div>
              </li>

              <li className="contact-item">
                <div className="contact-card">
                  {/* <div className="card-icon"> */}
                  {/* <ion-icon name="headset-outline" aria-hidden="true"></ion-icon> */}
                  {/* </div> */}

                  <div className="card-content">
                    <h3 className="h3 card-title">Call</h3>

                    <p>Sreenivas K</p>
                    <a href="tel:++91 9505501046" className="card-link">
                      +91 9505501046
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </SnackbarProvider>
    </>
  );
}
