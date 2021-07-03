import React from "react";
import Nav from "../Nav/Nav";
import Article from "./components/Article/Article";
import Aside from "../Main/components/Aside/Aside";
import Feed from "../../soojong/Main/components/Article/Feed";
import "./Main.scss";
import "../Main/components/Article/Feed.scss";
import "./components/Article/Article";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      feed: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/data/feedData.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          feed: data,
        });
      });
  }

  render() {
    const { feed } = this.state;

    return (
      <>
        <Nav />
        <main>
          <article>
            <div className="feedBox">
              <Aside />
              {feed.map((feeds) => {
                return (
                  <Feed
                    profileId={feeds.profileId}
                    profileImg={feeds.profileImg}
                    postImg={feeds.postImg}
                    likeId={feeds.likeId}
                  />
                );
              })}
              <Article />
            </div>
          </article>
        </main>
      </>
    );
  }
}

export default Main;
