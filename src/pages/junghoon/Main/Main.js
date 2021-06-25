import React, { Component } from "react";
import "./Main.scss";
import Nav from "../Nav/Nav";
import Article from "./components/Article/Article";
import Aside from "./components/Aside/Aside";

class Main extends Component {
  render() {
    return (
      <>
        <Nav />
        <div className="mainPageAll">
          <main className="mainPage">
            <Article />
            <Aside />
          </main>
        </div>
      </>
    );
  }
}

export default Main;
