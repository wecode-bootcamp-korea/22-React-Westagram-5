import React from "react";
import "./Main.js";
import "./Main.scss";
import "../../../styles/common.scss";
import "../../../styles/reset.scss";
import Nav from "../Nav/Nav";
import FeedComment from "./components/Article/FeedComment";
import Aside from "../Main/components/Aside/Aside";
import Feed from "../../soojong/Main/components/Article/Feed";
import "../Main/components/Article/Feed.scss";
import "../Main/components/Article/FeedComment";

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
              <FeedComment />
            </div>
          </article>
        </main>
      </>
    );
  }
}

export default Main;
