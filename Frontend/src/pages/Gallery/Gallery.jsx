import React, { useEffect } from "react";
import "./Gallery.scss";

const Gallery = () => {
  return (
    <dl id="simple-gallery">
      <div className="gallery-item">
        <dt tabIndex="1">
          <img src="./img/gallery/Halo.webp" alt="mainPic" />
        </dt>
        <dd>
          <img src="./img/gallery/Halo.WEBP" alt="mainPic" />
          Préparation d'un saut HALO afin de neutraliser une base aérienne AAF
        </dd>
      </div>
      <div className="gallery-item">
        <dt tabIndex="2">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/paris-thumb.jpg"
            alt=""
          />
        </dt>
        <dd>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/paris.jpg"
            alt=""
          />
          The Eiffel tower, Paris
        </dd>
      </div>
      <div className="gallery-item">
        <dt tabIndex="3">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/san-francisco-thumb.jpg"
            alt=""
          />
        </dt>
        <dd>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/san-francisco.jpg"
            alt=""
          />
          Golden Gate bridge at sunset, San Francisco
        </dd>
      </div>
      <div className="gallery-item">
        <dt tabIndex="2">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/paris-thumb.jpg"
            alt=""
          />
        </dt>
        <dd>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/paris.jpg"
            alt=""
          />
          The Eiffel tower, Paris
        </dd>
      </div>
    </dl>
  );
};

export default Gallery;
