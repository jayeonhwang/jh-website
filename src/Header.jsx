import React from 'react';
import { NavLink } from "react-router-dom"
import GithubIcon from '../logos/icons-github.png'
import EmailIcon from '../logos/icons-email.png'
import LinkedinIcon from '../logos/icons-linkedin.png'


export function Header() {
  return (
    <header>
      <div className="introduce">
        <h1 className="name">Jayeon Hwang</h1>
        <h3>Software Developer</h3>
        <p> Javascript | HTML | CSS | Ruby on Rails </p>
      </div>

      <div className="icons">
        <a href="https://www.linkedin.com/in/jay512" target='_blank' className="linkedin">
          <img src={LinkedinIcon} className="icon" />
        </a>
        <a href="https://github.com/jayeonhwang" target='_blank' className="github">
          <img src={GithubIcon} alt="github" className="icon" />
        </a>
        <a href="mailto:jayeon512@gmail.com" target='_blank' className="email">
          <img src={EmailIcon} alt="email" className="icon" />
        </a>
      </div>

      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              activeClassName="active"
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              activeClassName="active"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              activeClassName="active"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>



    </header>
  )
}

