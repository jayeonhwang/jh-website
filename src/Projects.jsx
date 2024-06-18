import React from 'react';
import FlashCardThumbnail from '../images/Flash-card-thumbnail.jpeg';
import ShoppingMallThumbnail from '../images/Shopping-mall-thumbnail.jpeg';
import SimpleCategoriesImage from '../images/simple-categories.png';


export function Projects() {

  return (
    <div className="project">
      <h2>Jayeon&#39;s Learning Log</h2>

      <div className="project-container">
        <div className="card">
          <img src={FlashCardThumbnail} alt="" className="thumnail" />
          <div className="description">
            <h4>Flash-card app</h4>
            <p>This is a web app for studying. user can put questions and answers on cards and flipped them, so users could memorize them and check achievement with a quiz.</p>
          </div>

          <div className="skills">
            <ul className="skills-list">
              <li>Ruby on Rails</li>
              <li>React.js</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>

          <div className="links">
            <a href="https://fancy-tulumba-8b4202.netlify.app/" target="_blank" className="link-btn">
              <button>Demo</button>
            </a>
            <a href="https://github.com/jayeonhwang/flash-card-frontend" target="_blank">
              <button>Repo</button>
            </a>
          </div>

        </div>

        <div className="card">
          <img src={ShoppingMallThumbnail} alt="" className="thumnail" />
          <div className="description">
            <h4>Clip Couture</h4>
            <p>It&#39;s a virtual online shopping mall.
              It includes a registration, shopping bag, order history and payment system.</p>
          </div>

          <div className="skills">
            <ul className="skills-list">
              <li>Ruby on Rails</li>
              <li>React.js</li>
              <li>TailwindCSS</li>
            </ul>
          </div>
          <div className="links">
            <a href="https://poetic-croissant-099c70.netlify.app/" target="_blank" className="link-btn">
              <button>Demo</button>
            </a>
            <a href="https://github.com/jayeonhwang/clip-couture-frontend" target="_blank" className="link-btn">
              <button>Repo</button>
            </a>
          </div>
        </div>

        <div className="card">
          <img src={SimpleCategoriesImage} alt="" className="thumnail" />
          <div className="description">
            <h4>Simple Javascript Categories</h4>
            <p>This is simple filter with vanila javascript, CSS and HTML</p>
          </div>

          <div className="skills">
            <ul className="skills-list">
              <li>Javascript</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
          <div className="links">
            <a href="https://simplefilter.netlify.app/" target="_blank">
              <button>Demo</button>
            </a>
            <a href="https://github.com/jayeonhwang/js-categories" target="_blank">
              <button>Repo</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}