import React from "react";
import profilePicture from "../../../static/assets/images/bio/headshot.jpg";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ")  no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      ></div>
      <div className="right-column">
        Software Developer recently graduated from Bottega University with a
        strong knowledge of software engineering and programming principles
        across multiple languages. I am passionate about development and am
        always looking for exciting opportunities to learn and better myself as
        a developer.
      </div>
    </div>
  );
}
