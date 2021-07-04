import React, { Component } from "react";
import Nav from "../Nav/Nav";
import Article from "./components/Article/Article";
import Aside from "./components/Aside/Aside";
import "./Main.scss";

class Main extends Component {
  constructor() {
    super();

    this.state = {
      feedS: [],
    };
  }

  componentDidMount() {
    fetch("data/Feed.json")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          feedS: data,
        });
      });
  }

  render() {
    const { feedS } = this.state;
    console.log(feedS);
    return (
      <>
        <Nav />
        <div className="mainPageAll">
          <main className="mainPage">
            {feedS.map((eve) => {
              return (
                <Article
                  key={eve.feedId}
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
  0;
}

export default Main;
