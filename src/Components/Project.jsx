import React from "react";

export default function Project({
  thumbnail,
  skills,
  description,
  code,
  demo,
  name,
}) {
  return (
    <div className="card" style={{ background: "#3D4559" }}>
      <div className="green-bar"></div>
      <img src={thumbnail} alt="Screenshot" className="card-img-top" />
      <div className="overlay">
        <ul style={{ lineHeight: "2" }}>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "100%",
          }}
        >
          <a
            className="btn btn-outline"
            href={code}
            target="_blank"
            rel="noreferrer"
          >
            Code
          </a>
          <a
            className="btn btn-filled"
            href={demo}
            target="_blank"
            rel="noreferrer"
          >
            Demo
          </a>
        </div>
      </div>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text" style={{ color: "#B7B7B7 " }}>
          {description}
        </p>
      </div>
    </div>
  );
}
