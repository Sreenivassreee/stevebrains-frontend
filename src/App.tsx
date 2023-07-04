import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import RecentProjects from "./components/RecentProjects";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Team from "./components/Team";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      {/* <Services /> */}
      {/* <RecentProjects /> */}
      <AboutUs />
      <Team />
      <ContactUs />
    </div>
  );
}

export default App;
