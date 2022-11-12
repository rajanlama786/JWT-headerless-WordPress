import React, { Component } from "react";
import axios from "axios";

// import { wrapper, main, sitename, siteDescription } from "./config.js";
// import { getEl, createEl, removeEl, isRendered } from "./helpers.js";
// import { state, setState } from "./state.js";

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputDate: "",
    };
  }
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
          <div className="container px-4 px-lg-5">
            <a className="navbar-brand" href="index.html">
              Start Bootstrap
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ms-auto py-4 py-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link px-lg-3 py-3 py-lg-4"
                    href="index.html"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link px-lg-3 py-3 py-lg-4"
                    href="about.html"
                  >
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link px-lg-3 py-3 py-lg-4" href="post.html">
                    Sample Post
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link px-lg-3 py-3 py-lg-4"
                    href="contact.html"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
