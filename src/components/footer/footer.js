import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer>
    <h2>Financial Samurai</h2>
    <ul>
      <li>
        <a href="https://www.linkedin.com/in/jen4web" target="_blank">
          {" "}
          <span className="fab fa-linkedin" aria-hidden="true" />
          <span className="sr-only">LinkedIn</span>{" "}
        </a>
      </li>
      <li>
        {" "}
        <a href="https://www.github.com/jen4web" target="_blank">
          <span className="fab fa-github-square" aria-hidden="true" />
          <span className="sr-only">Github</span>
        </a>{" "}
      </li>
      <li>
        <a href="mailto:jen@example.com">
          <span className="fas fa-envelope" aria-hidden="true" />
          <span className="sr-only">Email</span>
        </a>
      </li>
    </ul>
    <p>
      <small>©2023 Financial Samurai. All rights reserved</small>
    </p>
  </footer>
    </div>
  )
}

export default Footer