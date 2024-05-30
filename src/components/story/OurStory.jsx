import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ourstory.css";

function OurStory() {
  const navigate = useNavigate();

  return (
    <section className="ourstory section">
      <h2 className="section_title">Our Story</h2>
      <span className="section_subtitle">
        <Link onClick={navigate("/home")}>back</Link>
      </span>
    </section>
  );
}

export default OurStory;
