import React from "react";
import noimage from "./noimage.jpg";
const NewsItem = (props) => {
  let { title, desc, url, imageUrl, source, date, author } = props;
  return (
    <div className="my-3">
      <div className="card" style={{ width: "18rem" }}>
        <div style={{ position: "relative" }}>
          <span
            className="badge rounded-pill bg-danger"
            style={{
              fontSize: "11px",
              position: "absolute",
              left: "178px",
              width: "110px",
            }}
          >
            {source}
          </span>
          <img
            src={imageUrl === "null" ? noimage : imageUrl}
            className="card-img-top"
            alt="..."
          />
        </div>
        <div className="card-body">
          <h5
            className="card-title"
            style={{ fontFamily: "Gothic A1", fontWeight: "bold" }}
          >
            {title}...
          </h5>

          <p className="card-text" style={{ fontFamily: "Oswald" }}>
            {desc}
          </p>
          <span
            style={{ fontSize: "13px", color: "#616159", fontFamily: "Oswald" }}
          >
            {author} / {date}
          </span>
          <br />
          <br />
          <a
            href={url}
            className="btn btn-sm btn-danger"
            style={{ borderRadius: "20px" }}
            target="blank"
          >
            Read More...
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
