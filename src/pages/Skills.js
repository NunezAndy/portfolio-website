import React from 'react'
import "../styles/Skills.css";

function Skills() {
  return (
    <div className="skills">
      <h1> Skills </h1>
      <ol className="list">
        <li className="item">
          <h2> Front-End </h2>
          <span> JavaScript, React.JS, NPM, Three.JS, HTML5, CSS3 Material UI, Bootstrap </span>
        </li>
        <li className="item">
          <h2> Back-End </h2>
          <span> Node.JS, Express.JS, Python, Flask, PostgreSQL, MongoDB, MySQL </span>
        </li>
        <li className="item">
          <h2> Tools </h2>
          <span> GitHub, Git, VS Code, Eclipse, Insomnia, Postico </span>
        </li>
      </ol>
    </div>
  )
}

export default Skills