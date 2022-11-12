import React, { Component } from "react";
import axios from "axios";

export default class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputDate: "",
      newfiles: null,
    };
  }

  handleFile(e) {
    // Getting the files from the input
    let newfiles = e.target.newfiles;
    this.setState({ newfiles });
  }

  handleUpload(e) {
    let newfiles = this.state.newfiles;

    let formData = new FormData();

    // Adding files to the formdata
    formData.append("image", newfiles);
    formData.append("name", "Name");

    // axios({
    //   // Endpoint to send files
    //   url: "http://localhost:8080/files",
    //   method: "POST",
    //   headers: {
    //     // Add any auth token here
    //     authorization: "your token comes here",
    //   },

    //   // Attaching the form data
    //   data: formData,
    // })
    // Handle the response from backend here
    // .then((res) => {})

    // // Catch errors if any
    // .catch((err) => {});
  }

  render() {
    return (
      <>
        <div>
          <h1>Select your files</h1>
          <input
            type="file"
            // To select multiple files
            multiple="multiple"
            onChange={(e) => this.handleFile(e)}
          />
          <button onClick={(e) => this.handleUpload(e)}>Send Files</button>
        </div>

        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            <div className="post-preview">
              <a href="post.html">
                <h2 className="post-title">
                  Man must explore, and this is exploration at its greatest
                </h2>
                <h3 className="post-subtitle">
                  Problems look mighty small from 150 miles up
                </h3>
              </a>
              <p className="post-meta">
                Posted by
                <a href="#!">Start Bootstrap</a>
                on September 24, 2022
              </p>
            </div>
            <hr className="my-4" />
            <div className="post-preview">
              <a href="post.html">
                <h2 className="post-title">
                  I believe every human has a finite number of heartbeats. I
                  don't intend to waste any of mine.
                </h2>
              </a>
              <p className="post-meta">
                Posted by
                <a href="#!">Start Bootstrap</a>
                on September 18, 2022
              </p>
            </div>
            <hr className="my-4" />
            <div className="post-preview">
              <a href="post.html">
                <h2 className="post-title">
                  Science has not yet mastered prophecy
                </h2>
                <h3 className="post-subtitle">
                  We predict too much for the next year and yet far too little
                  for the next ten.
                </h3>
              </a>
              <p className="post-meta">
                Posted by
                <a href="#!">Start Bootstrap</a>
                on August 24, 2022
              </p>
            </div>
            <hr className="my-4" />
            <div className="post-preview">
              <a href="post.html">
                <h2 className="post-title">Failure is not an option</h2>
                <h3 className="post-subtitle">
                  Many say exploration is part of our destiny, but it’s actually
                  our duty to future generations.
                </h3>
              </a>
              <p className="post-meta">
                Posted by
                <a href="#!">Start Bootstrap</a>
                on July 8, 2022
              </p>
            </div>
            <hr className="my-4" />
            <div className="d-flex justify-content-end mb-4">
              <a className="btn btn-primary text-uppercase" href="#!">
                Older Posts →
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
