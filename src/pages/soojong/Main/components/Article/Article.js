import React from "react";
import Comment from "./Comment";
import Feed from "./Feed";
import "../../../../../styles/common.scss";
import "../../../../../styles/reset.scss";
import "../Article/Article.scss";

class Article extends React.Component {
  constructor() {
    super();
    this.state = {
      comment: "",
      comments: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/data/mainData.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          comments: data,
        });
      });
  }

  InputValue = (e) => {
    this.setState({ comment: e.target.value });
  };

  enterComments = (e) => {
    if (e.key === "Enter") {
      this.uploadComments(e);
    }
  };

  uploadComments = (e) => {
    e.preventDefault();
    const { comments, comment } = this.state;
    this.setState({
      comments: [
        ...comments,
        {
          id: comments.length + 1,
          userId: "Soox_jk",
          content: comment,
        },
      ],
      comment: "",
    });
  };

  render() {
    const { comments, comment } = this.state;
    return (
      <>
        <article>
          <Feed />

          <ul>
            <li className="CommentList">
              {comments.map((comment) => {
                return (
                  <Comment
                    key={comment.id}
                    name={comment.userId}
                    comment={comment.content}
                  />
                );
              })}
            </li>
          </ul>

          <div className="commentbox">
            <input
              type="text"
              className="input_comment"
              id="input_comment"
              placeholder="댓글 달기 ..."
              onChange={this.InputValue}
              onKeyPress={this.enterComments}
              value={this.state.comment}
            />
            <button
              type="submit"
              className="submit_button"
              id="comment_submit"
              onClick={this.uploadComments}
            >
              게시
            </button>
          </div>
        </article>
      </>
    );
  }
}
export default Article;
