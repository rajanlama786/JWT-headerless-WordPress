import React, { Component } from "react";
import axios from "axios";

import { wrapper, main, sitename, siteDescription } from "../config.js";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sitename: "Blogger Site",
      sitedescription: "Just Another Headerless Site",
    };
  }
  render() {
    return (
      <>
        <header
          className="masthead"
          style={{ backgroundImage: "url('assets/img/home-bg.jpg')" }}
        >
          <div className="container position-relative px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
              <div className="col-md-10 col-lg-8 col-xl-7">
                <div className="site-heading">
                  <h1 id="site-title">{this.state.sitename}</h1>
                  <span className="subheading" id="site-description">
                    {this.state.sitedescription}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}
