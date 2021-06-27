import React, { Component } from "react";
import "./Login.scss";
import "../../../styles/common.scss";
import { id } from "postcss-selector-parser";

class Login extends Component {
  constructor(e) {
    super(e);

    this.state = {
      userId: "",
      userPw: "",
    };
  }

  goToMain = () => {
    this.props.history.push("/mainPark");
  };

  handleIdInput = (e) => {
    this.setState({
      userId: e.target.value,
    });
  };

  handlePwInput = (e) => {
    this.setState({
      userPw: e.target.value,
    });
  };

  checkSubmmit = () => {
    const { userId, userPw } = this.state;
    return userId.includes("@") > 0 && userPw.lenght >= 5;
  };

  handleSubmit = (e) => {
    if (!this.checkSubmmit()) {
      e.preventDefault();
      return;
    }
  };

  render() {
    const isEnabled = this.checkSubmmit();

    return (
      <div className="LogInPageAll">
        <main className="mainLogIn">
          <header className="mainLogo">
            <p>Westagram</p>
          </header>
          <div id="loginWrapper">
            <section className="loginContents">
              <div>
                <input
                  type="text"
                  id="typingId"
                  onChange={this.handleIdInput}
                  placeholder="전화번호, 사용자 이름 또는 이메일"
                />
              </div>
              <div>
                <input
                  type="password"
                  id="password"
                  onChange={this.handlePwInput}
                  placeholder="비밀번호"
                />
              </div>
            </section>
            <div>
              <button
                className="login-btn"
                disabled={!isEnabled}
                onClick={this.goToMain}
              >
                로그인
              </button>
            </div>
          </div>
          <footer className="forgotPw">
            <p>비밀번호를 잊으셨나요?</p>
          </footer>
        </main>
      </div>
    );
  }
}

export default Login;
