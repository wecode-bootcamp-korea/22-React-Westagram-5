import React, { Component } from "react";
import "./Main.scss";
import Nav from "../Nav/Nav";
import Article from "./components/Article/Article";
import Aside from "./components/Aside/Aside";

class Main extends Component {
  constructor() {
    super();

    this.state = {
      feedS: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/data/Feed.json", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          feedS: data,
        });
      });
  }

  render() {
    const { feedS } = this.state;

    return (
      <>
        <Nav />
        <div className="mainPageAll">
          <main className="mainPage">
            {feedS.map((eve) => {
              return (
                <Article
                  feedId={eve.feedId}
                  userId={eve.userId}
                  imgSrc={eve.imgSrc}
                  comment={eve.comment}
                />
              );
            })}
            <Aside />
          </main>
        </div>
      </>
    );
  }
}

export default Main;
