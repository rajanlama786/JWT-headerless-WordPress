import React, { Component } from "react";
import axios from "axios";

export default class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
    };
  }

  handleFile(e) {
    // Getting the files from the input
    let title = e.target.title;
    let content = e.target.content;
    this.setState({ title });
    this.setState({ content });
  }

  handleSubmit(e) {
    let title = this.state.title;
    let content = this.state.content;

    let formData = new FormData();

    // Adding files to the formdata
    formData.append("title", title);
    formData.append("content", content);

    axios({
      // Endpoint to send files
      url: "http://localhost/headerlessWP/wp-json/",
      method: "POST",
      headers: {
        // Add any auth token here here you can use your JWT token
        authorization: "your token comes here",
      },

      // Attaching the form data
      data: formData,
    })
      //Handle the response from backend here
      .then((res) => {})

      // Catch errors if any
      .catch((err) => {});
  }

  render() {
    return (
      <>
        <div>
          <h1>Title</h1>
          <input type="text" onChange={(e) => this.handleFile(e)} />
        </div>
        <div>
          <h1>Content</h1>
          <textarea onChange={(e) => this.handleFile(e)} />
        </div>
        <div>
          <button onClick={(e) => this.handleSubmit(e)}>Submit</button>
        </div>
      </>
    );
  }
}
