import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import RecentProjects from "./components/RecentProjects";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Services />
      <RecentProjects />
      <AboutUs />
      <ContactUs />
    </div>
  );
}

export default App;
