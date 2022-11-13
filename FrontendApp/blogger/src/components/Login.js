import React, { Component } from "react";
import axios from "axios";
import Posts from "./Posts.js";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "admin",
      password: "pass",
      token: "",
    };
  }

  handleSubmit(e) {
    let username = this.state.username;
    let password = this.state.password;

    let formData = new FormData();

    // Adding files to the formdata
    formData.append("username", username);
    formData.append("password", password);

    axios({
      // Endpoint to send files
      url: "http://localhost/headerlessWP/wp-json/jwt-auth/v1/token",
      method: "POST",
      headers: {
        // Add any auth token here here you can use your JWT token
        "Content-Type": "application/json",
      },
      // Attaching the form data
      data: formData,
    })
      //Handle the response from backend here
      .then((res) => {
        console.log(res);
        this.setState({ token: res.data.token });
      })

      // Catch errors if any
      .catch((err) => {
        console.error("Error", err.data[0]);
      });
  }

  render() {
    const isLoggedIn = this.state.token;
    let myposts;
    if (isLoggedIn) {
      myposts = <Posts />;
    } else {
      myposts = "";
    }
    return (
      <>
        {/* <div>
          <h1>Title</h1>
          <input type="text" onChange={(e) => this.handleFile(e)} />
        </div>
        <div>
          <h1>Content</h1>
          <textarea onChange={(e) => this.handleFile(e)} />
        </div> */}
        <div>
          Post can be viewed only if token is generated. <br />
          <button onClick={(e) => this.handleSubmit(e)}>View Post</button>
        </div>
        {/* {this.state.token} */}
        {myposts}
      </>
    );
  }
}
