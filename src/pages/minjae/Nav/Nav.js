import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

class Nav extends Component {
  render() {
    return (
      <div class="nav">
        <nav className="navContainer">
          <h1 className="navLogo">Westagram</h1>
          <input
            type="search"
            className="navSearch"
            name="q"
            placeholder="검색"
          />
          <ul className="navMenu">
            <li>
              <Link>
                <img
                  alt="explore"
                  className="navIcon"
                  src="/images/minjae/explore.png"
                />
              </Link>
            </li>
            <li>
              <Link>
                <img
                  alt="heart"
                  className="navIcon"
                  src="/images/minjae/heart.png"
                />
              </Link>
            </li>
            <li>
              <Link>
                <img
                  alt="profile"
                  className="navIcon"
                  src="/images/minjae/profile.png"
                />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
