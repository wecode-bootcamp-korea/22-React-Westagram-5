import React, { Component } from "react";
import "./Main.scss";
import Nav from "../Nav/Nav";
import Article from "../Main/components/Article/Article";
import Aside from "../Main/components/Aside/Aside";

class Main extends Component {
  render() {
    return (
      <div className="container">
        <Nav />
        <main>
          <div className="mainInner">
            <div>
              <Article />
            </div>
            <Aside />
          </div>
        </main>
      </div>
    );
  }
}

export default Main;
