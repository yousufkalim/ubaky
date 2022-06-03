// Init
import React from "react";
import logo from "../assets/images/logo.png";

// Component
export default function Header() {
  return (
    <section className="logo-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="logo-image">
              <img src={logo} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
