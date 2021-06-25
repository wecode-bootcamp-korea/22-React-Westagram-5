import React from "react";
import "./Main.js";
import "./Main.scss";
import "../../../styles/common.scss";
import "../../../styles/reset.scss";
import Nav from "../Nav/Nav";
import Article from "../Main/components/Article/Article";
import Aside from "../Main/components/Aside/Aside";

class Main extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <main>
          <div className="feed">
            <Aside />
            <Article />
          </div>
        </main>
      </>
    );
  }
}

export default Main;
