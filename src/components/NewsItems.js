import React, { Component } from "react";

class NewsItems extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, publishedAt,source } = this.props; //destructuring js

    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={imgUrl}
            className="card-img-top"
            alt="news"
            style={{
              height: "180px",
              objectFit: "cover",
            }}
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}
              <span className="position-absolute top-0  translate-middle badge rounded-pill bg-dark" style={{left:'80%', zIndex:1}}>
                {source}
              </span>
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-body-secondary no-wrap">
                Published on {new Date(publishedAt).toLocaleString()}{" "}
              </small>
            </p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems;
