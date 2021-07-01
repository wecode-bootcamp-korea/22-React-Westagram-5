import React from "react";
import "./Main.js";
import "./Main.scss";
import "../../../styles/common.scss";
import "../../../styles/reset.scss";
import Nav from "../Nav/Nav";
import Article from "../Main/components/Article/Article";
import Aside from "../Main/components/Aside/Aside";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      feeds: [],
    };
  }

  componentDidMount() {
    fetch("/data/mainData.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          feeds: data,
        });
      });
  }

  render() {
    return (
      <>
        <Nav />
        <main>
          <div className="feed">
            <Article />
            <Aside />
            <Article />
          </div>
        </main>
      </>
    );
  }
}

export default Main;
