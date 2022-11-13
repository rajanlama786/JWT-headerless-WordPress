import React, { Component } from "react";
//import { Link } from "react-router-dom";
import axios from "axios";

export default class Posts extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios
      .get(`http://localhost/headerlessWP/wp-json/wp/v2/posts`)
      .then((res) => {
        const posts = res.data;
        this.setState({ posts: posts });
        //console.log(posts);
      });
  }

  render() {
    return (
      <>
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            {this.state.posts.map((post, i) => (
              <>
                <div key={i}>
                  <div className="post-preview">
                    <h2
                      className="post-title"
                      dangerouslySetInnerHTML={{
                        __html: post.title.rendered,
                      }}
                    ></h2>
                    <p
                      className="post-subtitle"
                      dangerouslySetInnerHTML={{
                        __html: post.excerpt.rendered,
                      }}
                    ></p>

                    <p className="post-meta">
                      Posted by
                      <a href="#!">Start Bootstrap</a>
                      on {post.date}
                    </p>
                  </div>

                  <hr className="my-4" />
                </div>
              </>
            ))}

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
